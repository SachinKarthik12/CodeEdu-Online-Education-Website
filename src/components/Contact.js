import React from 'react';
import { Box, Typography, Grid, Link, Chip } from '@mui/material';
import { Instagram, Twitter, GitHub, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', p: 5, mt: 5 }}>
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sm={3}>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" fontWeight="bold">
              CodeEdu
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" mt={2}>
            Morbi tempus iaculis urna id volutpat lacus laoreet. Leo a diam sollicitudin tempor id eu nisl nunc.
          </Typography>
          <Box display="flex" mt={2}>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <Instagram sx={{ color: '#F4A261' }} />
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <Twitter sx={{ color: '#F4A261' }} />
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <GitHub sx={{ color: '#F4A261' }} />
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <LinkedIn sx={{ color: '#F4A261' }} />
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            Resources
          </Typography>
          <Box mt={2}>
            <Link href="#" color="textSecondary" display="block" mb={1}>Articles</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Challenges</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Projects</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Workspace</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>
              Videos <Chip label="New" size="small" color="warning" sx={{ ml: 1 }} />
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            Plans
          </Typography>
          <Box mt={2}>
            <Link href="#" color="textSecondary" display="block" mb={1}>For Teams</Link>
            <Chip label="Best Seller" size="small" color="secondary" sx={{ mb: 1 }} />
            <Link href="#" color="textSecondary" display="block" mb={1}>For Students</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>For Individuals</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Discounts</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            Support
          </Typography>
          <Box mt={2}>
            <Link href="#" color="textSecondary" display="block" mb={1}>24 X 7 Call</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Report</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Help Center</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Conditions</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Forum</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            Subjects
          </Typography>
          <Box mt={2}>
            <Link href="#" color="textSecondary" display="block" mb={1}>IT</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Machine Learning</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>
              Web Design <Chip label="Popular" size="small" color="primary" sx={{ ml: 1 }} />
            </Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Mobile Development</Link>
            <Link href="#" color="textSecondary" display="block" mb={1}>Web Development</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;