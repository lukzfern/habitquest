import React, { useState } from 'react';
import { Container, Typography, Paper, styled } from '@mui/material';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

// Styled components
const StyledPaper = styled(Paper)`
  padding: 2em;
  width: 100%;
  text-align: center;
  margin-bottom: 2em;
`;

const Dashboard: React.FC = () => {
  const [habits, setHabits] = useState<string[]>([]);

  const addHabit = (habit: string) => {
    setHabits((prevHabits) => [...prevHabits, habit]);
  };

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
      <StyledPaper elevation={3}>
        <Typography variant="h4" color="primary" gutterBottom>
          Your Habits
        </Typography>
        <HabitForm addHabit={addHabit} />
        <HabitList habits={habits} />
      </StyledPaper>
    </Container>
  );
};

export default Dashboard;
