import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import Header from '../../components/Header/Header';
import './Home.css';

const Home = (props) => {
    return (
    <Box>
        <Header />
    </Box>
    );
}
 
export default Home;