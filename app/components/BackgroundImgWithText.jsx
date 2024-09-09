"use client";

const BackgroundImgWithText = ({ bgImgUrl, bgWtClassNames, children }) => {
  if (!bgImgUrl || !children) return <p>Loading...</p>;
  
  return (
    <div className={`relative bg-cover bg-center bg-no-repeat h-[339px] w-full
      ${bgWtClassNames ? bgWtClassNames : ''}`}
      style={{backgroundImage: `linear-gradient( rgba(24, 31, 37, 0.4), rgba(24, 31, 37, 0.4) ), url(${bgImgUrl})`}}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2 flex flex-col items-center flex-1">
        { children }
      </div>
    </div>
  );
};

export default BackgroundImgWithText;
