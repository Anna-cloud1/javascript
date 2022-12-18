import { addImage } from './addImage.js';

const addImageV2 = (url) => {
  const promise = new Promise((resolve, reject) => {
    addImage(url, (data, error) => {
      if (data) {
        resolve(data);
      } else {
        reject(error);
      }
    });
  });
  return promise;
};

// examples

addImageV2('https://server.com/image.png')
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
