"use client";
import { CldImage } from 'next-cloudinary';

const BackgroundImage = ({ imgUrl }) => {
  if (!imgUrl) return <p>Loading...</p>;

  return (
    <div className="relative w-full h-[339px]">
      <CldImage
        width="960"
        height="600"
        src={imgUrl}
        sizes="100vw"
        alt="Header Image"
        crop="fill"
        gravity="center"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default BackgroundImage;
