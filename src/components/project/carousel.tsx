import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Shadcn
import { Card, CardContent } from "@/components/ui/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Carousel({ screenshots }: { screenshots: string[] }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ hide: true }}
      className="drop-shadow-md dark:drop-shadow-2xl shadow-md dark:shadow-2xl"
    >
      {screenshots.map((item: string, index: number) => (
        <SwiperSlide key={index}>
          <div className="p-0">
            <Card className="rounded-md">
              <CardContent className="p-0 rounded-md w-full">
                <img
                  src={item}
                  alt={`Screenshot - ${index + 1}`}
                  className="w-full h-80 rounded-md"
                />
              </CardContent>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
