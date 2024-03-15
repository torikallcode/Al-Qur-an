import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailSurah } from "../../../sevices/AlquranAPI";
import { BorderSvg } from "../../atoms/BorderSvg";
import { AudioOn } from "../../atoms/AudioOn";

export const DetailSurah = ({ children }) => {
  const { nomor } = useParams();
  const [surah, setSurah] = useState([])

  useEffect(() => {
    getDetailSurah(nomor, (data) => {
      setSurah(data)
    })
  }, [nomor])
  console.log(surah)
  return (
    <div className="flex flex-col justify-center items-center w-full bg-putih">
      {children}
      <Header surah={surah} />
      <Body surah={surah} />
    </div >
  )
}

export const Header = ({ surah }) => {
  return (
    <div className="w-full bg-primary flex px-5 justify-between items-center py-3">
      <div className="relative flex justify-center items-center">
        <span className="absolute font-semibold font-inter text-xs text-putih">{surah.jumlah_ayat}</span>
        <BorderSvg className="w-11 h-11" warna="#EEEEEE"></BorderSvg>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-utama text-5xl text-putih leading-[3rem]">{surah.nama}</h1>
        <h1 className="font-inter text-xs text-putih">( {surah.arti} )</h1>
      </div>
      <AudioOn className={`w-6 h-6`} warna="#EEEEEE"></AudioOn>
    </div>
  )
}

export const Body = ({ surah }) => {
  return (
    <div className="w-full px-5 py-8 flex flex-col">
      <h1 className="font-utama text-4xl text-secondary text-center mb-12">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      {surah.ayat ? (
        surah.ayat.map((item) => (
          <div className="flex flex-col mb-7 border-b pb-5">
            <div className="text-right font-utama text-4xl text-secondary flex justify-end items-start gap-x-2 mb-3">
              <div className="relative flex justify-center items-center">
                <span className="absolute font-semibold font-inter text-xs text-secondary">{item.nomor}</span>
                <BorderSvg className="w-9 h-9" warna="#31363F"></BorderSvg>
              </div>
              <p>{item.ar}</p>
            </div>
            <p className="font-inter text-sm text-secondary leading-5">{item.idn}</p>
          </div>
        ))
      ) : (
        <div className="w-full flex justify-center items-center h-[50vh]">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  )
}

// DetailSurah.Header = Header