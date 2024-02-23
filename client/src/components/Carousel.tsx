import { twMerge } from "tailwind-merge";
import { motion, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
};

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const ONE_SECOND = 1000;
const DELAY = ONE_SECOND * 10;

export const Carousel = ({ images = [] }: CarouselProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === images.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };
  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="h-[390px] flex items-center cursor-grab active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} images={images} />
        <GradientEdges />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} images={images} />
    </>
  );
};

const Images = ({
  imgIndex,
  images,
}: {
  imgIndex: number;
  images: string[];
}) => {
  return (
    <>
      {images.map((imgPath, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: idx === imgIndex ? 1 : 0.95,
            }}
            transition={SPRING_OPTIONS}
            className={twMerge(
              imgPath,
              "bg-cover bg-center aspect-video h-full w-full shrink-0 bg-neutral-800 object-cover",
            )}
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
  images,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  images: string[];
}) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {images.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
