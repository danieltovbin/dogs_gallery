import { FC, useEffect, useState } from "react";
import { getBreedImage } from "../../api/dogApi";
import DogCard from "./DogCard";
import { Grid, useMediaQuery } from "@mui/material";

interface CardProps {
  breedName: string;
  onClick?: () => void;
}

const CardProp: FC<CardProps> = ({ breedName, onClick }) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const isSmallScreen = useMediaQuery('(max-width: 800px)')

  const handleGetImg = async () => {
    try {
      const data = await getBreedImage(breedName);
      const breedImage = data.message;
      setImgSrc(breedImage);
      setParagraph(randomParagraph);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetImg();
  }, [breedName]);

  const randomParagraph = () => {
    const loremVariations = [
      "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid!",
      "Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ];

    const seed =
      breedName.charCodeAt(0) + breedName.charCodeAt(breedName.length - 1);
    const randomIndex = seed % loremVariations.length;
    return loremVariations[randomIndex];
  };

  return (
    <>
      <Grid item xs={isSmallScreen ? 2 : 1} onClick={onClick}>
        <DogCard
          imgSrc={imgSrc}
          alt={breedName}
          breedName={breedName.charAt(0).toUpperCase() + breedName.slice(1)}
          paragraph={paragraph}
        />
      </Grid>
    </>
  );
};

export default CardProp;
