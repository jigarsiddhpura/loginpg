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

  // const imgStyle1 = {
  //   backgroundImage:
  //     "url('https://cdn.pixabay.com/photo/2020/11/26/15/28/woman-5779323_960_720.jpg')",
  //   height: "100vh",
  //   // width: "100%",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   opacity: "0.9",
  //   // opacity: opacity.to(o => 1 - o), transform
  // };

  // const imgStyle2 = {
  //   backgroundImage:
  //     "url('https://cdn.pixabay.com/photo/2018/11/29/20/01/nature-3846403_960_720.jpg')",
  //   height: "100vh",
  //   // width: "100%",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   opacity: "0.9",
  //   // opacity,transform,rotateX: '180deg',
  // };

  const [flipped, set] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className="trailsText">
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

  const [open, setOpen] = useState(true);

  const SignUpComponent = () => {
    return (
      <Grid container spacing={0}>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
              <a
                href="#"
                style={{ textDecoration: "none", color: color }}
                onClick={() => {
                  // set((state) => !state);
                  // setOpen((state) => !state);
                }}
              >
                Log in
              </a>{" "}
            </span>
            <div style={{ display: "flex" }}>
              <TextField
                id=""
                label="First Name"
                style={{ margin: "1rem 0" }}
              />
              <TextField id="" label="Last Name" style={{ margin: "1rem " }} />
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
              <ChangeButton>Change method</ChangeButton>
              <SignupButton>Create account</SignupButton>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} className="img2 c"></Grid>

        {/* Below code is for IMG transition but not working  WHEN COMBINED with other */}

        {/* <Grid item xs={6} className="img2 c">
          <a.div
            className="img1"
            style={{ opacity: opacity.to((o) => 1 - o), transform }}
          />
          <a.div
            className="img2"
            style={{
              opacity,
              transform,
              rotateX: "180deg",
            }}
          />
        </Grid> */}
      </Grid>
    );
  };

  const LoginComponent = () => {
    return (
      <Grid container spacing={0}>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
              <a
                href=""
                style={{ textDecoration: "none", color: color }}
                onClick={() => {
                  // state change for both transitions below on click but not working
                  // set((state) => !state);
                  // setOpen((state) => !state);
                }}
              >
                Sign Up
              </a>
            </span>

            <div style={{ display: "flex" }}>
              <ChangeButton>Change method</ChangeButton>
              <SignupButton>Log in</SignupButton>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} className="img1 c"></Grid>
      </Grid>
    );
  };

  return (
    <>
      <SignUpComponent />
      <LoginComponent />

      {/* Below code is for FORM transition but not working  */}

      {/* <div>
        <Trail open={open}>
          <SignUpComponent />
        </Trail>
        <Trail open={!open}>
          <LoginComponent />
        </Trail>
      </div> */}
    </>
  );
};

export default Login;
