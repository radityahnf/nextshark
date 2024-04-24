"use client";
import Image from "next/image";

import { useEffect } from "react";
import useFetchAllNews from "@/hooks/useAllNews";

import TopStories from "./_components/TopStories";
import Discover from "./_components/discover/Discover";

export default function Home() {
  return (
    <>
      <div className="mb-20">
        <TopStories />
      </div>
      <Discover />
    </>
  );
}
