import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Input from "@mui/material/Input";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ButtonGroup from "@mui/material/ButtonGroup";
import { blue } from "@mui/material/colors";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import {
  useSpring,
  a,
  useTransition,
  animated,
  useTrail,
} from "@react-spring/web";
import "./login.css";


const theme = createTheme({
  palette: {
    naigara: {
      main: "#569f5d",
    },
  },
});

const Login = () => {
  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  const color = blue;

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsiveness = { responsive: width < 1000 };
  const resp = responsiveness.responsive;
  //

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [login, setLogin] = useState(false);
  const SignupButton = styled(Button)({
    backgroundColor: "blue",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const ChangeButton = styled(Button)({
    backgroundColor: "gray",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const [open, setOpen] = useState(true);

  const [registrationStatus, setRegistrationStatus] = useState(true);
  const [registrationFStatus, setFRegistrationStatus] = useState(true);

  const changeRegStat = () => {
    setTimeout(() => {
      setRegistrationStatus(!registrationStatus);
    }, 1110);
  };
  const changeFRegStat = () => {
    setFRegistrationStatus(!registrationFStatus);
    changeRegStat();
  };

  const flipDur = 1000;

  const AnimatedGrid = animated(Grid);
//   login img
  const trails = useTrail(1, {
    // rotateX: registrationFStatus ? 90 : 180,
    opacity : registrationFStatus ? 0 : 1,
    from: {opacity: 0 , transform: registrationFStatus ?'translateX(50vw)' : 'translateX(100vw)'},
    to: { opacity:1, transform: registrationFStatus ? 'translateX(0vw)' :  "translateX(0vw)" },
    // from: { opacity: 0 },
    // enter: { opacity: 1 }
    // leave: { opacity: 0 },
    config: { duration: registrationFStatus ? flipDur + 1000: flipDur + 2000 , delay:800},
    // config:{duration:flipDur}
  });
// signup img
  const trails2 = useTrail(1, {
    // rotateX: registrationFStatus ? 0 : 90,
    opacity : registrationFStatus ? 1 : 0,
    from: {opacity: 0 , transform: registrationFStatus ? '' : 'translateX(0vw)'},
    to: { opacity:1, transform: registrationFStatus ? '' : 'translateX(50vw)'},
    // from: { opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: { duration: registrationFStatus ? flipDur + 1000 : flipDur , delay:800},
    // config:{duration:flipDur}
  });
  const formTrails = useTrail(1, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // rotateX: registrationFStatus ? 90 : 180,
    opacity : registrationFStatus ? 0 : 1,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: registrationFStatus ? flipDur : flipDur + 2000 },
    // config:{duration:flipDur}
  });
  const formTrails2 = useTrail(1, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // rotateX: registrationFStatus ? 0 : 90,
    opacity : registrationFStatus ? 1 : 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: registrationFStatus ? flipDur + 2000 : flipDur },
    // config:{duration:flipDur}
  });

  const SignUpComponent = () => {
    return (
      <Grid container spacing={0}>
                {trails2.map((props) => (
          <AnimatedGrid
            item
            xs={6}
            style={props}
            className="img2 c"
          ></AnimatedGrid>
        ))}
        {formTrails2.map((props) => (
          <AnimatedGrid
            item
            xs={6}
            style={props}
            // className="formGrid"
          >
            <Box
              sx={{
                maxWidth: 500,
                width: 500,
                height: 500,
                //   border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "1rem",
              }}
            >
              <p style={{ color: "gray" }}>START FOR FREE</p>
              <h1 style={{ margin: "4px 0" }}>Create new account</h1>
              <span style={{ color: "gray" }}>
                Already A Member?{" "}
                <a href="#" style={{ textDecoration: "none", color: color }}>
                  Log in
                </a>{" "}
              </span>
              <div style={{ display: "flex" }}>
                <TextField
                  id=""
                  label="First Name"
                  style={{ margin: "1rem 0" }}
                />
                <TextField
                  id=""
                  label="Last Name"
                  style={{ margin: "1rem " }}
                />
              </div>
              <FormControl sx={{ width: "50ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <FormControl
                style={{ margin: "1rem 0", width: "50ch" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div style={{ display: "flex" }}>
                <ChangeButton onClick={changeFRegStat}>
                  Change method
                </ChangeButton>
                <SignupButton>Create account</SignupButton>
              </div>
            </Box>
          </AnimatedGrid>
        ))}
      </Grid>
    );
  };

  const LoginComponent = () => {
    return (
      <Grid container spacing={0}>
        {formTrails.map((props) => (
          <AnimatedGrid item xs={6} style={props}>
            <Box
              sx={{
                maxWidth: 500,
                width: 500,
                height: 500,
                //   border: "2px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "1rem",
              }}
            >
              <p style={{ color: "gray" }}>START FOR FREE</p>
              <h1 style={{ margin: "4px 0" }}>Welcome back!</h1>

              <FormControl
                style={{ margin: "1rem 0", width: "50ch" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ width: "50ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <span style={{ color: "gray", margin: "1rem 0" }}>
                New here?
                <a href="" style={{ textDecoration: "none", color: color }}>
                  Sign Up
                </a>
              </span>

              <div style={{ display: "flex" }}>
                <ChangeButton onClick={changeFRegStat}>
                  Change method
                </ChangeButton>
                <SignupButton>Log in</SignupButton>
              </div>
            </Box>
          </AnimatedGrid>
        ))}
        {trails.map((props) => (
          <AnimatedGrid
            item
            xs={6}
            style={props}
            className="img1 c"
          ></AnimatedGrid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      {registrationStatus && <SignUpComponent />}
      {!registrationStatus && <LoginComponent />}
    </>
  );
};

export default Login;
