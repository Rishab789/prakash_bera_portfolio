import Header from "./components/Header";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import loading from "./assets/loading.json";
import Lottie from "lottie-react";

function App() {
  const [blogData, setBlogData] = useState(null);
  const [loadingState, setLoadingState] = useState(true); // Add a loading state

  let URL = process.env.REACT_APP_URL;
  const getBlogData = async () => {
    try {
      const res = await fetch(`${URL}/api/v1/posts`);
      const data = await res.json();
      setBlogData(data);
    } catch (err) {
      console.log("This is the error", err);
    } finally {
      setLoadingState(false); // Stop loading after fetching data
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="App">
      {loadingState ? ( // Show Lottie animation when loading
        <div className="flex justify-center items-center h-screen">
          <Lottie animationData={loading} loop={true} />
        </div>
      ) : (
        <>
          <Header />
          <Outlet context={{ postData: blogData }} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
