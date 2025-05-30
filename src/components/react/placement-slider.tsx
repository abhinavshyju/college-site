import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlacementCard from "./placement-card";

interface CardProp {
  student_name: string;
  company_name: string;
  url: string;
}

interface PlacementSliderProps {
  items: CardProp[];
}

export function PlacementSlider({ items }: PlacementSliderProps) {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {items?.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <PlacementCard
                company={item.company_name}
                name={item.student_name}
                url={item.url}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
