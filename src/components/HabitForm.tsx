import React, { useState } from 'react';
import { TextField, Button, styled } from '@mui/material';

// Styled components
const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled(Button)`
  margin-top: 1em;
`;

interface HabitFormProps {
  addHabit: (habit: string) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ addHabit }) => {
  const [habit, setHabit] = useState('');

  const handleAddHabit = () => {
    if (habit.trim()) {
      addHabit(habit);
      setHabit('');
    }
  };

  return (
    <FormContainer>
      <TextField
        label="New Habit"
        variant="outlined"
        fullWidth
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />
      <AddButton variant="contained" color="primary" onClick={handleAddHabit}>
        Add Habit
      </AddButton>
    </FormContainer>
  );
};

export default HabitForm;
