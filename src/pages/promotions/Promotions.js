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

import { AiOutlineReload } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { FaPen } from "react-icons/fa";

import mockPromotions from "../../assets/data/mock/mockPromotions";
import mockServices from "../../assets/data/mock/mockServices";

const copyUrl = () => {
  navigator.clipboard.writeText(window.location.href);
  console.log(JSON.stringify(mockPromotions));
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
function unixTimeToDate(unixTime) {
  const date = new Date(unixTime * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime =
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2);
  return formattedTime;
}

function createData(
  code,
  name,
  desciption,
  starttime,
  endtime,
  prices,
  services
) {
  return {
    code,
    name,
    desciption,
    starttime,
    endtime,
    prices,
    services,
  };
}

const rows = [
  createData(
    mockPromotions[0].code,
    mockPromotions[0].name,
    mockPromotions[0].desciption,
    unixTimeToDate(mockPromotions[0].starttime),
    unixTimeToDate(mockPromotions[0].endtime),
    mockPromotions[0].price_per_typeP,
    mockPromotions[0].can_reduce
  ),
  createData(
    mockPromotions[1].code,
    mockPromotions[1].name,
    mockPromotions[1].desciption,
    unixTimeToDate(mockPromotions[1].starttime),
    unixTimeToDate(mockPromotions[1].endtime),
    mockPromotions[1].price_per_typeP,
    mockPromotions[1].can_reduce
  ),
];

const headers = [
  { label: "ดูรายละเอียด", minWidth: 100 },
  { label: "รหัสโปรโมชั่น", minWidth: 100 },
  { label: "ชื่อโปรโมชั่น", minWidth: 100 },
  { label: "รายละเอียด", minWidth: 200 },
  { label: "วันที่เริ่ม", minWidth: 100 },
  { label: "วันที่สิ้นสุด", minWidth: 100 },
  { label: "แก้ไข", minWidth: 30 },
  { label: "ลบ", minWidth: 30 },
];

export default function CollapsibleTable() {
  return (
    <div className="overflow-y-auto h-screen mt-5 sm:mt-0 pb-36">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
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
            {rows.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
