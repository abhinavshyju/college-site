import React from "react";
import { Card, CardContent } from "../ui/card";
interface cardProp {
  name: string;
  url: string;
  company: string;
}
export default function PlacementCard({ name, url, company }: cardProp) {
  return (
    <div className="w-full aspect-square relative">
      <div className="absolute w-full h-full hover:bg-black/50 transition-all delay-100" />
      <img src={url} alt="placement" className="w-full h-full object-cover" />
      <div className="w-full absolute bottom-0 left-0 px-4 py-2 text-white">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h2 className="text-lg">{company}</h2>
      </div>
    </div>
  );
}
