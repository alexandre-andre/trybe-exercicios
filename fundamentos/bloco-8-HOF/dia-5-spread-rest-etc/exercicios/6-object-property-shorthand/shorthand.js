// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => (
    {
        latitude: latitude,
        longitude: longitude
    }
);  
console.log(getPosition(-19.8157, -43.9542));



const getPosition2 = (latitude, longitude) => (
    {
        latitude,
        longitude
    }
);  
console.log(getPosition2(-19.8157, -43.9542));