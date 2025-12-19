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

const LatestUsersTable = () => {
  const data: UserRow[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Customer",
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Owner" },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Customer",
    },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.50" }}>
            <TableCell sx={{ py: 1.5, fontWeight: 500 }}>Name</TableCell>
            <TableCell sx={{ py: 1.5 }}>Email</TableCell>
            <TableCell sx={{ py: 1.5 }}>Role</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor: i % 2 !== 0 ? "grey.50" : "transparent",
              }}
            >
              <TableCell sx={{ py: 1.5 }}>{row.name}</TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.email}</TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestUsersTable;
