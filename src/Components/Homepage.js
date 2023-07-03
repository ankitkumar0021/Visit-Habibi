import React from "react";
import "./Homepage.css";
import Image from "../Images/main.jpg";
import Logo from "../Images/logo.png";
import Flag from "../Images/flag.png";
import Headphone from "../Images/headphones.png";
import Chartbar from "../Images/chart-bar.png";
import Vector from "../Images/Vector.png";
import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RaitngCards from "./RaitngCards";
import StoryCards from "./StoryCards";
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Homepage = () => {
  return (
    <>
      <div className="h-auto">
        <img
          src={Image}
          alt="loading"
          className="back-image w-full fixed top-0"
        />
        <AppBar position="fixed" color="transparent">
          <Toolbar>
            <img src={Logo} alt="visit habibi" className="w-64 h-auto" />

            <div className="flex items-center ml-auto">
              <div className="flex items-center">
                <img src={Flag} alt="lang" className="h-5 w-5 rounded-full" />
                <Typography variant="body2" className="text-white ml-1">
                  English/AED
                </Typography>
              </div>
              <IconButton className="text-gray-500">
                <HelpIcon />
              </IconButton>
              <Typography variant="body2" className="text-white ml-1">
                Help & Support
              </Typography>
              <IconButton className="text-gray-500">
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Typography variant="body2" className="text-white ml-1">
                My Bookings
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className="text-white ml-1 font-semibold hover:text-white"
              >
                Get Started
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <div className="search-bar block justify-center items-center text-center">
          <h1 className="text-white text-4xl md:text-7xl p-2 mt-[-100px] mx-4 md:mx-10">
            Welcome to Dubai
          </h1>
          <h2 className="text-white text-3xl md:text-5xl mx-4 md:mx-[-30px] pb-2">
            Where Reality Exceeds Imagination
          </h2>
          <div className="relative mx-4 md:mx-10 p-4">
            <input
              type="search"
              className="w-full h-12 rounded-lg border border-neutral-300 bg-white pl-12 pr-4 py-2 text-lg leading-7 text-black outline-none focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
            <SearchIcon className="absolute left-9 top-9 text-black" />
          </div>
        </div>

        <div className="fixed bottom-4 md:bottom-14 right-14">
          <WhatsAppIcon
            className="text-white bg-green-500 rounded-full"
            style={{ fontSize: "3rem" }}
          />
        </div>

        <div className="content-bottom flex justify-evenly items-center">
          <div className="bottom-content w-1/3 flex flex-col items-center">
            <img src={Headphone} alt="icon" />
            <h3 className="mt-4">Travel You Can Trust</h3>
            <p className="mt-2 text-center">
              Prioritizing trust, reliability, reputable partners, quality
              standards, and customer satisfaction for utmost satisfaction.
            </p>
          </div>
          <div className="bottom-content w-1/3 flex flex-col items-center">
            <img src={Chartbar} alt="icon" />
            <h3 className="mt-4">Travel You Can Trust</h3>
            <p className="mt-2 text-center">
              Prioritizing trust, reliability, reputable partners, quality
              standards, and customer satisfaction for utmost satisfaction.
            </p>
          </div>
          <div className="bottom-content w-1/3 flex flex-col items-center">
            <img src={Vector} alt="icon" />
            <h3 className="mt-4">Travel You Can Trust</h3>
            <p className="mt-2 text-center">
              Prioritizing trust, reliability, reputable partners, quality
              standards, and customer satisfaction for utmost satisfaction.
            </p>
          </div>
        </div>
        <div className="rating-cards mt-80">
        <RaitngCards />
        <StoryCards />
        <div>
          <h1>Visit Habibi Top Recommendation’s</h1>
        </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
