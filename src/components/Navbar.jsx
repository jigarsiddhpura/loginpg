import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Container, Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";

export const Navbar = () => {
  // const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    // navigate('/login');
    // localStorage.removeItem("secret_token");
    console.log("Logout successfully");
    // window.location.reload();
    // window.location.reload();
  };

  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const response = { responsive: width < 1080 };
  const resp = response.responsive;
  //

  const LoginButton = styled(Button)({
    position: "absolute",
    right: resp ? "10vw" : "10vw",
    top: "1.5vh",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    p: "7px",
    color: "#9E4770",
    fontSize: "1.1rem",
    "&:hover": { backgroundColor: "#9E4770", color: "white" },
  });

  const SignupButton = styled(Button)({
    position: "absolute",
    right: resp ? "30vw" : "25vw",
    top: "1.5vh",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    p: "7px",
    color: "#9E4770",
    fontSize: "1.1rem",
    "&:hover": { backgroundColor: "#9E4770", color: "white" },
  });

  return (
    <Paper
    elevation={3}
    style={{ width: "100%", position: "relative", borderRadius:'8rem'}}
  >
    <AppBar position="static">
      <Toolbar
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
        }}
      >
        <Typography variant="h6" style={{ color: "black" }}>
          Home Page
        </Typography>
        <Box flexGrow={1} />
        {/* <Link to="/register/client"> */}
        <SignupButton>Organize Hackathon</SignupButton>
        {/* </Link> */}
        {/* <Link to="/register/worker"> */}
        <LoginButton>Go to Dashboard</LoginButton>
        {/* </Link> */}
        <AccountCircleOutlinedIcon
          style={{ color: "#9E4770", fontSize: "2rem" }}
        />
      </Toolbar>
    </AppBar>
  </Paper>
  )
};