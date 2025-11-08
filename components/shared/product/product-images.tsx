"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type ProductImagesProps = {
  images: string[];
  name: string;
};
const ProductImages = ({ images, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  return (
    <div className="space-y-4">
      <Image
        className="min-h-[300px] object-cover object-center"
        src={images[currentImage]}
        alt={name}
        width={1000}
        height={1000}
        priority
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            className={cn(
              "cursor-pointer mr-2 border hover:border-orange-600 transition-colors duration-500 ease-in-out",
              currentImage === index && "border-orange-500"
            )}
            key={index}
            onClick={() => setCurrentImage(index)}>
            <Image
              key={index}
              className=""
              src={image}
              alt={`${name} image ${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
