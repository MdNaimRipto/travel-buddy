import { IFilterApiSuccessResponse } from "@/types/apiResponseTypes";
import { IBusinessProfile } from "@/types/hotelTypes";
import { IReservations } from "@/types/reservationTypes";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn as LocationIcon } from "react-icons/ci";

const SearchResult = ({
  hotelLoading,
  hotelRes,
  reservationLoading,
  reservationRes,
}: {
  reservationLoading: boolean;
  hotelLoading: boolean;
  reservationRes: IFilterApiSuccessResponse;
  hotelRes: IFilterApiSuccessResponse;
}) => {
  if (hotelLoading || reservationLoading) {
    return (
      <div className="grid grid-cols-2 justify-items-center gap-6 container mt-12 overflow-y-auto">
        <div>
          <Skeleton width={280} height={40} />
          <div className="grid grid-cols-1">
            {[1, 2, 3].map((loaders, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton width={110} height={160} />
                <div>
                  <Skeleton width={280} height={30} />
                  <Skeleton width={80} height={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Skeleton width={280} height={40} />
          <div className="grid grid-cols-1">
            {[1, 2, 3].map((loaders, i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton width={110} height={160} />
                <div>
                  <Skeleton width={280} height={30} />
                  <Skeleton width={80} height={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const hotels = hotelRes?.data?.data as IBusinessProfile[];
  const reservations = reservationRes?.data?.data as IReservations[];

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 justify-items-center gap-6 container mt-12 px-4 overflow-y-auto md:overflow-y-hidden h-[100vh] md:h-auto">
      <div>
        <h2 className="text-xl border-b border-b-darkGray titleFont font-medium w-[170px]">
          Searched Hotels
        </h2>
        <div className="grid grid-cols-1 gap-14 mt-10">
          {hotels.length ? (
            <>
              {hotels.map((hotel, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[110px] h-[100px] overflow-hidden">
                    <Image
                      src={hotel.hotelImage}
                      alt="Searched Hotel Image"
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                  <div>
                    <Link href={`/hotels/${hotel._id}`}>
                      <h6 className="text-xl titleFont font-medium mb-3">
                        {hotel.hotelName.length >= 28
                          ? hotel.hotelName.slice(0, 28) + "..."
                          : hotel.hotelName}
                      </h6>
                    </Link>
                    <p className="flex items-center gap-1 text-sm mb-2">
                      <LocationIcon className="text-xs lg:text-lg" />
                      <span className="font-inter text-black font-medium">
                        {hotel.hotelLocation.street},{" "}
                        {hotel.hotelLocation.destination}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <span className="text-lg font-poppins block w-[400px]">{`No Result's Found!`}</span>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-xl border-b border-b-darkGray titleFont font-medium w-[240px]">
          Searched Reservations
        </h2>
        <div className="grid grid-cols-1 gap-14 mt-10">
          {reservations.length ? (
            <>
              {reservations.map((reservation, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[110px] h-[100px] overflow-hidden">
                    <Image
                      src={reservation.image}
                      alt="Searched Reservation Image"
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                      priority
                    />
                  </div>
                  <div>
                    <Link href={`/reservations/${reservation._id}`}>
                      <h6 className="text-xl titleFont font-medium mb-3">
                        {reservation.name.length >= 28
                          ? reservation.name.slice(0, 28) + "..."
                          : reservation.name}
                      </h6>
                    </Link>
                    <p className="flex items-center gap-1 text-sm mb-2">
                      <LocationIcon className="text-xs lg:text-lg" />
                      <span className="font-inter text-black font-medium">
                        {reservation.location.street},{" "}
                        {reservation.location.destination}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <span className="text-lg font-poppins block w-[400px]">{`No Result's Found!`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
