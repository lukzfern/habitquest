import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '2em' }}>
      <Typography variant="h3" color="primary">
        Welcome to HabitQuest
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Start building better habits with gamification!
      </Typography>
      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
        color="primary"
        style={{ marginTop: '1em' }}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
