import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Home: NextPage = () => {
  const isLogin = false;
  return <div>{isLogin ? <Login /> : <Signup />}</div>;
};

export default Home;
