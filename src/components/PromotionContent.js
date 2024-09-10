import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Downloadimg from '../assets/Download-rafiki.png';
// Removed QrCode import

const AppPromotion = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundColor: '#f0f4f8',
          padding: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Section - Text and Buttons */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Unrestricted Time <span style={{ textDecoration: 'underline' }}>Course</span>
          </Typography>
          <Typography variant="h4" gutterBottom>
            Study Anytime.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Quis risus sed vulputate odio ut enim, Pulvinar etiam non quam lacus, Ac tortor vitae purus faucibus ornare.
          </Typography>
          {/* Buttons for App Download */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<AndroidIcon />}>
                Get it on Google Play
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<AppleIcon />}>
                Download on the App Store
              </Button>
            </Grid>
          </Grid>
          {/* Stats */}
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item>
              <CheckCircleIcon color="success" /> 2m Students Enrolled
            </Grid>
            <Grid item>
              <CheckCircleIcon color="success" /> 99% Satisfaction
            </Grid>
            <Grid item>
              <CheckCircleIcon color="success" /> 5k+ Trending Courses
            </Grid>
          </Grid>
        </Box>

        {/* Right Section - Image */}
        <Box sx={{ mt: { xs: 4, md: 0 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              boxShadow: 2,
              mb: 2,
              overflow: 'hidden', // Ensure the image fits within the box
            }}
          >
            <img
              src={Downloadimg} 
              alt={Downloadimg}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
          </Box>
          <Button variant="contained" color="success">
            DOWNLOAD
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AppPromotion;
