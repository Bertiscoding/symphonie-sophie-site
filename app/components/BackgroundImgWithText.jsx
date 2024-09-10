"use client";

const BackgroundImgWithText = ({ bgImgUrl, bgWtClassNames, wrapperClassNames, bgHeight, bgWidth, children }) => {
  if (!bgImgUrl || !children) return <p>Loading...</p>;
  
  return (
    <div className={`relative bg-cover bg-center bg-no-repeat
      ${bgHeight ? bgHeight : 'h-full'} ${bgWidth ? bgWidth : 'w-full'}
      ${bgWtClassNames ? bgWtClassNames : ''}`}
      style={{backgroundImage: `linear-gradient( rgba(24, 31, 37, 0.44), rgba(24, 31, 37, 0.44) ), url(${bgImgUrl})`}}
    >
      <div className={`flex flex-col items-center flex-1 ${wrapperClassNames ? wrapperClassNames : ''}`}>
        { children }
      </div>
    </div>
  );
};

export default BackgroundImgWithText;
