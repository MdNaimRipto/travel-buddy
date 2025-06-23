import BasicInputField from "@/components/profileAndDashboard/profileAndDashboardInputFields/BasicInputField";
import { colorConfig } from "@/configs/colorConfig";
import { useUserContext } from "@/context/AuthContext";
import { IReservations } from "@/types/reservationTypes";
import { IUser } from "@/types/userTypes";
import { formatDateTime } from "@/utils/bookReservation/bookReservationUtils";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "96%",
    md: "66%",
  },
  bgcolor: "background.paper",
  border: "2px solid #00000000",
  boxShadow: 24,
  p: {
    xs: 2.5,
    sm: 4,
  },
  borderRadius: 4,
  height: {
    xs: "600px",
    lg: "auto",
  },
  overflowY: "auto",
};

const BookModal = ({
  open,
  setOpen,
  reservation,
  dates,
  discount,
  totalBill,
  totalNights,
  totalPrice,
  banner,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  reservation: IReservations;
  dates: {
    startDate: Date; // Change from string to Date
    endDate: Date; // Change from string to Date
    key: "selection";
    color: string;
  }[];
  totalNights: number;
  discount: number;
  totalPrice: number;
  totalBill: number;
  banner: string;
}) => {
  const { user } = useUserContext();
  const typedUser = user as IUser;

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Title */}
        <h2 className="text-base md:text-lg font-poppins font-medium">
          Confirm Your Reservation
        </h2>

        {/* Description */}
        <p className="text-sm mt-2 mb-4">
          {`You're booking`} <strong>{reservation?.name}</strong>. Please
          confirm your details to proceed.
        </p>

        {/* Booking Info Display */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="w-full h-full overflow-hidden">
            <Image
              src={banner}
              alt="Reservation-banner"
              width={400}
              height={400}
              quality={75}
              loading="lazy"
              // placeholder="blur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">Check-In:</span>
              <span>{formatDateTime(dates[0].startDate)}</span>
            </p>
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">Check-Out:</span>
              <span>{formatDateTime(dates[0].endDate)}</span>
            </p>
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">Check-In Time:</span>
              <span>09:00 AM</span>
            </p>
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">Total Nights:</span>
              <span>{totalNights}</span>
            </p>
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">Discount:</span>
              <span>{discount}%</span>
            </p>
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">{`${totalNights} x ${`2800BDT`}:`}</span>
              <span>{totalPrice}BDT</span>
            </p>
            <p className="flex items-center justify-between text-xs xl:text-sm font-inter font-medium">
              <span className="underline font-normal">Total Bill:</span>
              <span>{totalBill}BDT</span>
            </p>
          </div>
          <div>
            <BasicInputField
              label="Name"
              placeholder="Please enter your name"
              name="name"
              required={true}
              type="text"
              defaultValue={user ? typedUser.userName : ""}
            />
            <BasicInputField
              label="Email"
              placeholder="Please enter your email"
              name="email"
              required={true}
              type="email"
              defaultValue={user ? typedUser.email : ""}
            />
            <BasicInputField
              label="Contact Number"
              placeholder="Please enter your contact number"
              name="contactNumber"
              required={true}
              type="tel"
              defaultValue={user ? typedUser.contactNumber : ""}
            />
          </div>
        </div>

        <Divider sx={{ my: 2 }} />

        {/* User Info Component Placeholder */}
        {/* <UserInfoForm reservation={reservation} /> */}
        <Box sx={{ mb: 2 }}>
          {/* You can conditionally show the form or user info here */}
          {/* Example: <UserInfoSection /> */}
        </Box>

        {/* Pay at Check-in Note */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: "24px" }}
        >
          <em>
            No <span className="text-secondary font-medium">payment</span>{" "}
            required now. You will pay at check-in.
          </em>
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          <em>
            <span className="text-secondary font-medium">Login</span> is not
            mandatory for check-in.
          </em>
        </Typography>

        {/* Action Button */}
        <div className="flex flex-col md:flex-row gap-4 md:justify-end">
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              borderColor: colorConfig.secondary,
              color: colorConfig.secondary,
              ":hover": {
                borderColor: colorConfig.secondary,
                color: colorConfig.secondary,
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              background: colorConfig.secondary,
              ":hover": {
                background: colorConfig.secondary,
              },
            }}
          >
            Confirm Booking
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default BookModal;
