import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import SettingsTitle from "@/components/userComponents/settings/SettingsTitle";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { UseCommonImports } from "@/utils/UseCommonImports";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineAddToPhotos } from "react-icons/md";
import AmenitiesInputField from "../profile/AmenitiesInputField";

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

const AddReservationModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user, setUser } = useUserContext();
  const { Cookies } = UseCommonImports();

  const typedUser = user as IUser;

  const [isLoading, setIsLoading] = useState(false);

  const [amenities, setAmenities] = useState<string[]>([""]);

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
          <form>
            <SettingsTitle title="Add New Reservation" />
            <div className="flex flex-col gap-3 mb-8">
              <label className="font-inter font-medium text-sm text-black">
                Upload Images
              </label>
              <div className="grid grid-cols-6 gap-4 border border-lightGray rounded-xl p-4 w-full h-[180px]">
                <IconButton
                  sx={{
                    border: `1px solid ${colorConfig.lightGray}`, // Equivalent to border-lightGray
                    width: "100%",
                    height: "100%",
                    fontSize: "1.125rem", // text-lg
                    borderRadius: "0.75rem", // rounded-xl
                    fontFamily: "Inter, sans-serif", // font-inter
                    fontWeight: 500, // font-medium
                  }}
                >
                  <IoAddOutline className="text-4xl" /> {/* text-3xl */}
                </IconButton>
              </div>
              <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
                Max 5 images can be uploaded!
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BasicInputField
                name="name"
                label="Reservation Name"
                type="text"
                placeholder="Enter Reservation name"
                message={`Current: (Not Update Yet!)`}
                required={true}
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
              <AmenitiesInputField
                amenities={amenities}
                setAmenities={setAmenities}
                label="Add Reservation Features"
              />
              <AmenitiesInputField
                amenities={amenities}
                setAmenities={setAmenities}
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
