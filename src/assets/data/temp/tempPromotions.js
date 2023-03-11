export default {
  code: "",
  name: "",
  desciption: "",
  image: "",
  starttime: Math.floor(new Date().getTime() / 1000),
  endtime: Math.floor((new Date().getTime() + 1) / 1000),
  limitflag: true,
  limit_amount: "",
  limit_type: "",
  dayflag: true,
  days: [],
  price_per_typeP: [
    {
      type_of_car: "MC",
      reduce_type: "PERCENT",
      reduce: "",
    },
    {
      type_of_car: "PICKUP",
      reduce_type: "PERCENT",
      reduce: "",
    },
    {
      type_of_car: "SEDAN",
      reduce_type: "PERCENT",
      reduce: "",
    },
    {
      type_of_car: "SUV",
      reduce_type: "PERCENT",
      reduce: "",
    },
    {
      type_of_car: "VAN",
      reduce_type: "PERCENT",
      reduce: "",
    },
  ],
  can_reduce: [],
};
