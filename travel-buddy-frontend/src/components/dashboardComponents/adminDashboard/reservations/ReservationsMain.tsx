import Loader from "@/components/common/loader/Loader";
import { useGetAllReservationsQuery } from "@/redux/features/adminApis";
import { IReservations } from "@/types/reservationTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

const ReservationsMain = () => {
  const { data, isLoading } = useGetAllReservationsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const reservations = data?.data?.data as IReservations[];

  return (
    <div className="w-full overflow-x-auto">
      <h4 className="font-inter mt-5 mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Reservations:
      </h4>

      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.50" }}>
            <TableCell sx={{ py: 1.5, fontWeight: 500 }}>Reservation</TableCell>
            <TableCell sx={{ py: 1.5 }}>Name</TableCell>
            <TableCell sx={{ py: 1.5 }}>Hotel</TableCell>
            <TableCell sx={{ py: 1.5 }}>Type</TableCell>
            <TableCell sx={{ py: 1.5 }}>Class</TableCell>
            <TableCell sx={{ py: 1.5 }}>Price</TableCell>
            <TableCell sx={{ py: 1.5 }}>Total</TableCell>
            <TableCell sx={{ py: 1.5 }}>Left</TableCell>
            <TableCell sx={{ py: 1.5 }}>Status</TableCell>
            <TableCell sx={{ py: 1.5 }}>Created</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {reservations && reservations.length > 0 ? (
            reservations.map((row, i) => {
              const key = (row as any)._id ?? row.reservationId ?? i;

              return (
                <TableRow
                  key={key}
                  sx={{
                    backgroundColor: i % 2 !== 0 ? "grey.50" : "transparent",
                  }}
                >
                  <TableCell sx={{ py: 1.5 }}>{`#${i + 1}`}</TableCell>
                  <TableCell sx={{ py: 1.5 }}>{row.name}</TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    <Link
                      className="text-secondary"
                      target="_blank"
                      href={`/hotels/${row.hotelId}`}
                    >
                      View Hotel
                    </Link>
                  </TableCell>
                  <TableCell sx={{ py: 1.5 }}>{row.reservationType}</TableCell>
                  <TableCell sx={{ py: 1.5 }}>{row.reservationClass}</TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    {row.price ? `$${row.price}` : "-"}
                  </TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    {row.totalReservations ?? "-"}
                  </TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    {row.reservationsLeft ?? "-"}
                  </TableCell>
                  <TableCell sx={{ py: 1.5 }}>{row.status}</TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    {new Date(String(row.createdAt)).toDateString()}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell sx={{ py: 3 }} colSpan={10} align="center">
                No reservations found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReservationsMain;
