import React from "react";
import SelectUserRole from "@/components/auth/verify/SelectUserRole";
import CreatePassword from "@/components/auth/verify/CreatePassword";
import { useRouter } from "next/router";

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

  console.log({ tab, email });

  return (
    <div>
      {tab === "userRole" && <SelectUserRole />}
      {tab === "password" && <CreatePassword />}
    </div>
  );
};

export default Verify;
