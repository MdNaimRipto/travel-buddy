export const apiConfig = {
  BASE_URL: "https://travel-buddy-backend.vercel.app/api/v1.0",
  ADMIN: {
    GET_DASHBOARD_INFO: "/admin/getDashboardInfo",
    GET_ALL_USERS: "/admin/getAllUsers",
    GET_ALL_RESERVATIONS: "/admin/getAllReservations",
    GET_ALL_BOOKINGS: "/admin/getAllBookings",
    GET_ALL_REVIEWS: "/admin/getAllReviews",
    GET_ALL_REPORTS: "/admin/getAllReports",
  },
  USER: {
    REGISTER: "/users/register",
    LOGIN: "/users/login",
    CHECK_PROVIDER_LOGIN: "/users/checkUserForProviderLogin",
    PROVIDER_LOGIN: "/users/providerLogin",
    UPDATE_USER: "/users/updateUser",
    UPDATE_PASSWORD: "/users/updatePassword",
    FIND_USER_FOR_FORGOT_PASSWORD: "/users/findUserForForgotPassword",
    VERIFY_OTP_FOR_FORGOT_PASSWORD: "/users/verifyOtpForForgotPassword",
    FORGOT_PASSWORD: "/users/forgotPassword",
  },
  HOTEL: {
    BUSINESS_PROFILE: {
      CREATE: "/hotel/businessProfile/createBusinessProfile",
      GET: "/hotel/businessProfile/getBusinessProfile",
      GET_STATISTICS: "/hotel/businessProfile/getHotelStatistics",
      GET_ALL: "/hotel/businessProfile/getAllHotels",
      GET_DETAILS: "/hotel/businessProfile/getHotelDetails",
      UPDATE: "/hotel/businessProfile/updateBusinessProfile",
    },
    RESERVATIONS: {
      UPLOAD: "/hotel/reservations/uploadReservation",
      GET_ALL: "/hotel/reservations/getAllReservations",
      GET_BY_HOTEL_ID: "/hotel/reservations/getReservationsByHotelId",
      GET_DETAILS: "/hotel/reservations/getReservationDetails",
      UPDATE: "/hotel/reservations/updateReservation",
    },
  },
  BOOKING: {
    BOOK_RESERVATION: "/booking/bookReservation",
    GET_USERS_RESERVATIONS: "/booking/getUsersReservations",
    CANCEL: "/booking/cancelBooking",
  },
  WISHLIST: {
    ADD: "/wishlist/addToWishlist",
    GET_USER_WISHLIST: "/wishlist/getUsersWishlist",
    CHECK_STATUS: "/wishlist/getWishlistStatus",
    DELETE: "/wishlist/deleteWishlist",
  },
  REVIEW: {
    ADD: "/reviews/addReview",
    GET: "/reviews/getReviews",
    GET_MINI_COUNT: "/reviews/getMiniReviewsCount",
  },
  REPORT: {
    REPORT_RESERVATION: "/report/reportReservation",
    CHECK_ALREADY_REPORTED: "/report/isAlreadyReported",
  },
  NOTIFICATION: {
    SEND: "/notification/sendNotification",
    GET: "/notification/getNotifications",
    DELETE: "/notification/deleteNotification",
  },
};
