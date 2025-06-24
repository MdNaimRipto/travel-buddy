import cron from "node-cron";
import { Booking } from "./booking.schema";
import mongoose from "mongoose";
import { Reservations } from "../hotels/reservations/reservations.schema";
import nodemailer from "nodemailer";
import PDFDocument from "pdfkit";
import { IBooking } from "./booking.interface"; // Adjust path as needed
import config from "../../../config/config";
import { BusinessProfile } from "../hotels/businessProfile/businessProfile.schema";

export const updateBooking = async () => {
  cron.schedule("56 14 * * *", async () => {
    const date = new Date();

    const day = date.toLocaleDateString("en-GB", {
      day: "2-digit",
    });
    const month = date.toLocaleDateString("en-GB", {
      month: "2-digit",
    });
    const year = date.toLocaleDateString("en-GB", {
      year: "numeric",
    });

    const currentDate = `${day}-${month}-${year}`;

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      //   Update Pending Bookings to onboard
      const updatePendingBookingsStatus = await Booking.updateMany(
        { startingDate: currentDate },
        { status: "onboard" },
        { session },
      );
      if (updatePendingBookingsStatus.acknowledged) {
        console.log("Updated Todays Pending Bookings");
      }

      //   Update OnGoing Sessions to Completed
      const updateExpiredBookingsStatus = await Booking.updateMany(
        { expireDate: currentDate },
        { status: "completed" },
        { session },
      );
      if (updateExpiredBookingsStatus.acknowledged) {
        console.log("Updated Todays Expired Bookings");
      }

      const getCompletedReservations = await Booking.find({
        expireDate: currentDate,
      });

      await Promise.all(
        getCompletedReservations.map(async r => {
          await Reservations.findOneAndUpdate(
            { _id: r.reservationId },
            {
              $inc: { reservationsLeft: 1 },
              $set: { status: "Available" },
            },
            { session },
          );
        }),
      );

      await session.commitTransaction();
      console.log("Booking Status Updated Successfully");
    } catch (error) {
      await session.abortTransaction();
      console.error(error);
    } finally {
      session.endSession();
    }
  });
};

function generatePDFBuffer(
  booking: IBooking,
  reservationName: string,
  hotelName: string,
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    doc.on("data", chunk => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc
      .fontSize(20)
      .text("Booking Confirmation", { align: "center" })
      .moveDown();
    doc.fontSize(12).text(`Name: ${booking.userName}`);
    doc.text(`Phone: ${booking.userPhone}`);
    doc.text(`Email: ${booking.email}`);
    doc.text(`Reservation For: ${reservationName}`);
    doc.text(`Hotel Name: ${hotelName}`);
    doc.text(`Reserved Days: ${booking.reservedDays}`);
    doc.text(
      `Start Date: ${new Date(booking.startingDate).toLocaleDateString()}`,
    );
    doc.text(`End Date: ${new Date(booking.expireDate).toLocaleDateString()}`);
    doc.text(`Price: $${booking.reservationPrice}`);
    doc.text(`Status: ${booking.status}`);
    doc.text(`Booked as Guest: ${booking.isAsGuest === true ? "Yes" : "No"}`);

    doc.end();
  });
}

export async function sendBookingConfirmation(booking: IBooking) {
  // Extract Names
  const reservation = await Reservations.findOne({
    _id: booking.reservationId,
  });
  const hotel = await BusinessProfile.findOne({
    _id: booking.hotelId,
  });

  // Create PDF
  const pdfBuffer = await generatePDFBuffer(
    booking,
    String(reservation?.name),
    String(hotel?.hotelName),
  );

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.nodemailer_user,
      pass: config.nodemailer_pass,
    },
  });

  // HTML email content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6">
      <h2>Travel Buddy Booking Confirmation</h2>
      <p>Dear ${booking.userName},</p>
      <p>Thank you for your booking. Here are your reservation details:</p>
      <ul>
        <li><strong>Reservation For:</strong> ${reservation?.name}</li>
        <li><strong>Hotel Name:</strong> ${hotel?.hotelName}</li>
        <li><strong>Start Date:</strong> ${new Date(
          booking.startingDate,
        ).toDateString()}</li>
        <li><strong>End Date:</strong> ${new Date(
          booking.expireDate,
        ).toDateString()}</li>
        <li><strong>Reserved Days:</strong> ${booking.reservedDays}</li>
        <li><strong>Total Price:</strong> $${booking.reservationPrice}</li>
        <li><strong>Status:</strong> ${booking.status}</li>
        <li><strong>Guest Booking:</strong> ${
          booking.isAsGuest ? "Yes" : "No"
        }</li>
      </ul>
      <p>Please download the attached PDF for your records:</p>
      <a href="cid:booking-confirmation.pdf" download style="background-color:#4CAF50;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Download PDF</a>
      <p>Best regards,<br>Your Company Team</p>
    </div>
  `;

  // Send email
  const info = await transporter.sendMail({
    from: `"Hotel Booking" <${config.nodemailer_user}>`,
    to: booking.email,
    subject: "Your Booking Confirmation",
    html: htmlContent,
    attachments: [
      {
        filename: "booking-confirmation.pdf",
        content: pdfBuffer,
        contentType: "application/pdf",
        cid: "booking-confirmation.pdf", // needed to link in HTML
      },
    ],
  });

  console.log("Email sent:", info.messageId);
}
