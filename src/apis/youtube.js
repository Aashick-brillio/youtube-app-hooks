import axios from "axios";
const KEY = "AIzaSyCAqgH1_4Yh7j-CTj3PZmjbPIBIn1yJwk8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
