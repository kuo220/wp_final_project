import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({name, information}) {
  return (
    <Card sx={{ maxWidth: 1500, border: 2, borderColor: 'purple'}}>
        <CardMedia
            height="140"
        />
        <CardContent>
            <Typography gutterBottom variant="h4" component="div">
                {name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                {`${"   " + information}`}
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
                size="large" 
                style={{
                    position: "relative",
                    top: "80%",
                    left: "95%",
                }}>
                Edit
            </Button>
        </CardActions>
    </Card>
  );
}
