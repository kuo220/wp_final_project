import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import true_false from '../picture/true_false.jpg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const TFStyles = {
    position: 'relative',
    left: '0.3vw',
};

const EditStyles = {
    position: 'relative',
    left: '40vw',
    top: '-6vh'
};

function AddTFRateCard({ title, TF }) {

  return (
    <Grid item xs={12} md={6}>
        <CardActionArea component="a">
            <Card sx={{ display: 'flex', height: '15vh', backgroundColor: '#F4F3F1'}}>
            <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                {title}
                </Typography>
                <div style = { {height: '0.5vh'} }/>
                <div style = {TFStyles}>
                    {TF === 'T' ? 
                        <CheckCircleOutlineIcon 
                            style = {{
                                color: 'rgb(0, 128, 55)',
                                fontSize: 60,
                            }}
                        /> 
                        : 
                        <CancelOutlinedIcon
                            style = {{
                                color: 'rgb(255, 0, 0)',
                                fontSize: 60,
                            }}
                        /> 
                    }
                </div>
                <div style = {EditStyles}>
                    <Button size='large'>Edit</Button>
                </div>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={true_false}
                alt = 'Image Text'
            />
            </Card>
        </CardActionArea>
    </Grid>
  );
}


export default AddTFRateCard;