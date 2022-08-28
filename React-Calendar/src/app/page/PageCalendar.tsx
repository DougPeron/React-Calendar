import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const daysOfWeek = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

//sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

function PageCalendar() {
  return (
    <Box display="flex" height="100%">
      <Box padding="16px 2em" borderRight="1px solid rgb(224, 224, 224)">
        <Box textAlign="center" paddingY="16px">
          <h2>Agenda</h2>
        </Box>
        <Box textAlign="center" paddingY="16px">
          <Button variant="contained">Contained</Button>
        </Box>
        <Box textAlign="start">
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Pessoal"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Trabalho"
            labelPlacement="end"
          />
        </Box>
      </Box>

      <TableContainer component={"div"}>
        <Table
          sx={{ minWidth: 650, height: "100%" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {daysOfWeek.map((week) => {
                return <TableCell align="center">{week}</TableCell>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow
              sx={{
                "& td": {
                  borderRight: "1px solid rgb(224, 224, 224)",
                },
              }}
            >
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
            </TableRow>
            <TableRow
              sx={{
                "& td": {
                  borderRight: "1px solid rgb(224, 224, 224)",
                },
              }}
            >
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
            </TableRow>
            <TableRow
              sx={{
                "& td": {
                  borderRight: "1px solid rgb(224, 224, 224)",
                },
              }}
            >
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
              <TableCell align="center">x</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PageCalendar;
