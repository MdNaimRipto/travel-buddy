import Loader from "@/components/common/loader/Loader";
import { useGetAllBookingsQuery } from "@/redux/features/adminApis";
import { IBooking } from "@/types/bookingTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

type BookingRow = {
  id: number;
  guestName: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  amount: string;
  status: string;
};

const BookingsMain = () => {
  const { data, isLoading } = useGetAllBookingsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const bookings = data?.data?.data as IBooking[];

  return (
    <div className="w-full overflow-x-auto">
      <h4 className="font-inter mt-5 mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Bookings:
      </h4>

      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "grey.50" }}>
            <TableCell sx={{ py: 1.5, fontWeight: 500 }}>Booking</TableCell>
            <TableCell sx={{ py: 1.5 }}>User</TableCell>
            <TableCell sx={{ py: 1.5 }}>Hotel</TableCell>
            <TableCell sx={{ py: 1.5 }}>Reservation For</TableCell>
            <TableCell sx={{ py: 1.5 }}>Check In</TableCell>
            <TableCell sx={{ py: 1.5 }}>Check Out</TableCell>
            <TableCell sx={{ py: 1.5 }}>Nights</TableCell>
            <TableCell sx={{ py: 1.5 }}>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {bookings.map((row, i) => (
            <TableRow
              key={row._id}
              sx={{ backgroundColor: i % 2 !== 0 ? "grey.50" : "transparent" }}
            >
              <TableCell sx={{ py: 1.5 }}>{`${row._id.slice(0, 5)}`}</TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.userName}</TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Link
                  className="text-secondary"
                  target="_blank"
                  href={`/hotels/${row.hotelId}`}
                >
                  View Hotel
                </Link>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Link
                  className="text-secondary"
                  target="_blank"
                  href={`/hotels/${row.reservationId}`}
                >
                  View Reservation
                </Link>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                {new Date(row.startingDate).toDateString()}
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                {new Date(row.expireDate).toDateString()}
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.reservedDays}</TableCell>
              <TableCell sx={{ py: 1.5 }}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingsMain;
