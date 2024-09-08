import React from 'react';
import { List, ListItem, ListItemText, Slide, styled } from '@mui/material';

// Styled components
const StyledList = styled(List)`
  max-height: 300px;
  overflow-y: auto;
  margin-top: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

interface HabitListProps {
  habits: string[];
}

const HabitList: React.FC<HabitListProps> = ({ habits }) => {
  return (
    <StyledList>
      {habits.map((habit, index) => (
        <Slide key={index} direction="up" in={true} mountOnEnter unmountOnExit>
          <ListItem>
            <ListItemText primary={habit} />
          </ListItem>
        </Slide>
      ))}
    </StyledList>
  );
};

export default HabitList;
