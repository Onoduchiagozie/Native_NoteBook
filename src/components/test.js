const axios = require("axios");

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
  params: {
    limit: "10",
    offset: "0",
  },
  headers: {
    "x-rapidapi-key": "efbbf9641cmsh31c8cee6dcedda0p1ff29fjsn1e1c07bad08d",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
