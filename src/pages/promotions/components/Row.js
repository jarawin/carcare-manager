import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";

import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { FaPen, FaTrash } from "react-icons/fa";
import { MdSave, MdCancel } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  selectProm,
  setCode,
  setDescriptions,
  setStartDate,
  setEndDate,
  setReduce,
  setReduceType,
  setLimitAmount,
  setLimitType,
  setCanReduce,
  setDays,
  delProm,
} from "../../../slices/promSlice";

import carTypes from "../../../assets/data/carTypes";
import mockServices from "../../../assets/data/mock/mockServices";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function unixTimeToDate(unixTime) {
  const date = new Date(unixTime * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedTime = day + "/" + month + "/" + year + " ";
  return formattedTime;
}

// const days = [
//   {
//     name: "วันอาทิตย์",
//     value: "SUNDAY",
//   },
//   {
//     name: "วันจันทร์",
//     value: "MONDAY",
//   },
//   {
//     name: "วันอังคาร",
//     value: "TUESDAY",
//   },
//   {
//     name: "วันพุธ",
//     value: "WEDNESDAY",
//   },
//   {
//     name: "วันพฤหัสบดี",
//     value: "THURSDAY",
//   },
//   {
//     name: "วันศุกร์",
//     value: "FRIDAY",
//   },
//   {
//     name: "วันเสาร์",
//     value: "SATURDAY",
//   },
// ];

const days = [
  {
    day: "SUNDAY",
  },
  {
    day: "MONDAY",
  },
  {
    day: "TUESDAY",
  },
  {
    day: "WEDNESDAY",
  },
  {
    day: "THURSDAY",
  },
  {
    day: "FRIDAY",
  },
  {
    day: "SATURDAY",
  },
];

const units = [
  {
    value: "PERCENT",
    label: "เปอร์เซ็น (%)",
  },
  {
    value: "BATH",
    label: "บาท (฿)",
  },
];

export default function Row(props) {
  const { row, idx } = props;
  const [open, setOpen] = React.useState(false);

  const verifyNewProm = () => {
    if (
      row.name === "" ||
      row.code === "" ||
      row.descriptions === "" ||
      row.startDate === "" ||
      row.endDate === "" ||
      row.unit === "" ||
      row.value === "" ||
      row.limit_amount === "" ||
      row.limit_type === "" ||
      row.can_reduce === "" ||
      row.days === ""
    ) {
      return false;
    }
    return true;
  };
  const [isEdit, setIsEdit] = React.useState(!verifyNewProm());
  const [dateStartIn, setDateStartIn] = React.useState(
    dayjs(row.startDate * 1000)
  );
  const [dateEndIn, setDateEndIn] = React.useState(dayjs(row.endDate * 1000));

  const dispatch = useDispatch();
  const prom = useSelector(selectProm)[idx];

  const handleUpdate = () => {
    if (
      !prom.code ||
      !prom.name ||
      !prom.descriptions ||
      !prom.starttime ||
      !prom.endtime ||
      !prom.limit_amount ||
      !prom.limit_type ||
      !prom.price_per_typeP ||
      !prom.days ||
      !prom.can_reduce
      // prom.limit_amount <= 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!(prom.limit_amount > 0)) {
      alert("Please enter a valid 'limit_amount'");
      return;
    }

    const hasValidPricePerTypeP = prom.price_per_typeP.every(
      (item) => item.reduce > 0
    );

    if (!hasValidPricePerTypeP) {
      alert(
        "Please enter a valid 'reduce' value for each item in 'price_per_typeP'."
      );
      return;
    }

    if (prom.can_reduce.length === 0) {
      alert("Please enter at least one item in 'can_reduce'.");
      return;
    }

    const hasValidCanReduce = prom.can_reduce.every(
      (item) => item.name.trim().length > 0
    );

    if (!hasValidCanReduce) {
      alert("Please enter a valid 'name' for each item in 'can_reduce'.");
      return;
    }

    if (prom.days.length === 0) {
      alert("Please enter at least one item in 'day'.");
      return;
    }

    const hasValidDays = prom.days.every((item) => item.day.trim().length > 0);

    if (!hasValidDays) {
      alert("Please enter a valid 'day' for each item in 'days'.");
      return;
    }

    setIsEdit(false);
    console.log(prom);
    fetch("http://127.0.0.1:3001/promotions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prom),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleTrash = (code) => {
    if (isEdit) {
      alert("โปรโมชั่นกำลังถูกแก้ไข");
    } else {
      if (window.confirm("คุณต้องการลบโปรโมชั่นนี้ใช่หรือไม่?")) {
        dispatch(delProm(code));
        fetch("http://127.0.0.1:3001/promotions", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(prom),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Delete success");
            } else {
              alert("Delete not success");
            }
          })
          .catch((error) => console.error(error));
      }
    }
  };

  React.useEffect(() => {
    dispatch(setStartDate({ idx: idx, startDate: dateStartIn.unix() }));
    dispatch(setEndDate({ idx: idx, endDate: dateEndIn.unix() }));
  }, [dateStartIn, dateEndIn]);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        className="relative"
      >
        {/* Table Dropdown */}

        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          {isEdit ? (
            <TextField
              size="small"
              variant="outlined"
              defaultValue={row.code}
              value={row.code}
              onChange={(e) =>
                dispatch(setCode({ idx: idx, code: e.target.value }))
              }
              sx={{ width: "100%" }}
            />
          ) : (
            row.code
          )}
        </TableCell>
        <TableCell align="left">
          {isEdit ? (
            <TextField
              size="small"
              variant="outlined"
              defaultValue={prom.name}
              onChange={(e) =>
                dispatch(setName({ idx: idx, name: e.target.value }))
              }
              value={prom.name}
              sx={{ width: "100%", fontSize: "0.2rem" }}
            />
          ) : (
            row.name
          )}
        </TableCell>
        <TableCell align="left">
          {isEdit ? (
            <TextField
              size="small"
              variant="outlined"
              defaultValue={row.descriptions}
              onChange={(e) =>
                dispatch(
                  setDescriptions({ idx: idx, descriptions: e.target.value })
                )
              }
              value={row.descriptions}
              sx={{ width: "100%" }}
            />
          ) : (
            row.descriptions
          )}
        </TableCell>
        <TableCell align="right">
          {isEdit ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  // disablePast
                  openTo="day"
                  views={["year", "month", "day"]}
                  onChange={(e) => {
                    setDateStartIn(e);
                  }}
                  value={dayjs(dateStartIn).format("DD/MM/YYYY")}
                  renderInput={(params) => (
                    <TextField size="small" variant="outlined" {...params} />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          ) : (
            unixTimeToDate(row.starttime)
          )}
        </TableCell>
        <TableCell align="right">
          {isEdit ? (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  // disablePast
                  openTo="day"
                  views={["year", "month", "day"]}
                  onChange={(e) => {
                    setDateEndIn(e);
                  }}
                  value={dayjs(dateEndIn).format("DD/MM/YYYY")}
                  renderInput={(params) => (
                    <TextField size="small" variant="outlined" {...params} />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          ) : (
            unixTimeToDate(row.endtime)
          )}
        </TableCell>
        <TableCell align="center">
          <IconButton size="small">
            {isEdit ? (
              <MdSave
                size={25}
                className="text-green-400"
                onClick={handleUpdate}
              />
            ) : (
              <FaPen onClick={() => setIsEdit(true)} />
            )}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <IconButton size="small">
            {isEdit ? (
              <MdCancel
                size={25}
                className="text-red-400"
                onClick={() => setIsEdit(false)}
              />
            ) : (
              <FaTrash onClick={(e) => handleTrash(row.code)} />
            )}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ชนิดของรถ</TableCell>
                    <TableCell align="right">ลดราคา</TableCell>
                    <TableCell align="right">ชนิดของหน่วย</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.price_per_typeP.map((p, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {p.type_of_car}
                      </TableCell>
                      <TableCell align="right">
                        {isEdit ? (
                          <TextField
                            size="small"
                            variant="outlined"
                            defaultValue={p.reduce}
                            onChange={(e) => {
                              const newValue = e.target.value;
                              dispatch(
                                setReduce({
                                  idx: idx,
                                  reduce: newValue,
                                  index: i,
                                })
                              );
                            }}
                            value={p.reduce}
                            sx={{ width: "100%" }}
                          />
                        ) : (
                          p.reduce
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {isEdit ? (
                          <FormControl fullWidth>
                            <Select
                              value={p.reduce_type}
                              size="small"
                              onChange={(e) => {
                                dispatch(
                                  setReduceType({
                                    idx: idx,
                                    reduce_type: e.target.value,
                                    index: i,
                                  })
                                );
                              }}
                            >
                              {units.map((c, i) => (
                                <MenuItem key={i} value={c.value}>
                                  {c.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        ) : (
                          p.reduce_type
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Grid container spacing={2} columns={16} sx={{ marginTop: 1 }}>
              <Grid item xs={8}>
                <TextField
                  disabled={!isEdit}
                  label="จำนวนครั้งต่อข้อจำกัด"
                  variant="outlined"
                  defaultValue={row.limit_amount}
                  // value={row.limit_amount}
                  onChange={(e) => {
                    dispatch(
                      setLimitAmount({
                        idx: idx,
                        limit_amount: e.target.value,
                      })
                    );
                  }}
                  type="number"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth disabled={!isEdit}>
                  <InputLabel id="demo-simple-select-label">
                    ประเภทข้อจำกัดของโปรโมชั่น
                  </InputLabel>
                  <Select
                    label="ประเภทข้อจำกัดของโปรโมชั่น"
                    defaultValue={row.limit_type}
                    onChange={(e) => {
                      dispatch(
                        setLimitType({
                          idx: idx,
                          limit_type: e.target.value,
                        })
                      );
                    }}
                  >
                    {["DAILY", "MONTHLY", "HOURLY", "FOREVER"].map((c, i) => (
                      <MenuItem key={i} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* <Grid container spacing={2} columns={16} sx={{ marginTop: 1 }}>
              <Grid item xs={8}>
                <Autocomplete
                  disabled={!isEdit}
                  disableCloseOnSelect
                  // value={value}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                  // inputValue={inputValue}
                  // onInputChange={(event, newInputValue) => {
                  //   setInputValue(newInputValue);
                  // }}
                  id="controllable-states-demo"
                  options={["BRONZE", "SILVER", "GOLD"]}
                  sx={{ width: "full" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ระดับที่สามารถใช้ได้กับโปรโมชั่นนี้"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={8}>
                <Autocomplete
                  disabled={!isEdit}
                  disableCloseOnSelect
                  // value={value}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                  // inputValue={inputValue}
                  // onInputChange={(event, newInputValue) => {
                  //   setInputValue(newInputValue);
                  // }}
                  id="controllable-states-demo"
                  options={["MEMBER", "GENERAL"]}
                  sx={{ width: "full" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ชนิดของลูกค้าที่สามารถใช้ได้กับโปรโมชั่นนี้"
                    />
                  )}
                />
              </Grid>
            </Grid> */}

            {/* บริการ */}
            <Autocomplete
              disabled={!isEdit}
              multiple
              id="checkboxes-tags-demo"
              options={mockServices}
              disableCloseOnSelect
              limitTags={3}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.name}
                </li>
              )}
              style={{ width: "full", marginTop: 20, marginBottom: 20 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="บริการที่สามารถใช้ได้กับโปรโมชั่นนี้"
                  placeholder="บริการ"
                />
              )}
              onChange={(event, selectedOptions) => {
                dispatch(
                  setCanReduce({
                    idx: idx,
                    can_reduce: selectedOptions,
                  })
                );
              }}
              defaultValue={row.can_reduce}
            />
            {/* วันที่สามารถใช้บริการนี้ได้ */}
            <Autocomplete
              disabled={!isEdit}
              multiple
              id="checkboxes-tags-demo"
              options={days}
              disableCloseOnSelect
              limitTags={3}
              getOptionLabel={(option) => option.day}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.day}
                </li>
              )}
              style={{ width: "full", marginTop: 20, marginBottom: 20 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="วันที่สามารถใช้ได้กับโปรโมชั่นนี้"
                  placeholder="วัน"
                />
              )}
              onChange={(event, selectedOptions) => {
                dispatch(
                  setDays({
                    idx: idx,
                    days: selectedOptions,
                  })
                );
              }}
              defaultValue={row.days}
            />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
