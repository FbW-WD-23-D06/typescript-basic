type Endpoint = "posts" | "comments" | "albums" | "photos" | "users" | "todos";

const fetchData = async (endpoint: Endpoint) => {
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
fetchData("posts");
fetchData("comments");
fetchData("todos");
