import React, { ReactElement, useState } from "react";
import { Typography } from "@mui/material";
import { IBooking } from "@/types/bookingTypes";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { profileSideNavItems } from "@/components/userComponents/profileUtils";
import { colorConfig } from "@/configs/colorConfig";
import { useGetUserBookingsQuery } from "@/redux/features/bookingApis";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import BookingTable from "@/components/userComponents/myBookings/BookingTable";
import BookingDetailsModal from "@/components/userComponents/myBookings/BookingDetailsModal";

const MyBookings = () => {
  const [open, setOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<IBooking | null>(null);

  const { user } = useUserContext();
  const typedUser = user as IUser;

  const { data, isLoading, refetch } = useGetUserBookingsQuery({
    email: typedUser.email,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data === null || data === undefined) {
    return <NotFoundMessage title="No bookings found!" />;
  }

  const bookings = data?.data?.data as IBooking[];

  const getStatusColor = (status: IBooking["status"]) => {
    switch (status) {
      case "pending":
        return "warning";
      case "onboard":
        return "info";
      case "completed":
        return "success";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const handleOpen = (booking: IBooking) => {
    setSelectedBooking(booking);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className="py-4">
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          color: "#222",
          mb: 3,
        }}
      >
        <span className="font-poppins">My Bookings</span>
      </Typography>

      {/* Booking Table */}
      <BookingTable
        bookings={bookings}
        getStatusColor={getStatusColor}
        handleOpen={handleOpen}
      />

      {/* Modal for additional details */}
      <BookingDetailsModal
        open={open}
        handleClose={handleClose}
        selectedBooking={selectedBooking}
        getStatusColor={getStatusColor}
        refetch={refetch}
      />
    </div>
  );
};

export default MyBookings;

MyBookings.getLayout = function getLayout(page: ReactElement) {
  return (
    <ProfileDashboardLayout
      sideNavItem={profileSideNavItems}
      title="Account Menu"
    >
      {page}
    </ProfileDashboardLayout>
  );
};
