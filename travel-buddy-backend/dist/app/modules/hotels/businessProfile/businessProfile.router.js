"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessProfileRouter = void 0;
const express_1 = __importDefault(require("express"));
const zodValidationRequest_1 = __importDefault(require("../../../../middlewares/zodValidationRequest"));
const businessProfile_validation_1 = require("./businessProfile.validation");
const businessProfile_controller_1 = require("./businessProfile.controller");
const router = express_1.default.Router();
router.post("/createBusinessProfile", (0, zodValidationRequest_1.default)(businessProfile_validation_1.BusinessProfileValidation.businessProfileZodSchema), businessProfile_controller_1.BusinessProfileController.createBusinessProfile);
router.get("/getBusinessProfile/:id", businessProfile_controller_1.BusinessProfileController.getBusinessProfile);
router.patch("/updateBusinessProfile", businessProfile_controller_1.BusinessProfileController.updateBusinessProfile);
router.patch("/updateProfileImages", businessProfile_controller_1.BusinessProfileController.updateProfileImages);
router.patch("/uploadNewImage", businessProfile_controller_1.BusinessProfileController.uploadNewImage);
exports.businessProfileRouter = router;
