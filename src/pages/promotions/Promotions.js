import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./components/Row";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import Backdrop from "@mui/material/Backdrop";

import { AiOutlineReload } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { FaPen } from "react-icons/fa";

import mockPromotions from "../../assets/data/mock/mockPromotions";
import mockServices from "../../assets/data/mock/mockServices";
import tempPromotions from "../../assets/data/temp/tempPromotions";
import promotionsAPI from "../../apis/promotions";

import { useDispatch, useSelector } from "react-redux";
import { selectProm, setProm, addProm } from "../../slices/promSlice";

const copyUrl = () => {
  navigator.clipboard.writeText(window.location.href);
};

const reload = () => {
  window.location.reload();
};

const actions = [
  { icon: <GrAdd size={25} />, name: "Add" },
  { icon: <FaPen size={20} />, name: "Edit" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <FileCopyIcon />, name: "Copy", onClick: copyUrl },
  { icon: <AiOutlineReload size={25} />, name: "Reload", onClick: reload },
];

// unix time to date time format dd/mm/yyyy hh:mm:ss

const headers = [
  { label: "ดูรายละเอียด", minWidth: 100 },
  { label: "รหัสโปรโมชั่น", minWidth: 100 },
  { label: "ชื่อโปรโมชั่น", minWidth: 150 },
  { label: "รายละเอียด", minWidth: 200 },
  { label: "วันที่เริ่ม", minWidth: 100 },
  { label: "วันที่สิ้นสุด", minWidth: 100 },
  { label: "แก้ไข", minWidth: 30 },
  { label: "ลบ", minWidth: 30 },
];

export default function CollapsibleTable() {
  const [promotions, setPromotions] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const prom = useSelector(selectProm);

  const getPromotionsInfo = async () => {
    try {
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  const handleSpeedDialClick = (type) => {
    setOpen(false);

    switch (type) {
      case "Add":
        dispatch(setProm([...mockPromotions, tempPromotions]));
        console.log("Add");
        break;
      case "Edit":
        dispatch(setProm(mockPromotions));
        break;
      case "Save":
        console.log("Save");
        break;
      case "Copy":
        navigator.clipboard.writeText(window.location.href);
        break;
      case "Reload":
        localStorage.removeItem("prom");
        window.location.reload();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    console.log("prom", prom);
  }, [prom]);

  return (
    <div className="overflow-y-auto h-screen mt-5 sm:mt-0 pb-36 z-40">
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={(e) => handleSpeedDialClick(action.name)}
          />
        ))}
      </SpeedDial>

      <TableContainer component={Paper} sx={{ borderRadius: "1rem" }}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ position: "sticky" }}>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  align="center"
                  key={index}
                  sx={{ minWidth: header.minWidth }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {prom.map((row, idx) => {
              return <Row key={idx} idx={idx} row={row} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
