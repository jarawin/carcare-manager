import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaPen, FaTrash } from "react-icons/fa";
import { MdSave, MdCancel } from "react-icons/md";

import carTypes from "../../../assets/data/carTypes";

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
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  const handleUpdate = () => {
    setIsEdit(false);
    alert("Update");
  };

  const handleTrash = () => {
    if (isEdit) {
      alert("Please save before delete");
    } else {
      if (window.confirm("Are you sure to delete this record?")) {
        alert("Deleted");
      }
    }
  };

  // alert("Delete");

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
              defaultValue={row.name}
              value={row.name}
              sx={{ width: "100%" }}
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
              defaultValue={row.desciption}
              value={row.desciption}
              sx={{ width: "100%" }}
            />
          ) : (
            row.desciption
          )}
        </TableCell>

        <TableCell align="right">
          {isEdit ? (
            <TextField
              size="small"
              variant="outlined"
              defaultValue={row.starttime}
              value={row.starttime}
              sx={{ width: "100%" }}
            />
          ) : (
            row.starttime
          )}
        </TableCell>

        <TableCell align="right">
          {isEdit ? (
            <TextField
              size="small"
              variant="outlined"
              defaultValue={row.endtime}
              value={row.endtime}
              sx={{ width: "100%" }}
            />
          ) : (
            row.endtime
          )}
        </TableCell>

        <TableCell>
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
        <TableCell>
          <IconButton size="small">
            {isEdit ? (
              <MdCancel
                size={25}
                className="text-red-400"
                onClick={() => setIsEdit(false)}
              />
            ) : (
              <FaTrash onClick={handleTrash} />
            )}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                รายการลดราคาต่อประเภทของรถ
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ชนิดของรถ</TableCell>
                    <TableCell align="right">ลดราคา</TableCell>
                    <TableCell align="right">ชนิดของหน่วย</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.prices.map((p, i) => (
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
                            <Select value={p.reduce_type} size="small">
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
            {row.services[0] ? (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  รายการของบริการที่สามารถลดราคา
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">บริการ</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {row.services.map((p, i) => (
                      <TableRow key={i}>
                        <TableCell component="th" scope="row">
                          {p.service_id}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            ) : null}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };
