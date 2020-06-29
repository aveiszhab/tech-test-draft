import axios from 'axios';

const getImages = (query) => {
  if(!query) {
      return Promise.resolve([]);
  } else {
    return(
      axios({
        method: 'GET',
        url: 'https://images-api.nasa.gov/search',
        params: {
          q: query
        }
      })
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(image => {
          return image.data[0].media_type === 'image'
        });
        const images = parsedImages.map(img => img.links[0].href);
        
        return images;
      })
      .catch((err) => {
        console.log(err);
      })  
    )       
  }
};



export default getImages;