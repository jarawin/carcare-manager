import {
  FaMotorcycle,
  FaCarSide,
  FaShuttleVan,
  FaTruckPickup,
} from "react-icons/fa";
import { GiCityCar } from "react-icons/gi";

export default [
  {
    name: "MC",
    icon: <FaMotorcycle size={30} />,
    th: "รถจักรยานยนต์",
  },
  {
    name: "SUV",
    icon: <GiCityCar size={30} />,
    th: "รถSUV",
  },
  {
    name: "SEDAN",
    icon: <FaCarSide size={30} />,
    th: "รถเก๋ง",
  },
  {
    name: "VAN",
    icon: <FaShuttleVan size={30} />,
    th: "รถตู้",
  },
  {
    name: "PICKUP",
    icon: <FaTruckPickup size={30} />,
    th: "รถกระบะ",
  },
];
