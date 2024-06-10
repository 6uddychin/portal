import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import EnhancedTable from '../DataTable';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const WorkOrders = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/vendor_portal_data.json')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
      });
    }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%'}}>
    <Container width="100%">
      <Typography variant="h4" component="h2" gutterBottom>
Work Orders      </Typography>
<EnhancedTable sx={{ width: '100%' }} data={articles} />

    </Container>
    </Paper>
    </Box>
  );

}

export default WorkOrders;