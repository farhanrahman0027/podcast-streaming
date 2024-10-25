import React from 'react';

const Newscard = ({ type, heading, news, linkText, imgSrc }) => {
  return (
    <div
      className={`${
        type === 'first'
          ? 'bg-blue-100 p-6 flex flex-col justify-between'
          : 'p-4 border border-gray-300'
      }`}
    >
      {type === 'first' ? (
        <>
          {/* First special card design */}
          <h2 className="text-2xl font-bold text-black mb-4">{heading}</h2>
          <p className="text-blue-600 mt-4 cursor-pointer">{linkText}</p>
        </>
      ) : (
        <>
          {/* Regular cards with images */}
          <img src={imgSrc} alt={heading} className="mb-4 w-full" />
          <h2 className="text-xl font-semibold">{heading}</h2>
          <p className="text-gray-500 mt-2">{news}</p>
          <p className="text-blue-600 mt-4 cursor-pointer">{linkText}</p>
        </>
      )}
    </div>
  );
};

export default Newscard;
