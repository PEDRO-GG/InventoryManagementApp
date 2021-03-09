// MaterialUI Imports
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SimpleMenu from "./SimpleMenu";

export default function BasicTable({ products, handleDelete, handleUpdate }) {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(id, name, price, status, total_sold, total_revenue) {
    return { id, name, price, status, total_sold, total_revenue };
  }

  const rows = products.map((product) =>
    createData(
      product.id,
      product.name,
      product.price,
      product.status,
      product.total_sold,
      product.total_revenue
    )
  );
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Total Sold</StyledTableCell>
            <StyledTableCell align="right">Total Revenue</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">${row.price}</StyledTableCell>
              <StyledTableCell align="right">
                {row.status ? "Available" : "Not Available"}
              </StyledTableCell>
              <StyledTableCell align="right">{row.total_sold}</StyledTableCell>
              <StyledTableCell align="right">
                $
                {row.total_revenue &&
                  row.total_revenue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </StyledTableCell>
              <StyledTableCell align="right">
                <SimpleMenu
                  handleDelete={() => handleDelete(row.id)}
                  handleUpdate={() => handleUpdate(row.id)}
                ></SimpleMenu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
