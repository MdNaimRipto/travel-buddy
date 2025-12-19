import BookingsMain from "@/components/dashboardComponents/adminDashboard/bookings/BookingsMain";
import { adminSideNavItems } from "@/components/dashboardComponents/sellerDashboard/adminUtils";
import AdminLayoutWrapper from "@/layouts/layoutWrapper/AdminLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { ReactElement } from "react";

const Bookings = () => {
  return <BookingsMain />;
};

export default Bookings;

Bookings.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayoutWrapper>
      <ProfileDashboardLayout
        sideNavItem={adminSideNavItems}
        title="Admin Dashboard"
      >
        {page}
      </ProfileDashboardLayout>
    </AdminLayoutWrapper>
  );
};
