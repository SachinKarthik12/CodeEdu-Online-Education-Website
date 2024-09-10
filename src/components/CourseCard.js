import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const HoverCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const CourseCard = ({ courseName, price, imageUrl, onEnroll }) => {
  return (
    <HoverCard sx={{ minWidth: 380 , maxWidth:380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={courseName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {courseName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={onEnroll}>
          Enroll Now
        </Button>
      </Box>
    </HoverCard>
  );
};

export default CourseCard;
