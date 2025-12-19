import AnalyticsMain from "@/components/dashboardComponents/adminDashboard/analytics/Analytics";
import { adminSideNavItems } from "@/components/dashboardComponents/sellerDashboard/adminUtils";
import AdminLayoutWrapper from "@/layouts/layoutWrapper/AdminLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { ReactElement } from "react";

const Analytics = () => {
  return <AnalyticsMain />;
};

export default Analytics;

Analytics.getLayout = function getLayout(page: ReactElement) {
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
