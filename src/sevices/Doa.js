import React from "react";

export const Doa = (callBack) => {
  axios
    .get(`https://quran-api.santrikoding.com/api/surah`)
    .then((res) => {
      console.log(res);
      callBack(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
