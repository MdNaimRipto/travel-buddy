"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBooking = void 0;
exports.sendBookingConfirmation = sendBookingConfirmation;
const node_cron_1 = __importDefault(require("node-cron"));
const booking_schema_1 = require("./booking.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const reservations_schema_1 = require("../hotels/reservations/reservations.schema");
const nodemailer_1 = __importDefault(require("nodemailer"));
const pdfkit_1 = __importDefault(require("pdfkit"));
const config_1 = __importDefault(require("../../../config/config"));
const updateBooking = () => __awaiter(void 0, void 0, void 0, function* () {
    node_cron_1.default.schedule("56 14 * * *", () => __awaiter(void 0, void 0, void 0, function* () {
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
        const session = yield mongoose_1.default.startSession();
        session.startTransaction();
        try {
            //   Update Pending Bookings to onboard
            const updatePendingBookingsStatus = yield booking_schema_1.Booking.updateMany({ startingDate: currentDate }, { status: "onboard" }, { session });
            if (updatePendingBookingsStatus.acknowledged) {
                console.log("Updated Todays Pending Bookings");
            }
            //   Update OnGoing Sessions to Completed
            const updateExpiredBookingsStatus = yield booking_schema_1.Booking.updateMany({ expireDate: currentDate }, { status: "completed" }, { session });
            if (updateExpiredBookingsStatus.acknowledged) {
                console.log("Updated Todays Expired Bookings");
            }
            const getCompletedReservations = yield booking_schema_1.Booking.find({
                expireDate: currentDate,
            });
            yield Promise.all(getCompletedReservations.map((r) => __awaiter(void 0, void 0, void 0, function* () {
                yield reservations_schema_1.Reservations.findOneAndUpdate({ _id: r.reservationId }, {
                    $inc: { reservationsLeft: 1 },
                    $set: { status: "Available" },
                }, { session });
            })));
            yield session.commitTransaction();
            console.log("Booking Status Updated Successfully");
        }
        catch (error) {
            yield session.abortTransaction();
            console.error(error);
        }
        finally {
            session.endSession();
        }
    }));
});
exports.updateBooking = updateBooking;
function generatePDFBuffer(booking) {
    return new Promise((resolve, reject) => {
        const doc = new pdfkit_1.default();
        const chunks = [];
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
        doc.text(`Reservation ID: ${booking.reservationId}`);
        doc.text(`Hotel ID: ${booking.hotelId}`);
        doc.text(`Reserved Days: ${booking.reservedDays}`);
        doc.text(`Start Date: ${booking.startingDate.toDateString()}`);
        doc.text(`End Date: ${booking.expireDate.toDateString()}`);
        doc.text(`Price: $${booking.reservationPrice}`);
        doc.text(`Status: ${booking.status}`);
        doc.text(`Booked as Guest: ${booking.isAsGuest ? "Yes" : "No"}`);
        doc.end();
    });
}
function sendBookingConfirmation(booking) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create PDF
        const pdfBuffer = yield generatePDFBuffer(booking);
        // Nodemailer transporter
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: config_1.default.nodemailer_user,
                pass: config_1.default.nodemailer_pass,
            },
        });
        // HTML email content
        const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6">
      <h2>Booking Confirmation</h2>
      <p>Dear ${booking.userName},</p>
      <p>Thank you for your booking. Here are your reservation details:</p>
      <ul>
        <li><strong>Reservation ID:</strong> ${booking.reservationId}</li>
        <li><strong>Hotel ID:</strong> ${booking.hotelId}</li>
        <li><strong>Start Date:</strong> ${new Date(booking.startingDate).toDateString()}</li>
        <li><strong>End Date:</strong> ${new Date(booking.expireDate).toDateString()}</li>
        <li><strong>Reserved Days:</strong> ${booking.reservedDays}</li>
        <li><strong>Total Price:</strong> $${booking.reservationPrice}</li>
        <li><strong>Status:</strong> ${booking.status}</li>
        <li><strong>Guest Booking:</strong> ${booking.isAsGuest ? "Yes" : "No"}</li>
      </ul>
      <p>Please download the attached PDF for your records:</p>
      <a href="cid:booking-confirmation.pdf" download style="background-color:#4CAF50;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Download PDF</a>
      <p>Best regards,<br>Your Company Team</p>
    </div>
  `;
        // Send email
        const info = yield transporter.sendMail({
            from: `"Hotel Booking" <${config_1.default.nodemailer_user}>`,
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
    });
}
