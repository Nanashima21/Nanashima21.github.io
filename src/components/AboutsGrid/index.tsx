import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { aboutsData } from '../../data/abouts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Abouts = () => {
  return (
    <Box sx={{ pl: '10%', pr: '10%'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {aboutsData.map((about,index) => {
          return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <h1>{about.title}</h1>
              <h2>{about.text}</h2></Item>
          </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Abouts;