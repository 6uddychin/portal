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
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container"; 
import Stack from "@mui/material/Stack"; 

import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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
  { id: 'requestDate', numeric: false, disablePadding: false, label: 'Request Date' },
  { id: 'scheduledDate', numeric: false, disablePadding: false, label: 'Scheduled Date' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'location', numeric: false, disablePadding: false, label: 'Location' },
  { id: 'address', numeric: false, disablePadding: false, label: 'Address' },
  { id: 'link', numeric: false, disablePadding: false, label: 'Link' },
  { id: 'owner', numeric: false, disablePadding: false, label: 'Owner' },
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
        Vendor Portal Data
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default function EnhancedTable({ data }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('requestDate');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [completedDate, setCompletedDate] = React.useState('');
  const [owner, setOwner] = React.useState('');

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

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setCompletedDate(row.completedDate || '');
    setOwner(row.owner);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleSave = () => {
    if (selectedRow) {
      selectedRow.completedDate = completedDate;
      selectedRow.owner = owner;
      setSelectedRow({ ...selectedRow });
      // Add code to update the data source here
    }
    setOpen(false);
  };

  const visibleRows = React.useMemo(
    () => stableSort(data, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, data]
  );

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const position = selectedRow ? [selectedRow.latitude, selectedRow.longitude] : [51.505, -0.09];

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table sx={{ minWidth: '100%' }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
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
                      <div className="buttonWithLogo">
                      <Button variant="contained" color="primary" endIcon={<RemoveRedEyeIcon />} onClick={() => handleClickOpen(row)}>
                     
                      </Button>
                      </div>
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" align="left">
                      {row.requestDate}
                    </TableCell>
                    <TableCell align="left">{row.scheduledDate}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.locationName}</TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">
                      <a href={row.link} target="_blank" rel="noopener noreferrer">
                        View Link
                      </a>
                    </TableCell>
                    <TableCell align="left">{row.owner}</TableCell>
   
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
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
      <Dialog width="60%" height="60%" open={open} onClose={handleClose} aria-labelledby="detail-dialog-title">
        <DialogContent>
          {selectedRow && (
            <div>
        <DialogTitle id="detail-dialog-title">{selectedRow.locationName}</DialogTitle>

              <Container>
              <MapContainer center={position} zoom={50} style={{height: '400px', width: '400px', marginBottom: '20px' }}>

                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    {selectedRow.address}
                  </Popup>
                </Marker>
              </MapContainer>
              <h2>Location Details</h2>
              <p><strong>{selectedRow.locationName}</strong> {selectedRow.address}, {selectedRow.city} {selectedRow.state} {selectedRow.postalCode} </p>
              <p><strong>POC</strong> some person <strong> P </strong> xxx-xxxx</p>

                <Stack direction="row">
                  <item>
                    <h3>
                      Work Details
                    </h3>
                  </item>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <item>
                    <p>
                      <strong> Timeline </strong>  </p>
                  </item>
                  </Stack>
                <Stack direction="row" spacing={2}>
                  <item>
                    <p>
                      <strong> Requested </strong> {selectedRow.requestDate}   </p>
                  </item>
                  <item>
                    <p>   <strong> Scheduled </strong> {selectedRow.scheduledDate}
                    </p>
                  </item>
                  <item>
                    <p>   <strong>   completed</strong> {selectedRow.completedDate}
                    </p>
                  </item>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <item>
                    <p>
                      <strong>Status</strong> {selectedRow.status}   </p>
                  </item>
                  <item>
                    <p>   <strong>  Work Type</strong> {selectedRow.type}
                    </p>
                  </item>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <item>
                    <p>
                      <strong> Related </strong>  </p>
                  </item>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                  <item>
                    <p>
                      <strong> File 1 </strong> some.link   </p>
                  </item>
                  <item>
                    <p>   <strong> File 2 </strong> some.link
                    </p>
                  </item>
                  <item>
                    <p>   <strong>   file 3</strong> some.link
                    </p>
                  </item>
                </Stack>

              </Container>
 





            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

/*
             <MapContainer center={position} zoom={13} style={{ height: '400px',  width: '400px', marginBottom: '20px' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    {selectedRow.address}
                  </Popup>
                </Marker>
              </MapContainer>
              <h2>Location Details</h2>
              <p><strong>{selectedRow.locationName}</strong> {selectedRow.address}, {selectedRow.city} {selectedRow.state} {selectedRow.postalCode} </p>
              <p><strong>POC</strong> some person <strong> P </strong> xxx-xxxx</p>
              <h2>Work Details</h2>
              <DialogContentText>

                <Grid container spacing={2} columns={24 }>
                  <Grid item xs={6} md={8}>
                    <Item>
                      <p><strong>Type:</strong> {selectedRow.type} </p>
              
                    </Item>
                  </Grid>

                  <Grid item xs={6} md={8}>
                    <Item>
                      <p> <strong> Program </strong> add program</p> 
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={8}>
                    <Item>
                      <a href={selectedRow.link} target="_blank" rel="noopener noreferrer">View Link</a>
                    </Item>
                    
                  </Grid>

                </Grid>
                <p><strong>Request Date:</strong> {selectedRow.requestDate} <strong> Scheduled Date:</strong> {selectedRow.scheduledDate}</p>
               
                

              </DialogContentText>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={6} md={8}>
                  <Item>
                  <TextField
                margin="dense"
                label="Completed Date"
                type="date"
                fullWidth
                variant="outlined"
                value={completedDate}
                onChange={(e) => setCompletedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
                  </Item>
                </Grid>

                <Grid item xs={6} md={8}>
                  <Item>
                  <TextField
                margin="dense"
                label="Owner"
                fullWidth
                variant="outlined"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
                  </Item>
                </Grid>
              </Grid>

              <h2>Related</h2>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={6} md={8}>
                  <Item>
              <TextField margin="dense" label="Upload File"></TextField>
              </Item>
              </Grid>
              <Grid item xs={6} md={8}>
                  <Item>
              <TextField margin="dense" label="messages"></TextField>
              </Item>
              </Grid>
              </Grid>
              */