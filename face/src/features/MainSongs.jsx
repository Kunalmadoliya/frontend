import React from "react";

const MainSongs = ({songs}) => {
  if (!songs || songs.length === 0) {
    return (
      <div className="flex gap-6 p-8 h-full w-full items-center">
        
        <div className="border h-80 flex-1 justify-center flex items-center rounded-lg">
          <h1 className="text-2xl">Face Detection Error</h1>
        </div>
      </div>
    );
  }

  const firstSong = songs[0];

  return (
    <div className="flex gap-6 p-8 h-full w-full items-center">
      <div className="border h-80 flex-1 p-10 rounded-lg">
        <h1 className="text-3xl">{firstSong.title}</h1>
        <p className="text-1xl">{firstSong.artist}</p>
        <audio src={firstSong.audio} controls />
      </div>
    </div>
  );
};

export default MainSongs;
