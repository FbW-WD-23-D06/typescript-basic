const fetchData = async (endpoint) => {
  try {
    const API_URL = `https://jsonplaceholder.typicode.com/${endpoint}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
};

fetchData("users");
fetchData("james");
fetchData(["persons"]);
fetchData(12);
