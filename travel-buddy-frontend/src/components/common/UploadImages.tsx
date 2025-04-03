import { colorConfig } from "@/configs/colorConfig";
import { envConfig } from "@/configs/envConfig";
import { CircularProgress, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IoAddOutline, IoClose } from "react-icons/io5";

const UploadImages = ({
  images,
  setImages,
}: {
  images: Array<string>;
  setImages: any;
}) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUpload = (e: any) => {
    e.preventDefault();
    setIsImageUploaded(true);
    const img = e.target.files[0];
    if (img) {
      const formData = new FormData();
      formData.append("image", img);

      const url = `https://api.imgbb.com/1/upload?key=${envConfig.image_api_key}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(imgData => {
          try {
            if (imgData?.data?.url) {
              setImages((prevImages: string[]) => {
                const updatedImages = [...prevImages, imgData.data.url];

                // Store updated images in session storage
                sessionStorage.setItem(
                  "uploadedImages",
                  JSON.stringify(updatedImages)
                );

                return updatedImages;
              });
            }
          } finally {
            setIsImageUploaded(false);
          }
        })
        .catch(() => setIsImageUploaded(false));
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages: string[]) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);

      // Update session storage
      sessionStorage.setItem("uploadedImages", JSON.stringify(updatedImages));

      return updatedImages;
    });
  };

  return (
    <div className="flex flex-col gap-3 mb-8">
      <label className="font-inter font-medium text-sm text-black">
        Upload Images
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 border border-lightGray rounded-xl p-4 w-full overflow-hidden">
        {images.map((img, i) => (
          <div key={i} className="relative h-[150px] overflow-hidden">
            <Image
              src={img}
              alt={`Uploaded Image- ${i + 1}`}
              width={50}
              height={50}
              priority
              className="w-full h-full object-cover rounded-xl"
            />
            {/* ❌ Remove Button */}
            <button
              onClick={() => handleRemoveImage(i)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              <IoClose className="text-3xl p-1 text-black bg-white rounded-full" />
            </button>
          </div>
        ))}
        <IconButton
          onClick={() => {
            const imageUploadElement = document.getElementById("image-upload");
            if (imageUploadElement) imageUploadElement.click();
          }}
          sx={{
            border: `1px solid ${colorConfig.lightGray}`, // Equivalent to border-lightGray
            width: "100%",
            height: "150px",
            fontSize: "1.125rem", // text-lg
            borderRadius: "0.75rem", // rounded-xl
            fontFamily: "Inter, sans-serif", // font-inter
            fontWeight: 500, // font-medium
          }}
          disabled={isImageUploaded || images.length >= 5 ? true : false}
        >
          {isImageUploaded ? (
            <CircularProgress color="inherit" />
          ) : (
            <IoAddOutline className="text-4xl" />
          )}{" "}
          {/* text-3xl */}
          <input
            id="image-upload"
            // name="image"
            type="file"
            className="hidden"
            onChange={e => handleImageUpload(e)}
            // required
          />
        </IconButton>
      </div>
      <span className="block min-h-[16px] font-inter text-xs text-lightGray font-light">
        Only {5 - images.length} more images can be uploaded!
      </span>
    </div>
  );
};

export default UploadImages;
