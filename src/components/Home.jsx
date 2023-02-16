import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Container, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import { CenterFocusStrong } from "@mui/icons-material";
import illustration from "../images/illustration.svg";
import { height } from "@mui/system";
import  {Navbar}  from "./Navbar";

const Home = () => {
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

  const searchBarStyle = {
    borderRadius: "10rem",
    color: "#9E4770",
    flexShrink: "6",
    display: "inline",
    width: resp ? "40vw" : "35vw",
    border: "2px solid #9E4770",
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.7),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#6B0EF8",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: "1.7rem",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const searchStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "-10rem",
    left:'2rem',
  };


  const AccountIcon = styled(AccountCircleOutlinedIcon)({
    color: "#2DBD79",
  });

  const imgStyle = {
    backgroundImage:
      " linear-gradient(330deg, rgba(225, 225, 225, 0.05) 0%, rgba(225, 225, 225, 0.05) 33.333%,rgba(114, 114, 114, 0.05) 33.333%, rgba(114, 114, 114, 0.05) 66.666%,rgba(52, 52, 52, 0.05) 66.666%, rgba(52, 52, 52, 0.05) 99.999%),linear-gradient(66deg, rgba(181, 181, 181, 0.05) 0%, rgba(181, 181, 181, 0.05) 33.333%,rgba(27, 27, 27, 0.05) 33.333%, rgba(27, 27, 27, 0.05) 66.666%,rgba(251, 251, 251, 0.05) 66.666%, rgba(251, 251, 251, 0.05) 99.999%),linear-gradient(225deg, rgba(98, 98, 98, 0.05) 0%, rgba(98, 98, 98, 0.05) 33.333%,rgba(222, 222, 222, 0.05) 33.333%, rgba(222, 222, 222, 0.05) 66.666%,rgba(228, 228, 228, 0.05) 66.666%, rgba(228, 228, 228, 0.05) 99.999%),linear-gradient(90deg, rgb(28, 20, 63),rgb(40, 160, 253))",
    // backgroundImage:"url('https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062__340.jpg')",  
    height: "90vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.9",
  };

  const categoryImgStyle = {
    width: "8rem",
    height: "7.5rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
  };

  //   const CategoryComponent = () => (
  //     <div
  //       style={{ width: "60%", position: "relative", left: "20%", top: "30%"}}
  //     >
  //       <Grid container spacing={0}>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Cleaning and Pest Control</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Appliance Repair</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Home Painting</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Hair cut</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} style={{visibility:'hidden'}}>
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Special Service for women</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div style={{position:'relative', left:'0%'}}>
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Special Service for women</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={6} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Plumbers and Carpenters</h3>
  //       </Paper>
  //       </Grid>

  //       </Grid>
  //     </div>
  //   );

  return (
    <Paper style={imgStyle}>
      <Navbar/>
      <div
        style={{
          width: "25rem",
          height: "20rem",
          backgroundImage: `url(${illustration})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          top: "5rem",
          left: "5rem",
        //   opacity: "0.8",
        }}
      ></div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "-10rem",
          left:'2rem',
          color: "white",
        }}
      >
        Come for the code, stay for the community.
      </h1>
      <Toolbar style={searchStyle}>
        <Search style={searchBarStyle}>
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#9E4770" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for Hackathons"
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "20rem"  }}
          />
        </Search>
      </Toolbar>
      {/* <h1
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "11rem",
          color: "white ",
          textShadow:'2px 2px 2px #333'
        }}
      >
       Categories
      </h1> */}
      {/* <CategoryComponent /> */}
    </Paper>
  );
};

export default Home;
