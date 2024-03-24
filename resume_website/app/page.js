'use client'

import Image from "next/image";
import MainInterface from "../components/MainInterface";
import LoadingScreen from "../components/LoadingScreen";
import {useState, useEffect} from 'react';
export default function Home() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : <MainInterface />}
    </>
  );


}
