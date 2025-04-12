import { useEffect, useState } from "react";
import axios from "axios";

const URL = process.env.REACT_URL;

const useBlogData = () => {
  const [blogData, setBlogData] = useState();

  async function fetchData() {
    if (!URL) {
      console.error(
        "The URL is undefined. Please check your environment variables."
      );
      return;
    }
    try {
      const { data } = await axios.get(`${URL}/posts`);
      console.log(data);
      setBlogData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    fetchData,
  };
};

export default useBlogData;
