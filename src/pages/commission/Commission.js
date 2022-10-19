import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import mockCommissions from "../../assets/data/mock/mockCommissions";
const columns = [
  { id: "topic",label: "หัวข้อ", minWidth: 100 },
  { id: "description",label: "รายละเอียด", minWidth: 200 },
  { id: "quota_type",label: "ประเภทโควต้า", minWidth: 150 },
  { id: "quota_amount",label: "จำนวนโควต้า", minWidth: 150 },
  { id: "amount_type",label: "หน่วยเงิน", minWidth: 100 },
  { id: "amount",label: "จำนวนเงิน", minWidth: 100 },
  { id: "order_type",label: "ประเภทคำสั่งซื้อ", minWidth: 150 }
];

function createData (commission_id, topic, description, quota_type,quota_amount,amount_type,amount,order_type)
{
  return {commission_id, topic, description, quota_type,quota_amount,amount_type,amount,order_type};
}

const rows = [
  createData(
    mockCommissions[0].commission_id,
    mockCommissions[0].topic,
    mockCommissions[0].description,
    mockCommissions[0].quota_type,
    mockCommissions[0].quota_amount,
    mockCommissions[0].amount_type,
    mockCommissions[0].amount,
    mockCommissions[0].order_type,
  ),
  createData(
    mockCommissions[1].commission_id,
    mockCommissions[1].topic,
    mockCommissions[1].description,
    mockCommissions[1].quota_type,
    mockCommissions[1].quota_amount,
    mockCommissions[1].amount_type,
    mockCommissions[1].amount,
    mockCommissions[1].order_type,
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
