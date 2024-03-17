import axios from "axios";

export const getDoa = (callBack) => {
  axios
    .get(`https://open-api.my.id/api/doa`)
    .then((res) => {
      console.log(res);
      callBack(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailDoa = (id, callBack) => {
  axios
    .get(`https://open-api.my.id/api/doa/${id}`)
    .then((res) => {
      console.log(res);
      callBack(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
