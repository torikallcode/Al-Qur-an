import React, { useEffect, useState, useRef } from "react";
import { getSurah } from "../../sevices/AlquranAPI";
import { Surah } from "../molecules/Surah";
import { Button } from "../atoms/Button";
import { getDoa } from "../../sevices/Doa";
import { Doa } from "../molecules/Doa";
import { Loading } from "../atoms/Loading";
import { ButtomNavbar } from "./ButtomNavbar";

export const MainContent = () => {
  const [surah, setSurah] = useState([]);
  useEffect(() => {
    getSurah((data) => {
      setSurah(data);
    });
  }, []);

  const [doa, setDoa] = useState([])

  useEffect(() => {
    getDoa((data) => {
      setDoa(data)
    })
  }, [])


  const [pilih, setPilih] = useState(true)

  const sectionRef = useRef();

  function scrollToSection() {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const buttonClassSurah = pilih ? 'bg-primary text-white' : 'bg-transparent border-2 border-primary text-primary';
  const buttonClassDoa = pilih ? 'bg-transparent border-2 border-primary text-primary' : 'bg-primary text-white';

  return (
    <div ref={sectionRef} className="flex flex-col justify-center items-center mt-10 mb-20">
      <h1 className="text-3xl mb-10 text-start font-inter font-semibold w-full text-primary">
        Learn & Recite Quran everytime
      </h1>
      <div className="flex gap-x-3 w-full justify-start mb-11">
        <Button
          text="Surah"
          onClick={() => setPilih(true)}
          className={`py-2 px-9 rounded-full ${buttonClassSurah} font-medium font-inter`}
        ></Button>
        <Button
          text="Do'a"
          onClick={() => setPilih(false)}
          className={`py-2 px-9 rounded-full ${buttonClassDoa} font-medium font-inter`}
        ></Button>
      </div>
      {surah.length > 0 ? (
        <div id="surah" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 w-full gap-x-7">
          {pilih ? (
            surah.map((item) => (
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
            ))
          ) : (
            doa.map((item) => {
              return (
                <Doa id={item.id} key={item.id} judul={item.judul}></Doa>
              );
            })
          )}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div >
  );
};

