import { useParams } from "react-router-dom";
import { getBreedImage } from "../../api/dogApi";
import { useEffect, useState } from "react";
import TopBar from "../../components/appBar/TopBar";
import "./discussion.scss";

const DogDiscussion = () => {
  const { breedName } = useParams<{ breedName: string }>();
  const [breedImg, setBreedImg] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchBreedImg = async () => {
    try {
      if (breedName) {
        const data = await getBreedImage(breedName);
        const breedImg = data.message;
        setBreedImg(breedImg);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(ev.target.value);
  };
  useEffect(() => {
    fetchBreedImg();
  }, [breedName]);

  return (
    <div className="discussionPage">
      <TopBar />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h1>
            {breedName
              ? breedName?.charAt(0).toUpperCase() + breedName?.slice(1)
              : breedName}
          </h1>
          <div className="discussionPage__container">
            {breedImg && (
              <div className="discussionPage__breedImgTrue">
                <img src={breedImg} alt={breedName || "Breed Image"} />
              </div>
            )}
            <div className="discussionPage__discussion">
              <h6>Chat</h6>
              <p>{message}</p>
              <div className="discussionPage__discussion__inputContainer">
                <input
                  type="text"
                  placeholder="Type your message here"
                  onChange={handleInputChange}
                />
                <button>Send</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DogDiscussion;
