import { IReservations } from "@/types/reservationTypes";
import { formatDateTime } from "@/utils/bookReservation/bookReservationUtils";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "96%",
    md: "55%",
  },
  bgcolor: "background.paper",
  border: "2px solid #00000000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const BookModal = ({
  open,
  setOpen,
  reservation,
  dates,
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
}) => {
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
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          fontWeight={600}
        >
          Confirm Your Reservation
        </Typography>

        {/* Description */}
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {`You're booking`} <strong>{reservation?.name}</strong>. Please
          confirm your details to proceed.
        </Typography>

        {/* Booking Date Display */}
        <Typography sx={{ mt: 2 }}>
          <strong>Check-In:</strong> {formatDateTime(dates[0].startDate)}{" "}
          <strong>Check-Out:</strong> {formatDateTime(dates[0].endDate)}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* User Info Component Placeholder */}
        {/* <UserInfoForm reservation={reservation} /> */}
        <Box sx={{ mb: 2 }}>
          {/* You can conditionally show the form or user info here */}
          {/* Example: <UserInfoSection /> */}
        </Box>

        {/* Pay at Check-in Note */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          <em>No payment required now. You will pay at check-in.</em>
        </Typography>

        {/* Action Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Confirm Booking
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BookModal;
