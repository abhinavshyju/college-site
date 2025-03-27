import React from "react";
import { Card, CardContent } from "../ui/card";
interface cardProp {
  name: string;
  url: string;
}
export default function PlacementCard() {
  return (
    <div className="w-full aspect-square relative">
      <div className="absolute w-full h-full hover:bg-black/50 transition-all delay-100" />
      <img
        src="/assets/images/college.jpg"
        className="w-full h-full object-cover"
      />
      <div className="w-full absolute bottom-0 left-0 px-4 py-2 text-white">
        <h1 className="text-xl font-semibold">Abhinav shyju</h1>
        <h2 className="text-lg">Genisys</h2>
      </div>
    </div>
  );
}
