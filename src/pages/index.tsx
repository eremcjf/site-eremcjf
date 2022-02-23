import type { NextPage } from "next";
import HomeCarrossel from "../Components/HomeCarrossel";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeCarrossel />
      <Footer />
    </>
  );
};

export default Home;
