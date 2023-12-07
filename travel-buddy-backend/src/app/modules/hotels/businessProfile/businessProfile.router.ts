import express from "express";
import zodValidationRequest from "../../../../middlewares/zodValidationRequest";
import { BusinessProfileValidation } from "./businessProfile.validation";
import { BusinessProfileController } from "./businessProfile.controller";

const router = express.Router();

router.post(
  "/createBusinessProfile",
  zodValidationRequest(BusinessProfileValidation.businessProfileZodSchema),
  BusinessProfileController.createBusinessProfile,
);

router.get(
  "/getBusinessProfile/:id",
  BusinessProfileController.getBusinessProfile,
);

router.patch(
  "/updateProfileImages",
  BusinessProfileController.updateProfileImages,
);

router.patch("/uploadNewImage", BusinessProfileController.uploadNewImage);

export const businessProfileRouter = router;
