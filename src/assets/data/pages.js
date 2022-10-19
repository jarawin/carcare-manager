import { FaUser, FaUserTie, FaDollarSign } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { ImDatabase } from "react-icons/im";
import { IoToday } from "react-icons/io5";

export default [
  {
    name: "Queue Today",
    path: "/queue",
    icon: <IoToday size={25} />,
  },
  {
    name: "Queue History",
    path: "/queuehistory",
    icon: <ImDatabase size={25} />,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <FaUser size={25} />,
  },
  {
    name: "Employees",
    path: "/employees",
    icon: <FaUserTie size={25} />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <BsFillPeopleFill size={25} />,
  },
  {
    name: "Promotions",
    path: "/promotions",
    icon: <FaDollarSign size={25} />,
  },
  {
    name: "Commissions",
    path: "/commissions",
    icon: <GiReceiveMoney size={25} />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard size={25} />,
  },
];
