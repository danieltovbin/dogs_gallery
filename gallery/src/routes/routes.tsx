import DogsGallery from "../pages/Gallery/DogsGallery";
import DogDiscussion from "../pages/DogDiscussion/DogDiscussion";
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([

  { path: "/", element: <DogsGallery /> },
  { path: "dog-discussion/:breedName", element: <DogDiscussion /> }

]);