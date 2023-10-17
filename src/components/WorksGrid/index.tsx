import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { worksData } from '../../data/works';
import './WorksGrid.css';

const Works = () => { 
  return (
    <Box sx={{ pl: '10%', pr: '10%'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {worksData.map((about,index) => {
          return (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ minHeight: 400, border: 1 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={about.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        <h5>{about.title}</h5>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {about.text}
                    </Typography>
                </CardContent>
                <div className='box'>
                    {about.stacks.map((stack,idx) => {
                        return (
                            idx === 0 ? <p>{stack}</p>  : <p>, {stack}</p>
                        );
                    })}
                </div>
            </Card>
          </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Works;