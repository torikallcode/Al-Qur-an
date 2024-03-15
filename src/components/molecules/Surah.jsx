import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BorderSvg } from "../atoms/BorderSvg";
import { PlaySvg } from "../atoms/PlaySvg";

export const Surah = ({ id, nomor, nama, arti, nama_latin, jumlah_ayat, tempat_turun, classname, audio }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlay = () => {
    setIsPlaying(true);
  }

  const handlePause = () => {
    setIsPlaying(false);
  }

  const handleSeekTo = (e) => {
    setCurrentTime(e.target.currentTime);
  }

  return (
    <Link to={`/surah/${nomor}`}>
      <div className={`flex items-center justify-between gap-x-5 ${classname} ${id}`}>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            <span className="absolute text-xs font-semibold font-inter text-primary">{nomor}</span>
            <BorderSvg className="w-11 h-11"></BorderSvg>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl text-secondary font-semibold font-inter">{nama}</h1>
          <h1 className="text-xs font-medium font-inter text-primary">{nama_latin} <span className="opacity-70"> • </span> <span className="text-xs">{jumlah_ayat} ayat</span></h1>
        </div>
        <button className="" onClick={isPlaying ? handlePause : handlePlay}>
          <PlaySvg className="w-8 h-8">
            <audio
              src={audio}
              controls
              onTimeUpdate={handleSeekTo}
              onPlay={handlePlay}
              onPause={handlePause}
              currentTime={currentTime}
            />
          </PlaySvg>
        </button>
      </div>
    </Link>
  );
};
