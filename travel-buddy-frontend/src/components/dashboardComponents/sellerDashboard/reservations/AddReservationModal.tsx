import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import SettingsTitle from "@/components/userComponents/settings/SettingsTitle";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { Box, Button, CircularProgress, Modal } from "@mui/material";
import React, { useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import AmenitiesInputField from "../profile/AmenitiesInputField";
import { IBusinessProfile } from "@/types/hotelTypes";
import { useHotelDetailsContext } from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import UploadImages from "@/components/common/UploadImages";
import BasicSelectBox from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicSelectBox";
import { postApiHandler } from "@/components/common/apiHandlers/postApiHandler";
import { useUploadReservationMutation } from "@/redux/features/hotelApis/reservationApis";
import { ErrorToast } from "@/components/common/toasts/ErrorToast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 900,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const AddReservationModal = ({ refetch }: { refetch: any }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { hotelDetails } = useHotelDetailsContext();

  const details = hotelDetails?.data as IBusinessProfile;

  const [isLoading, setIsLoading] = useState(false);

  const uploadedImages = JSON.parse(
    String(window.sessionStorage.getItem("uploadedImages"))
  );

  const [features, setFeatures] = useState<string[]>([""]);
  const [additionalFeatures, setAdditionalFeatures] = useState<string[]>([""]);
  const [images, setImages] = useState<Array<string>>(
    uploadedImages && uploadedImages?.length ? uploadedImages : []
  );

  const [uploadReservation] = useUploadReservationMutation();

  const handleUploadReservation = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (images.length < 5) {
      ErrorToast("Please upload at least 5 images for the reservation.");
      return;
    }

    const form = e.target as HTMLFormElement;
    const reservationType = form.reservationType.value;
    const reservationClass = form.reservationClass.value;
    const name = form.reservationName.value;
    const price = form.price.value;
    const discount = form.discount.value;
    const totalReservations = form.totalReservations.value;
    const description = form.description.value;

    // Option
    const option = {
      data: {
        profileId: details?.hotelId,
        hotelId: String(details?._id),
        reservationType: reservationType,
        reservationClass: reservationClass,
        name: name,
        price: Number(price),
        discount: Number(discount),
        totalReservations: Number(totalReservations),
        description: description,
        images: images,
        features: features,
        additionalFacilities: additionalFeatures,
      },
    };

    function optionalTasks() {
      refetch();
      form.reset();
      handleClose();
      window.sessionStorage.removeItem("Uploaded Image");
    }

    await postApiHandler({
      mutateFn: uploadReservation,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTasks,
    });
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 text-black border border-black rounded-xl p-3"
      >
        <p className="text-base font-poppins font-medium">Add Reservation</p>
        <MdOutlineAddToPhotos className="text-xs lg:text-3xl" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUploadReservation}>
            <SettingsTitle title="Add New Reservation" />
            <UploadImages images={images} setImages={setImages} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <BasicInputField
                  name="reservationName"
                  label="Reservation Name"
                  type="text"
                  placeholder="Enter Reservation name"
                  message={`Current: (Not Update Yet!)`}
                  required={true}
                />
              </div>
              <BasicSelectBox
                name="reservationType"
                label="Select Reservation Type"
                options={[
                  {
                    value: "",
                    option: "Select Reservation Type",
                  },
                  {
                    value: "Single",
                    option: "For Single",
                  },
                  {
                    value: "Family",
                    option: "For Family",
                  },
                  {
                    value: "Couple",
                    option: "For Couple",
                  },
                ]}
                required={true}
                message={`Current: (Not Update Yet!)`}
              />
              <BasicSelectBox
                name="reservationClass"
                label="Select Class"
                options={[
                  {
                    value: "",
                    option: "Select Reservation Class",
                  },
                  {
                    value: "First",
                    option: "First Class",
                  },
                  {
                    value: "Second",
                    option: "Second Class",
                  },
                  {
                    value: "Third",
                    option: "Business Class",
                  },
                ]}
                required={true}
                message={`Current: (Not Update Yet!)`}
              />
              <BasicInputField
                name="price"
                label="Set Price"
                type="number"
                placeholder="Set Price for This Reservation"
                message={`Current: (Not Update Yet!)`}
                required={true}
              />
              <BasicInputField
                name="discount"
                label="Set Discounted Price"
                type="number"
                placeholder="Set Discounted Price for This Reservation"
                message={`Current: (Not Update Yet!)`}
                required={true}
              />
              <BasicInputField
                name="totalReservations"
                label="Total Reservations"
                type="number"
                placeholder="Add Total Reservations Count"
                message={`Current: (Not Update Yet!)`}
                required={true}
              />
              <div></div>
              <AmenitiesInputField
                amenities={features}
                setAmenities={setFeatures}
                label="Add Reservation Features"
              />
              <AmenitiesInputField
                amenities={additionalFeatures}
                setAmenities={setAdditionalFeatures}
                label="Add Additional Reservation Facilities"
              />
              <div className="col-span-2 flex flex-col gap-3">
                <label className="font-inter font-medium text-sm text-black">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Add Description"
                  className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter font-normal text-sm appearance-none text-gray w-full"
                  required={true}
                  rows={8}
                />
                <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
                  Current: (Not Update Yet!)
                </span>
              </div>
            </div>
            <Button
              type="submit"
              sx={{
                borderRadius: 2,
                background: `linear-gradient(45deg, ${colorConfig.secondary}, ${colorConfig.primary}) !important`,
                color: colorConfig.white,
                textTransform: "none",
                mt: 3,
                px: 2,
                py: 1,
              }}
            >
              <span className="font-inter mr-2 whitespace-nowrap overflow-hidden">
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <CircularProgress
                      size={20}
                      sx={{ color: colorConfig.white }}
                    />{" "}
                    Creating...
                  </span>
                ) : (
                  <span>Upload Reservation</span>
                )}
              </span>
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddReservationModal;
