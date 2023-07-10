import React from "react";
import "./StoryCards.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";
import Observatory from "../Images/observatory.png";
// import Aquarium from "../Images/Aquarium.png";
import Palm from "../Images/Palm.png";
import DubaiFrame from "../Images/DubaiFrame.png";
import LeftArrow from "../Images/arrowleft.png";
import RightArrow from "../Images/arrowright.png";

const StoryCards = () => {
  const cardInfo = [
    {
      image: Observatory,
      title: "Museum Of The Future",
      savings: "AED 170",
      offer: "Save Up To 15%",
      ratings: "4.9",
      price: "70.00",
    },
    {
      image: Palm,
      title: "Dubai Aquarium",
      savings: "AED 110",
      offer: "Save Up To 10%",
      ratings: "4.9",
      price: "70.00",
    },
    {
      image: DubaiFrame,
      title: "Hab Hot Air Balloon",
      ratings: "4.5",
      price: "90.00",
    },
  ];

  const renderCard = (card, index, array) => {
    const isLastCard = index === array.length - 1;
  
    return (
      <Card
        sx={{
          width: 235,
          height: 400, // Increase the height of the card to accommodate larger images
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          position: "relative",
        }}
        key={index}
      >
        <div className="card-content">
          <div className="card-text">Text on top of the card</div>
          <CardMedia
            component="img"
            height="300" // Increase the height of the image to make it fully visible
            src={card.image}
            alt="garden glow"
          />
        </div>
        <CardActionArea>
          {card.offer && (
            <div style={{ position: "relative" }}>
              <Typography
                variant="button"
                sx={{
                  backgroundColor: "#13c24b",
                  display: "inline-block",
                  padding: "1px 1px",
                  borderRadius: "5px",
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  color: "white",
                }}
              ></Typography>
            </div>
          )}
        </CardActionArea>
        {index === 0 && (
          <div className="half-arrow left-arrow">
            <img
              src={LeftArrow}
              alt=""
              className="carousel-arrow-img left-arrow-img"
            />
          </div>
        )}
        {isLastCard && (
          <div className="half-arrow right-arrow">
            <img src={RightArrow} alt="" className="carousel-arrow-img" />
          </div>
        )}
      </Card>
    );
  };
  
  return (
    <>
      <div className="rating-cards-container">
        <div className="cards" style={{ marginTop: "25px" }}>
          <div className="half-arrow left-arrow">
            <img
              src={LeftArrow}
              alt=""
              className="carousel-arrow-img left-arrow-img"
            />
          </div>
          <div className="story-left">
            <h1>Best Selling Tourist Places In Dubai</h1>
            <hr style={{ borderColor: "#E5E5E5", margin: "10px 0" }} />
            <h4>Discover Your Ideal Experience</h4>
          </div>
          <div className="half-arrow right-arrow">
            <img src={RightArrow} alt="" className="carousel-arrow-img" />
          </div>
          <div className="card-container">
            {cardInfo.map(renderCard)}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCards;
