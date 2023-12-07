import { Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import sendResponse from "../../../../shared/sendResponse";
import httpStatus from "http-status";
import { verifyAuthToken } from "../../../../util/verifyAuthToken";
import { BusinessProfileService } from "./businessProfile.service";

// Create Business Profile
const createBusinessProfile = catchAsync(
  async (req: Request, res: Response) => {
    const { ...profileData } = req.body;

    const result = await BusinessProfileService.createProfile(profileData);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Profile Created Successfully",
      data: result,
    });
  },
);

// Update Profile images
const updateProfileImages = catchAsync(async (req: Request, res: Response) => {
  const { ...profileData } = req.body;

  const result = await BusinessProfileService.updateProfileImages(profileData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Image Updated Successfully",
    data: result,
  });
});

// Upload New Image
const uploadNewImage = catchAsync(async (req: Request, res: Response) => {
  const { ...profileData } = req.body;

  const result = await BusinessProfileService.uploadNewImage(profileData);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "New Image Uploaded",
    data: result,
  });
});

export const BusinessProfileController = {
  createBusinessProfile,
  updateProfileImages,
  uploadNewImage,
};
