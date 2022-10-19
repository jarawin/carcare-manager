import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import mockCustomers from "../../assets/data/mock/mockCustomers"

const columns = [
  { id: "fname",label: "ชื่อจริง", minWidth: 200 },
  { id: "lname",label: "นามสกุล", minWidth: 150 },
  { id: "email",label: "อีเมล", minWidth: 150 },
  { id: "picture_url",label: "รูป", minWidth: 100 },
  { id: "firstlogin_time",label: "เข้าใช้งานครั้งเเรก", minWidth: 100 },
  { id: "lastlogin_time",label: "เข้าใช้งานครั้งล่าสุด", minWidth: 150 },
  { id: "rank",label: "ระดับของลูกค้า", minWidth: 150 },
  { id: "customer_type",label: "ประเภทของลูกค้า", minWidth: 200 },
  { id: "tel",label: "เบอร์โทร", minWidth: 150 },
];

function createData (fname, lname, email, picture_url, firstlogin_time, lastlogin_time, rank, customer_type, tel)
{
  return {fname, lname, email, picture_url, firstlogin_time, lastlogin_time, rank, customer_type, tel};
}

const rows = [
  createData(
    mockCustomers[0].fname,
    mockCustomers[0].lname,
    mockCustomers[0].email,
    mockCustomers[0].picture_url,
    mockCustomers[0].firstlogin_time,
    mockCustomers[0].lastlogin_time,
    mockCustomers[0].rank,
    mockCustomers[0].customer_type,
    mockCustomers[0].tel
  ),
  createData(
    mockCustomers[1].fname,
    mockCustomers[1].lname,
    mockCustomers[1].email,
    mockCustomers[1].picture_url,
    mockCustomers[1].firstlogin_time,
    mockCustomers[1].lastlogin_time,
    mockCustomers[1].rank,
    mockCustomers[1].customer_type,
    mockCustomers[1].tel
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row,idx) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {row[column.id]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
