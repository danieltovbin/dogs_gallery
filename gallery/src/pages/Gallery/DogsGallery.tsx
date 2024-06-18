import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import getDog from "../../api/dogApi";
import CardProp from "../../components/card/Card";
import TopBar from "../../components/appBar/TopBar";
import SearchBtn from "../../components/search/SearchBtn";
import { useNavigate } from "react-router-dom";

const BreedList = [
  "affenpinscher",
  "akita",
  "beagle",
  "boxer",
  "chihuahua",
  "dachshund",
  "husky",
  "pug",
];

const DogsGallery = () => {
  const [dog, setDog] = useState<string[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleGetDog = async () => {
    try {
      const getData = await getDog();

      if (getData) {
        setDog(getData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetDog();
  }, []);

  const filteredBreedList = BreedList.filter((breed) =>
    breed.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const navigareToDiscussion = (breedName: string) => {
    navigate(`/dog-discussion/${breedName}`);
  };

  return (
    <>
      <TopBar children={<h5 style={{ margin: 0 }}>Art Talks</h5>} />
      <SearchBtn setSearchTerm={setSearchTerm} />
      {dog && (
        <Box>
          <Grid container rowSpacing={4} columnSpacing={{ md: 5 }} columns={4}>
            {filteredBreedList.map((breedName) => (
              <CardProp
                breedName={breedName}
                key={breedName}
                onClick={() => navigareToDiscussion(breedName)}
              />
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default DogsGallery;
