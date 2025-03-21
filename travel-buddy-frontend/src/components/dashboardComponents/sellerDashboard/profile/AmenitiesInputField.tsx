import { colorConfig } from "@/configs/colorConfig";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { IoAddOutline } from "react-icons/io5";

const AmenitiesInputField = ({
  amenities,
  setAmenities,
  label,
}: {
  amenities: Array<string>;
  setAmenities: any;
  label: string;
}) => {
  const handleAmenityChange = (index: number, value: string) => {
    const updatedAmenities = [...amenities];
    updatedAmenities[index] = value;
    setAmenities(updatedAmenities);
  };

  const addAmenity = () => {
    setAmenities([...amenities, ""]); // Add a new empty input
  };

  const removeAmenity = (index: number) => {
    if (amenities.length > 1) {
      const updatedAmenities = amenities.filter((_, i) => i !== index);
      setAmenities(updatedAmenities);
    }
  };

  return (
    <div className="flex flex-col gap-3 mb-8">
      <label className="font-inter font-medium text-sm text-black">
        {label}
      </label>

      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="text"
            required
            value={amenity}
            onChange={e => handleAmenityChange(index, e.target.value)}
            placeholder={label}
            className="p-3 rounded-xl border border-lightGray focus:outline-darkGray font-inter text-sm text-gray w-full"
          />
          {index > 0 && (
            <IconButton
              onClick={() => removeAmenity(index)}
              sx={{ color: "red" }}
            >
              <IoAddOutline className="text-xl rotate-45" />{" "}
              {/* Rotated for "minus" effect */}
            </IconButton>
          )}
        </div>
      ))}

      <Button
        type="button"
        onClick={addAmenity}
        sx={{
          borderRadius: 2,
          background: colorConfig.primary,
          color: colorConfig.white,
          textTransform: "none",
          mt: 1,
          width: "200px",
        }}
      >
        Add Another Amenity
      </Button>
    </div>
  );
};

export default AmenitiesInputField;
