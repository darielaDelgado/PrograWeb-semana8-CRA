import React from 'react';
import PropTypes from 'prop-types';
import styles from './home.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {  

  const [data, setData] = React.useState("Un texto");
  const [formValues, setFormValues] = React.useState("Un texto");
  
  const onClickBtn = () => {
    console.log("click");
};

const onClickBtn = () => {
  console.log("click");
};
  return (
    <div className={styles.Home}>
      
      <h1>{data}</h1>

      <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br></br>

    

    <TextField id="filled-basic" label="Filled" variant="filled" /><br></br>
    
    <TextField id="standard-basic" label="Standard" variant="standard" /><br></br>
    

    <Button onClick={onClickBtn} variant="contained">Enviar</Button>


  </div>

  )
  
  };

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
