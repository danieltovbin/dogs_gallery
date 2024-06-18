import axios from "axios"

const API_URL = "https://dog.ceo/api"

const getDog = async() => {
  
    try {
        const {data} = await axios.get(`${API_URL}/breeds/list/all`)
        console.log(data);
        const arr = Object.keys(data.message)
        const images = await Promise.all(
            arr.map((breed) => getBreedImage(breed))
        )
        
        return  images
    } catch (error) {
        console.error(error)
    }
}

export default getDog



export const getBreedImage = async (breed:string) => {
    try {
        const {data} = await axios.get(`${API_URL}/breed/${breed}/images/random`);
        return data;
    } catch (error) {
        console.error(error);
    }
}