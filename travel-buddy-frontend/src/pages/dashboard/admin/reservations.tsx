import ReservationsMain from "@/components/dashboardComponents/adminDashboard/reservations/ReservationsMain";
import { adminSideNavItems } from "@/components/dashboardComponents/sellerDashboard/adminUtils";
import AdminLayoutWrapper from "@/layouts/layoutWrapper/AdminLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { ReactElement } from "react";

const Reservations = () => {
  return <ReservationsMain />;
};

export default Reservations;

Reservations.getLayout = function getLayout(page: ReactElement) {
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
