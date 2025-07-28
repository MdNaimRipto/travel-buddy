import React, { useState } from "react";
import {
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { IBooking } from "@/types/bookingTypes";
import { colorConfig } from "@/configs/colorConfig";
import { useCancelBookingMutation } from "@/redux/features/bookingApis";
import { postApiHandler } from "@/components/common/apiHandlers/postApiHandler";

const BookingDetailsModal = ({
  open,
  handleClose,
  selectedBooking,
  getStatusColor,
  refetch,
}: {
  open: boolean;
  handleClose: () => void;
  selectedBooking: IBooking | null;
  getStatusColor: (
    status: IBooking["status"]
  ) => "default" | "error" | "info" | "success" | "warning";
  refetch: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cancelBooking] = useCancelBookingMutation();

  const handleCancelBooking = async () => {
    const option = {
      bookingId: String(selectedBooking?._id),
    };

    const optionalTask = () => {
      handleClose();
      refetch();
    };

    await postApiHandler({
      mutateFn: cancelBooking,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTask,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          width: {
            xs: "96%",
            sm: "80%",
          },
          p: {
            xs: 2,
            sm: 4,
          },
          background: "#f9f9fb",
          m: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: 22,
          color: "#222",
          p: 0,
          fontFamily: "Inter, Roboto, Arial, sans-serif",
        }}
      >
        Booking Details
      </DialogTitle>
      <DialogContent dividers sx={{ border: "none", px: 0 }}>
        {selectedBooking && (
          <div style={{ lineHeight: 1.9, color: "#444" }}>
            <div className="text-sm md:text-base mb-3">
              <strong>User Name:</strong>{" "}
              <span>{selectedBooking.userName}</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Email:</strong> <span>{selectedBooking.email}</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Phone:</strong> <span>{selectedBooking.userPhone}</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Hotel:</strong>{" "}
              <span>{selectedBooking.hotelId.hotelName}</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Booked For:</strong>{" "}
              <span>{selectedBooking.reservationId.name}</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Reserved Days:</strong>{" "}
              <span>{selectedBooking.reservedDays}</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Total Price:</strong>{" "}
              <span>{selectedBooking.reservationPrice} BDT</span>
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Status:</strong>{" "}
              <Chip
                label={
                  selectedBooking.status.charAt(0).toUpperCase() +
                  selectedBooking.status.slice(1)
                }
                color={getStatusColor(selectedBooking.status)}
                size="small"
                sx={{ fontWeight: 500, ml: 1 }}
              />
            </div>
            <div className="text-sm md:text-base mb-3">
              <strong>Guest:</strong>{" "}
              <span>{selectedBooking.isAsGuest ? "Yes" : "No"}</span>
            </div>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          disabled={
            isLoading || selectedBooking?.status === "cancelled" ? true : false
          }
          onClick={handleCancelBooking}
          variant="outlined"
          sx={{
            borderRadius: 2,
            textTransform: "none",
          }}
          color="error"
        >
          {isLoading ? "Canceling..." : "Cancel Booking"}
        </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            background: colorConfig.secondary,
            ":hover": {
              background: colorConfig.secondary,
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDetailsModal;
