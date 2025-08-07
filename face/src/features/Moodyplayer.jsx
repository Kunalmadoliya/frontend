import React from "react";

const Moodyplayer = ({songs}) => {
  console.log(songs);

  return (
    <>
      {songs ? (
        songs.map((items, idx) => {
          return (
            <div className="border flex w-50 h-100">
              <div className="border h-50 w-50"></div>
              <div>
                <p>{items.title}</p>
                <p>{items.artist}</p>
                <audio src={items.audio} controls />
              </div>
            </div>
          );
        })
      ) : (
        <>
          <div className="flex gap-6 p-8 h-full w-full items-center">
            <div className="bg-white border h-70 w-70  flex justify-center items-center rounded-lg">
               <p className="text-black   font-bold">No preview available</p>
            </div>
            <div className=" border h-80 flex-1 justify-center flex items-center rounded-lg">
                <h1 className="text-2xl">Face Detetction Error</h1>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Moodyplayer;
