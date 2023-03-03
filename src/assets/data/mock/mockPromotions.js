export default [
  {
    code: "THANKYOU100",
    name: "โปรโมชั่นลด 100 บาท",
    desciption: "สำหรับสมาชิกพิเศษ จำกัด 1 คนต่อวันสำหรับแพ็คเกจล้างรถ",
    image: "",
    starttime: 1664598458,
    endtime: 1664598458,
    limitflag: 1,
    limit_amount: 1,
    limit_type: "DAILY",
    dayflag: 0,
    rankflag: 0,
    rank: "null",
    is_member: 1,
    days: [],
    price_per_typeP: [
      {
        type_of_car: "MC",
        reduce_type: "BATH",
        reduce: "100",
      },
      {
        type_of_car: "PICKUP",
        reduce_type: "BATH",
        reduce: "100",
      },
      {
        type_of_car: "SEDAN",
        reduce_type: "BATH",
        reduce: "100",
      },
      {
        type_of_car: "SUV",
        reduce_type: "BATH",
        reduce: "100",
      },
      {
        type_of_car: "VAN",
        reduce_type: "BATH",
        reduce: "100",
      },
    ],
    can_reduce: [
      {
        service_id: "490825d4-a11d-47d2-b762-59ea8ca0a845",
      },
      {
        service_id: "51e7aec1-cea1-4be5-9d93-e51b4c978dfc",
      },
      {
        service_id: "806e743a-6032-48a0-84d3-f50d75d381b8",
      },
      {
        service_id: "a28daba7-c420-4e40-a997-a661d626957c",
      },
      {
        service_id: "d601cc78-7cee-4433-a1eb-2f7886281ec0",
      },
    ],
  },
  {
    code: "WEDNY10",
    name: "โปรโมชั่นลด 10% สำหรับทุกวันพุธ",
    desciption: "สำหรับลูกค้าระดับทอง จำกัด 10 คนตลอดอายุโปรโมชั่น",
    image: "",
    starttime: 1664598457,
    endtime: 1669799457,
    limitflag: 1,
    limit_amount: 10,
    limit_type: "FOREVER",
    dayflag: 1,
    rankflag: 1,
    rank: "GOLD",
    is_member: 0,
    days: [
      {
        day: "WEDNESDAY",
      },
    ],
    price_per_typeP: [
      {
        type_of_car: "MC",
        reduce_type: "PERCENT",
        reduce: "10",
      },
      {
        type_of_car: "PICKUP",
        reduce_type: "PERCENT",
        reduce: "10",
      },
      {
        type_of_car: "SEDAN",
        reduce_type: "PERCENT",
        reduce: "10",
      },
      {
        type_of_car: "SUV",
        reduce_type: "PERCENT",
        reduce: "10",
      },
      {
        type_of_car: "VAN",
        reduce_type: "PERCENT",
        reduce: "10",
      },
    ],
    can_reduce: [
      {
        service_id: "490825d4-a11d-47d2-b762-59ea8ca0a845",
      },
      {
        service_id: "51e7aec1-cea1-4be5-9d93-e51b4c978dfc",
      },
      {
        service_id: "806e743a-6032-48a0-84d3-f50d75d381b8",
      },
      {
        service_id: "a28daba7-c420-4e40-a997-a661d626957c",
      },
      {
        service_id: "d601cc78-7cee-4433-a1eb-2f7886281ec0",
      },
    ],
  },
];
