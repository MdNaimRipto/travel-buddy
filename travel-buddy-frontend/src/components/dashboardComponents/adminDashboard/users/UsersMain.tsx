import Loader from "@/components/common/loader/Loader";
import { useGetAllUsersQuery } from "@/redux/features/adminApis";
import { IUser } from "@/types/userTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

type UserRow = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const UsersMain = () => {
  const { data, isLoading } = useGetAllUsersQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const users = data?.data?.data as IUser[];

  return (
    <div className="w-full overflow-x-auto">
      <h4 className="font-inter mt-5 mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Verified Users:
      </h4>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.50" }}>
            <TableCell sx={{ py: 1.5, fontWeight: 500 }}>Name</TableCell>
            <TableCell sx={{ py: 1.5 }}>Email</TableCell>
            <TableCell sx={{ py: 1.5 }}>Role</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((row, i) => (
            <TableRow
              key={row._id}
              sx={{
                backgroundColor: i % 2 !== 0 ? "grey.50" : "transparent",
              }}
            >
              <TableCell sx={{ py: 1.5 }}>{row.userName}</TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.email}</TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersMain;
