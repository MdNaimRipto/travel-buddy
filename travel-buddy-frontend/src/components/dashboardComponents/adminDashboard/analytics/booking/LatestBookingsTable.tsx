import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

type BookingRow = {
  checkoutDate: string;
  totalBooking: number;
  totalSuccess: number;
  totalCancelled: number;
};

const LatestBookingsTable = ({ data }: { data: BookingRow[] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table size="small">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "grey.50",
            }}
          >
            <TableCell sx={{ py: 1.5, fontWeight: 500 }}>Date</TableCell>
            <TableCell sx={{ py: 1.5 }} align="right">
              Total
            </TableCell>
            <TableCell sx={{ py: 1.5 }} align="right">
              Success
            </TableCell>
            <TableCell sx={{ py: 1.5 }} align="right">
              Canceled
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                backgroundColor: i % 2 !== 0 ? "grey.50" : "transparent",
              }}
            >
              <TableCell sx={{ py: 1.5 }}>
                {new Date(row.checkoutDate).toLocaleDateString()}
              </TableCell>
              <TableCell sx={{ py: 1.5 }} align="right">
                {row.totalBooking}
              </TableCell>
              <TableCell sx={{ py: 1.5 }} align="right">
                {row.totalSuccess}
              </TableCell>
              <TableCell sx={{ py: 1.5 }} align="right">
                {row.totalCancelled}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestBookingsTable;
