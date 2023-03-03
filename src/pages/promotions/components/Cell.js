import React from "react";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";

import { useDispatch } from "react-redux";

function Cell({ props }) {
  const dispatch = useDispatch();
  const { a, idx, isEdit, func } = props;

  return (
    <TableCell align="left" component="th" scope="row">
      {isEdit ? (
        <TextField
          size="small"
          variant="outlined"
          //   defaultValue={value}
          value={a}
          onChange={(e) => dispatch(func({ idx: idx, code: e.target.value }))}
          sx={{ width: "100%" }}
        />
      ) : (
        a
      )}
    </TableCell>
  );
}

export default Cell;
