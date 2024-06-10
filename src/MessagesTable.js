import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './MessagesTable.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container"; 
import Stack from "@mui/material/Stack"; 



const item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const item_stack = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,

  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
  { id: 'from', numeric: false, disablePadding: false, label: 'From' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'subject', numeric: false, disablePadding: false, label: 'Subject' },
  { id: 'summary', numeric: false, disablePadding: false, label: 'Summary' },
  { id: 'related', numeric: false, disablePadding: false, label: 'Related' },


];

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = (props) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        Notification Center
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default function MessagesTable({ data }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [selectedMessage, setSelectedMessage] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleClickOpen = (message) => {
    setSelectedMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMessage(null);
  };

  const visibleRows = React.useMemo(
    () => stableSort(data, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, data]
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: '90%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
  
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: 'pointer' }}
                  >
                            <TableCell align="left">
                      <Button variant="contained" color="primary" onClick={() => handleClickOpen(row)}>
                        Open
                      </Button>
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.from}
                    </TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.subject}</TableCell>
                    <TableCell align="left">{row.summary}</TableCell>
                    <TableCell align="left">{row.related}</TableCell>


            
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={10} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="message-detail-title">
        <DialogContent>
          <DialogContentText>
            {selectedMessage ? (
              <>


                <div> 
                <h3 style={{ color: "blue" }}>{selectedMessage.subject}</h3> 
                <h3>{selectedMessage.from} - {selectedMessage.date}</h3> 
            </div> 

                <Container > 
                    <div 
                        style={{ 
                          width: "fit-content",  
                          height: "30em", 
                          display: "flex", 
                        }} 
                    > 
                
              <Box sx={{  
                width: "fit-content",  
                padding: "2px",
                margin: "auto" 
              }}>
                      <Stack direction="row" >
                      <item_stack>
                      <p><strong>Summary:</strong> {selectedMessage.summary}</p>
                      </item_stack>
                    </Stack>
                    <Stack direction="row">
                      <item>

                      <h3>Related</h3>
                      </item>

                    </Stack>
                    <Stack direction="row">
                    <item>
                      <p><strong>Related Location</strong>                       {selectedMessage.related}
                      </p>
                    </item>
                    </Stack>
                    <Stack direction="row">
                      <item>
                      <hr></hr>
                      </item>
                    </Stack>
                    <Stack direction="row">
                      <item>
                      <h3>Respond</h3>
                      </item>

                    </Stack>
                    <Stack direction="row">
                      <item>

                      <TextField label="Reply" style={{width: '400px'}}></TextField>
                      </item>

                    </Stack>
                    <Stack direction="row">
                      <item>

                      <Button>Submit</Button>
                      </item>

                    </Stack>
                    </Box>
                    </div> 
                </Container>  
              </>
            ) : (
              <p>Loading...</p>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

/*
                      <DialogTitle id="message-detail-title"><p><strong>Subject</strong> {selectedMessage.subject}</p></DialogTitle>

              <Grid container spacing={2} columns={2}>
                <Grid item>
                <item>
                <p><strong>From:</strong> {selectedMessage.from}</p>
                </item>
                </Grid>
                <Grid item>
                <item>
                <p><strong>Date:</strong> {selectedMessage.date}</p>              
                </item>
                </Grid>

                <Grid item><item><p><strong>Summary:</strong> {selectedMessage.summary}</p></item></Grid>
                <Grid item><item><p><strong>Related Location:</strong> {selectedMessage.relatedLocation}</p></item></Grid>
                <Grid item><item><p><strong>Related:</strong> {selectedMessage.related}</p></item></Grid>
                <Grid item><item>
              </item></Grid>
              </Grid>
              <h3>Reply</h3>
              <Grid container spacing={2} columns={1} >
                <Grid item>
                <item>
                  <TextField label="Reply" style={{width: '400px'}}></TextField>
                </item></Grid>
                </Grid>


                     <h1>Fluid Layout with <span  
                            style={{ color: 'green' }}>"md"</span> 
                                as maxWidth</h1> 


                */