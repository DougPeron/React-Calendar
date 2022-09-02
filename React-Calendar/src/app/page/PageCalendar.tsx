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
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";

import IconButton from "@mui/material/IconButton";

const daysOfWeek = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

//sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

export default function PageCalendar() {
  const weeks = generateCalendar(getToday());
  console.log(weeks);
  return (
    <Box textAlign="start" display="flex" height="100%">
      <Box padding="16px 2em" borderRight="1px solid rgb(224, 224, 224)">
        <Box paddingY="16px">
          <h2>Agenda</h2>
        </Box>
        <Box paddingY="16px">
          <Button variant="contained">Contained</Button>
        </Box>
        <Box textAlign="start">
          <h3>Agenda</h3>
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
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" padding="10px">
            <Box marginRight="10px">
              <IconButton aria-label="Antes">
                <ChevronLeftOutlinedIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton aria-label="Depois">
                <ChevronRightIcon />
              </IconButton>
            </Box>
            <Box padding="10px">
              <b>Agosto de 2022</b>
            </Box>
          </Box>
          <Box padding="10px" marginRight="20px">
            <IconButton aria-label="Antes">
              <PersonIcon />
            </IconButton>
          </Box>
        </Box>

        <Table
          sx={{ minWidth: 650, height: "100%" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {daysOfWeek.map((day) => {
                return <TableCell align="center">{day}</TableCell>;
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {weeks.map((week, i) => (
              <TableRow
                key={i}
                sx={{
                  "& td": {
                    borderRight: "1px solid rgb(224, 224, 224)",
                  },
                }}
              >
                {week.map((cell) => {
                  return <TableCell align="center">{cell.date}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
interface ICalendarCell {
  date: string;
}
function generateCalendar(date: string): ICalendarCell[][] {
  const weeks: ICalendarCell[][] = [];
  const jsDate = new Date(date + "T10:00:00");
  const currentMonth = jsDate.getMonth();

  const currentDay = new Date(jsDate.valueOf());
  currentDay.setDate(1);
  const dayOfWeek = currentDay.getDay();
  currentDay.setDate(1 - dayOfWeek);

  do {
    const week: ICalendarCell[] = [];
    for (let i = 0; i < daysOfWeek.length; i++) {
      const isoDate = `${currentDay.getFullYear()}-${currentDay
        .getMonth()
        .toString()
        .padStart(2, "0")}-${currentDay.getDate().toString().padStart(2, "0")}`;
      week.push({ date: isoDate });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
  } while (currentDay.getMonth() === currentMonth);

  return weeks;
}
function getToday() {
  return "2021-06-17";
}
