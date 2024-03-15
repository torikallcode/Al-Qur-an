import React, { useEffect, useState, useRef } from "react";
import { getSurah } from "../../sevices/AlquranAPI";
import { Surah } from "../molecules/Surah";
import { Button } from "../atoms/Button";
import { ButtomNavbar } from "./ButtomNavbar";

export const Main = () => {
  const [surah, setSurah] = useState([]);
  useEffect(() => {
    getSurah((data) => {
      setSurah(data);
    });
  }, []);

  const sectionRef = useRef();

  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <div ref={sectionRef} className="flex flex-col justify-center items-center mt-20 mb-20">
      <h1 className="text-3xl mb-10 text-start font-inter font-semibold w-full text-primary">
        Learn & Recite Quran everytime
      </h1>
      <div className="flex gap-x-3 w-full justify-start mb-11">
        <Button
          text="Surah"
          className="py-2 px-9 rounded-full bg-primary text-white font-medium"
        ></Button>
        <Button
          text="Do'a"
          className="py-2 px-11 rounded-full bg-transparent border-2 border-primary text-primary font-medium"
        ></Button>
      </div>
      {surah.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 w-full gap-x-7">
          {surah.map((item) => (
            <Surah
              key={item.nomor}
              nomor={item.nomor}
              nama={item.nama}
              nama_latin={item.nama_latin}
              jumlah_ayat={item.jumlah_ayat}
              tempat_turun={item.tempat_turun}
              arti={item.arti}
              audio={item.audio}
              classname="border-b border-gray-400 py-5 xl:py-3 text-gray-800"
            ></Surah>
          ))}
        </div>
      )}

      <ButtomNavbar surahSection={"/surah"} dzikirSection={sectionRef} utama={"/"}></ButtomNavbar>
    </div>
  );
};