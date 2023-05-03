import React from 'react';
import {useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as yup from 'yup'

function SignUp() {

  const navigate = useNavigate()

  const formSchema = yup.object().shape({
    f_name: yup.string().required('Please enter a first name'),
    l_name: yup.string().required('Please enter a last name'),
    email: yup.string().email('Invalid email').required('required'),
    password: yup.string().required('required'),
    password_confirmation: yup.string().required('required'),
  })

  const formik = useFormik({
    initialValues: {
    email: "",
    password: "",
    password_confirmation: "",
    f_name: "",
    l_name: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values)
        fetch("/signup", {
            method: "POST",
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify(values),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => console.log(user));
            }
        });
        navigate('/')
    },
});

  return (
    <>
        <Container component="main"  maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component='form' onSubmit={formik.handleSubmit} noValidate sx={{mt: 3, mb:8, }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="f_name"
                  required
                  fullWidth
                  type='text'
                  id="f_name"
                  label="First Name"
                  value={formik.values.f_name}
                  onChange={formik.handleChange}
                /><Typography sx={{color: "red"}}>{formik.errors.f_name}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="l_name"
                  label="Last Name"
                  name="l_name"
                  value={formik.values.l_name}
                  onChange={formik.handleChange}
                  autoComplete="family-name"
                /><Typography sx={{color: "red"}}>{formik.errors.l_name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email"
                /><Typography sx={{color: "red"}}>{formik.errors.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  autoComplete="new-password"
                /><Typography sx={{color: "red"}}>{formik.errors.password}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Password Confirmation"
                  type="password"
                  value={formik.values.password_confirmation}
                  onChange={formik.handleChange}
                  id="password_confirmation"
                /><Typography sx={{color: "red"}}>{formik.errors.password_confirmation}</Typography>
              </Grid>  
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-left" sx={{mb: 8}}>
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SignUp
