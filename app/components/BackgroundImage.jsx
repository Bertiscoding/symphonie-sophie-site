"use client";

const BackgroundImage = ({ bgImgUrl, bgClassNames }) => {
  if (!bgImgUrl) return <p>Loading...</p>;

  return (
    <div className={`relative bg-cover bg-center bg-no-repeat h-full w-auto
      ${bgClassNames ? bgClassNames : ''}`}
    style={{backgroundImage: `url(${bgImgUrl})`}}
  ></div>
  );
};

export default BackgroundImage;
