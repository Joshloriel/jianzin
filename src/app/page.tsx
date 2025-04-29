'use client';

import Image from "next/image";
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../network/firebase/firebase";
import Landing from "./landing/page";
// import Landing from "../components/global/landing";
export default function Home() {
  

  return (
    <Landing ></Landing>
  );
}