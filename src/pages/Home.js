import { useEffect } from "react";
import axios from "axios";

const Home = ({ setShowMenu, setShowCardProfile }) => {
  useEffect(() => {
    setShowMenu("main-menu");
    setShowCardProfile("section-vcardbody section-home");
  }, []);

  return <></>;
};

export default Home;
