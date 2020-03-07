import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderHideScroll from './components/headerHideScroll';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function App() {
  return (
    <div className='mainContainer'>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters={true} style={{ backgroundColor: '#cfe8fc' }}>
        <HeaderHideScroll />
        <Toolbar />
        <Box my={2} mx={4}>
          <Grid container spacing={1} direction="column" justify="center" alignItems="stretch">
              <Paper elevation={3}>xs=12</Paper>
              <Paper elevation={3}>xs=12</Paper>
              <Paper elevation={3}>xs=12</Paper>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;


// style={{ backgroundColor: '#cfe8fc', height: '100vh' }}