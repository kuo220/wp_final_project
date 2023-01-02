import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Coffee_pour from '../picture/coffee_pour.jpg'

function post(props) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {props.description}
            </Typography>
            <Button variant="contained"> Add </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={props.image}
            alt={props.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

function AddCard(){
    return(
        post({ title: 'Add information', description: '', image: Coffee_pour, imageLabel: 'Image Text'})
    )
}

export default AddCard;