import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {

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
            <Typography variant="subtitle1" color="primary">
              Edit
            </Typography>
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

// FeaturedPost.propTypes = {
//   post: PropTypes.shape({
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageLabel: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default FeaturedPost;