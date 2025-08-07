import React from "react";

const Moodyplayer = ({songs}) => {
  console.log(songs);

  return (
    <>
      {songs ? (
        songs.map((items, idx) => {
        return  <div className="border w-50 h-100">
            <p>{items.title}</p>
            <p>{items.artist}</p>
            <audio src={items.audio} controls />
          </div>;
        })
      ) : (
        <p>No songs available for this mood.</p>
      )}
    </>
  );
};

export default Moodyplayer;
