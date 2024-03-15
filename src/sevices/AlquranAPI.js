import axios from "axios";

export const getSurah = (callBack) => {
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

export const getDetailSurah = (nomor, callBack) => {
  axios
    .get(`https://quran-api.santrikoding.com/api/surah/${nomor}`)
    .then((res) => {
      console.log(res);
      callBack(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
