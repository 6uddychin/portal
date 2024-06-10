import React, { useState, useEffect } from 'react';
import WorkOrders from './workOrder';
import MessagesTable from '../MessagesTable';
import Navbar from './Navbar'; 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function Home() {
    const [workData, setWorkData] = useState([]);
    const [messagesData, setMessagesData] = useState([]);

    useEffect(() => {
        fetch('/data/vendor_portal_data.json')
          .then(response => response.json())
          .then(data => {
            setWorkData(data);
          });
    
        fetch('/data/messages.json')
          .then(response => response.json())
          .then(data => {
            setMessagesData(data);
          });
      }, []);


return (

    <Box sx={{ width: '100%' }}>
    <Paper sx={{ width: '100%'}}>
  <Container width="100%">
  <Typography variant="h4" component="h2" gutterBottom>
Messages   </Typography>
<MessagesTable sx={{width: '100%'}} data={messagesData} />

<WorkOrders sx={{ width: '100%' }} data={workData} />

  </Container>
  </Paper>
  </Box>
);
}
export default Home;