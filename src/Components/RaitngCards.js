import * as React from "react";
import "./RatingCards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import GardenGlow from "../Images/GardenGlow.png";
import Museum from "../Images/Museum.png";
import Aquarium from "../Images/Aquarium.png";
import Ballon from "../Images/Ballon.png";
import LeftArrow from "../Images/arrowleft.png";
import RightArrow from "../Images/arrowright.png";

const RatingCards = () => {
  const cardInfo = [
    {
      image: Museum,
      title: "Museum Of The Future",
      savings: "AED 170",
      offer: "Save Up To 15%",
      ratings: "4.9",
      price: "70.00",
    },
    {
      image: GardenGlow,
      title: "Dubai Garden Glow",
      ratings: "4.5",
      price: "60.00",
    },
    {
      image: Aquarium,
      title: "Dubai Aquarium",
      savings: "AED 110",
      offer: "Save Up To 10%",
      ratings: "4.9",
      price: "70.00",
    },
    {
      image: Ballon,
      title: "Hab Hot Air Balloon",
      ratings: "4.5",
      price: "90.00",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card
        sx={{
          width: 280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          position: "relative",
        }}
        key={index}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={card.image}
            alt="garden glow"
          />
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
              >
                {card.offer}
              </Typography>
            </div>
          )}

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {card.title}
            </Typography>
            <div className="flex">
              <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                size="small"
              />
              <h5 style={{ marginLeft: "5px", font: "bold" }}>
                {card.ratings}
                <span className="text-xs font-semibold">(4,724 reviews)</span>
              </h5>
            </div>
            {card.savings && (
              <h5>
                From
                <s className="from ml-2">{card.savings}</s>
              </h5>
            )}
            <h5 className="font-semibold">
              AED {card.price}
              <span className="text-sm">/person</span>
            </h5>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <div className="rating-cards-container">
      <h1>Top Experience in Dubai</h1>
      <div className="cards" style={{ marginTop: "25px" }}>
        {cardInfo.map(renderCard)}
        <div className="half-arrow left-arrow">
          <img
            src={LeftArrow}
            alt=""
            className="carousel-arrow-img left-arrow-img"
          />
        </div>
        <div className="half-arrow right-arrow">
          <img src={RightArrow} alt="" className="carousel-arrow-img" />
        </div>
      </div>
    </div>
  );
};

export default RatingCards;
