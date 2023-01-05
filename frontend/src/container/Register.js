import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Coffee2 from '../picture/coffee2.jpg'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import { message } from "antd";
import {CREATE_USER_MUTATION} from '../graphql/index';
import * as CryptoJS from 'crypto-js';
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const theme = createTheme();
const secretKey = "IHVYRTyknIBUYTNTCYVUBJnnJhgfjnBHRYTusc";

export default function SignIn() {

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const bodyRef = useRef(null);

    const [createuser] = useMutation(CREATE_USER_MUTATION);

    const displayMessage = (status, msg) => {
		const content = {
			content: msg,
			duration: 1.5,
		};
		if(status === 'error') message.error(content);
		else message.success(content)
    }

    const navigate = useNavigate();

    const navigateToLogin = () => {
        /*if(account !== '' && password !== '' && password === passwordConfirm){
			displayMessage('success', 'Signed up successfully')
			navigate('/login');
		}*/
        if(account === ''){
            displayMessage('error', 'Please enter account');
        }
        else if(password === ''){
            displayMessage('error', 'Please enter password');
        }
        else if(passwordConfirm === ''){
          displayMessage('error', 'Please confirm password');
        }
        else if(password !== passwordConfirm){
          displayMessage('error', 'confirm failed')
        }
        else {
            createuser({
                variables: {
                    name: account,
                    account: account,
                    password: CryptoJS.AES.encrypt(password,secretKey).toString(),
                },
            });
            displayMessage('success', 'Signed up successfully')
			navigate('/login');
        }
    }

    return (
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs = {false}
                sm = {4}
                md = {7}
                sx = {{
                        backgroundImage: `url(${Coffee2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                }
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx = {{backgroundColor: '#EDD6B1'}}>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin = "normal"
                    required
                    fullWidth
                    label = "Account"
                    name = "account"
                    value = {account}
                    onChange = {(e) => setAccount(e.target.value)}
                    onKeyDown = {
                        (e) => {
                            if (e.key === 'Enter') {
                                bodyRef.current.focus()
                            }
					    }
                    }                  
                />
                <TextField
                    margin = "normal"
                    required
                    fullWidth
                    name = "password"
                    label = "Password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    ref = {bodyRef}
                    type="password"
                />
                <TextField
                    margin = "normal"
                    required
                    fullWidth
                    name = "password confirm"
                    label = "Password confirm"
                    value = {passwordConfirm}
                    onChange = {(e) => setPasswordConfirm(e.target.value)}
                    ref = {bodyRef}
                    type="password"
                    onSubmit = {navigateToLogin}
                />
                <Button
                    fullWidth
                    variant = "contained"
                    sx = {{ mt: 3, mb: 2, backgroundColor: '#68532F'}}
                    onClick = {navigateToLogin}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="/" variant="body3">
                        Back to home
                    </Link>
                    </Grid>
                    <Grid item>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}