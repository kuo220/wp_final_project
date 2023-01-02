import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Star from '../picture/star2.jpg'


function RateCard({ title, score }) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a">
        <Card sx={{ display: 'flex', height: '15vh'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <div style = { {height: '2vh'} }/>
            <Rating name="half-rating-read" defaultValue={score} precision={0.25} readOnly size = "large"/>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={Star}
            alt = 'Image Text'
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}


export default RateCard;