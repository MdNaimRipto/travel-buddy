import httpStatus from "http-status";
import ApiError from "../../../../errors/ApiError";
import {
  IReservationFilters,
  IReservations,
  IUpdateArrayData,
  IUpdateReservation,
  IUploadArrayData,
} from "./reservations.interface";
import { Reservations } from "./reservations.schema";
import {
  generateReservationsId,
  reservationCreated,
} from "./reservations.utils";
import { BusinessProfile } from "../businessProfile/businessProfile.schema";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../../interface/pagination";
import { calculatePaginationFunction } from "../../../../helpers/paginationHelpers";
import { SortOrder } from "mongoose";
import { ReservationSearchableFields } from "./reservations.constant";

const uploadReservation = async (
  payload: IReservations,
): Promise<IReservations> => {
  const { profileId, reservationClass, reservationType, images } = payload;

  const isHotelExists = await BusinessProfile.findOne({ hotelId: profileId });
  if (!isHotelExists) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Hotel Does not Exists! Create Business Profile First.",
    );
  }

  const isExistsReservation = await Reservations.findOne({
    $and: [{ profileId }, { reservationClass }, { reservationType }],
  });
  if (isExistsReservation) {
    throw new ApiError(httpStatus.CONFLICT, "Reservation Already Exists!");
  }

  const reservationsCreated = await reservationCreated(profileId);
  if (
    isHotelExists.totalReservations <= reservationsCreated ||
    isHotelExists.totalReservations < payload.totalReservations
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "No More Reservation Space Left!",
    );
  }

  const reservationId = generateReservationsId();

  const isReservationIdExists = await Reservations.findOne({ reservationId });
  if (isReservationIdExists) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Something Went Wrong! Please Try Again",
    );
  }

  payload.reservationId = reservationId;

  payload.reservationsLeft = payload.totalReservations;

  if (images.length < 5) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Must Have to Upload 5 or More Images",
    );
  }

  const result = await Reservations.create(payload);

  return result;
};

// ! Pagination + Filter
const getAllReservations = async (
  filters: IReservationFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IReservations[]>> => {
  const { searchTerm, ...filterData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: ReservationSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  //
  if (Object.keys(filterData).length) {
    andConditions.push({
      $and: Object.entries(filterData).map(([field, value]) => {
        if (field === "minPrice") {
          return { discountedPrice: { $gte: value } };
        }
        if (field === "maxPrice") {
          return { discountedPrice: { $lte: value } };
        } else {
          return { [field]: value };
        }
      }),
    });
  }
  //
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const reservations = await Reservations.find(checkAndCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Reservations.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: reservations,
  };
};

const getReservationsByHotelId = async (
  hotel_id: string,
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IReservations[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const query = {
    profileId: hotel_id,
    ...checkAndCondition,
  };

  const reservations = await Reservations.find(query)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Reservations.countDocuments({ profileId: hotel_id });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: reservations,
  };
};

const getReservationDetails = async (
  id: string,
): Promise<IReservations | null> => {
  const reservations = await Reservations.findById({ _id: id });
  return reservations;
};

const updateReservations = async (
  payload: IUpdateReservation,
): Promise<IReservations | null> => {
  console.log("OK");
  const { reservationId: id, hotelId, updateData } = payload;
  if (!id || !hotelId || !updateData) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Failed To Update! Please Try Again",
    );
  }

  const {
    profileId,
    reservationClass,
    reservationType,
    images,
    status,
    reservationId,
    features,
    additionalFacilities,
    totalReservations,
    reservationsLeft,
  } = updateData;

  const isReservationExists = await Reservations.findOne({
    reservationId: id,
  });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Not found");
  }

  if (hotelId !== isReservationExists.profileId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Unauthorized User! Please Try Again",
    );
  }

  if (
    profileId !== undefined ||
    reservationClass !== undefined ||
    reservationType !== undefined ||
    images !== undefined ||
    status !== undefined ||
    reservationId !== undefined ||
    features !== undefined ||
    additionalFacilities !== undefined ||
    reservationsLeft !== undefined
  ) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Failed To Update! Please Try Again Later",
    );
  }

  const isHotelExists = await BusinessProfile.findOne({ hotelId });

  if (isHotelExists) {
    if (totalReservations) {
      const previousReservationsCount = isReservationExists.totalReservations;
      if (previousReservationsCount > totalReservations) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          "Total Reservation Cannot be Less Then Previous Total Reservations!",
        );
      }

      const previousTotalReservation = isHotelExists.totalReservations;
      const reservationsCreated = await reservationCreated(hotelId);
      if (
        previousTotalReservation <= reservationsCreated ||
        previousTotalReservation < totalReservations
      ) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          "No More Reservation Space Left!",
        );
      }

      const addedTotalReservations =
        totalReservations - previousReservationsCount;
      updateData.reservationsLeft =
        isReservationExists.reservationsLeft + addedTotalReservations;
    }
  }

  const result = await Reservations.findOneAndUpdate(
    { reservationId: id },
    updateData,
    {
      new: true,
    },
  );

  return result;
};

const uploadNewArrayData = async (payload: IUploadArrayData) => {
  const { data, key, reservationId } = payload;

  const isReservationExists = await Reservations.findOne({ reservationId });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Not Found");
  }

  isReservationExists[key].push(data);

  const result = await Reservations.findOneAndUpdate(
    { reservationId },
    isReservationExists,
    {
      new: true,
    },
  );
  return result;
};

const updateArrayData = async (updateData: IUpdateArrayData) => {
  const { data, dataNo, reservationId, key } = updateData;

  const isReservationExists = await Reservations.findOne({ reservationId });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Not Found");
  }

  console.log(isReservationExists[key].length, dataNo);
  if (dataNo < 0 || dataNo + 1 > isReservationExists[key].length) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Slot Does Not Exists!");
  }

  isReservationExists[key][dataNo] = data;

  const result = await Reservations.findOneAndUpdate(
    { reservationId },
    isReservationExists,
    {
      new: true,
    },
  );

  return result;
};

export const ReservationsService = {
  uploadReservation,
  getAllReservations,
  getReservationsByHotelId,
  getReservationDetails,
  updateReservations,
  uploadNewArrayData,
  updateArrayData,
};
