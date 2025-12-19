import UsersMain from "@/components/dashboardComponents/adminDashboard/users/UsersMain";
import { adminSideNavItems } from "@/components/dashboardComponents/sellerDashboard/adminUtils";
import AdminLayoutWrapper from "@/layouts/layoutWrapper/AdminLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { ReactElement } from "react";

const Users = () => {
  return <UsersMain />;
};

export default Users;

Users.getLayout = function getLayout(page: ReactElement) {
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
