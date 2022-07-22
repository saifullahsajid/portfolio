import Head from "next/head";
import Home from "../pages/home";
import NavBar from "../pages/components/navBar";
import Footer from "./components/footer";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import { useState } from "react";

export default function Index() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const getSelectedTab = (value) => {
    console.log(value);
    setSelectedTab(value);
  };
  return (
    <div className="flex bg-gray-900 flex-col items-center min-h-screen">
      <Head>
        <title>Saif Ullah Sajid</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Smooch&display=swap"
          rel="stylesheet"
        ></link>
        ;
      </Head>

      <main className="flex flex-col items-center bg-gray-900 justify-between w-full h-full text-center">
        {NavBar({ selectedTab, getSelectedTab })}
        {(() => {
          // if (selectedTab == "Home") {
          return Home();
          // } else if (selectedTab == "About") {
          //   return About();
          // } else if (selectedTab == "Projects") {
          //   return Projects();
          // } else if (selectedTab == "Contact") {
          //   return Contact();
          // } else {
          //   return Home();
          // }
        })()}
      </main>
      {Footer()}
    </div>
  );
}
