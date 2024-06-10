import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const KnowledgeArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/knowledge.json')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Knowledge Center
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.postID}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  by {article.author}
                </Typography>
                <Typography variant="body2" component="p">
                  {article.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={article.fileLink} target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KnowledgeArticles;