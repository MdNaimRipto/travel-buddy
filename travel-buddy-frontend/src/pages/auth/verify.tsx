import React, { ReactNode } from "react";
import SelectUserRole from "@/components/auth/verify/SelectUserRole";
import CreatePassword from "@/components/auth/verify/CreatePassword";
import { useRouter } from "next/router";
import AuthLayout from "@/layouts/AuthLayout";

interface IQueryType {
  tab: "userRole" | "password";
  email: string;
  userRole: string;
  password: string;
}

const Verify = () => {
  const router = useRouter();
  const { query } = router;
  const filterQuery = query as unknown as IQueryType;
  const { tab, email } = filterQuery;

  return (
    <div>
      {tab === "userRole" && <SelectUserRole />}
      {tab === "password" && <CreatePassword />}
    </div>
  );
};

export default Verify;

Verify.getLayout = function getLayout(page: ReactNode) {
  return <AuthLayout>{page}</AuthLayout>;
};
