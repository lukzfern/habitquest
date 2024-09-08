import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      style={{
        padding: '2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={3}
        style={{ padding: '2em', width: '100%', textAlign: 'center' }}
      >
        <Typography variant="h4" color="primary" gutterBottom>
          Your Profile
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          style={{ marginBottom: '2em' }}
        >
          Manage your personal information and preferences here.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth>
              Edit Profile
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" color="secondary" fullWidth>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
