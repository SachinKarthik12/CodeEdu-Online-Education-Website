import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Reactimg from '../assets/Course app-pana.png';

function SubscriptionBanner() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5638F0', // The background color similar to your image
        padding: '20px',
        borderRadius: '10px',
        margin: '20px',
        position: 'relative',
      }}
    >
      {/* Image Section */}
      <Box sx={{ display: 'flex', alignItems: 'center' ,minWidth: 450 ,justifyContent:'center'}}>
        <Box
          component="img"
          src={Reactimg} // Replace with your local image path
          alt="Student"
          sx={{ height: '200px' }}
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ flex: 1, marginLeft: '30px' }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}
        >
          Want To Stay <span style={{ color: '#FFD700' }}>Informed</span> About New{' '}
          <span style={{ color: '#FFD700' }}>Courses & Study?</span>
        </Typography>

        {/* Email Subscription */}
        <Box sx={{ display: 'flex', alignItems: 'center',borderRadius: '20px' }}>
          <TextField
            variant="outlined"
            placeholder="Type Your E-Mail"
            sx={{
              backgroundColor: '#3C1AA0',
              input: { color: '#fff' },
            //   borderRadius: '20px',
              width: '300px',
              mr: 2,
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFCC00',
              borderRadius: '30px',
              padding: '10px 20px',
              fontWeight: 'bold',
              color: '#000',
              boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SubscriptionBanner;
