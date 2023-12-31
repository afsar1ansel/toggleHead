import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Box, Heading, Text, Image, Button, Center } from "@chakra-ui/react";
import { BiSolidRightArrow } from "react-icons/bi";
// import "./VerticalSlider.css";

const Carousel = ({ slides }) => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Box
        className="swiper-container"
        height={{ base: "35rem", md: "48rem", lg: "28rem", xl: "25rem" }}
        overflow="hidden"
        position="relative"

        
      >
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <Box
                display="flex"
                backgroundColor={"#F4F4F4"}
                flexDirection={{
                  base: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                }}
                justifyContent={"space-between"}
              >
                {/* Left side with data */}
                <Box
                  width={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                  padding={{ base: "2rem", lg: "6rem" }}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"1rem"}
                >
                  <Heading
                    fontSize={{ base: "1.5rem", lg: "2rem" }}
                    color={"#12406F"}
                    textAlign={'left'}
                  >
                    {slide.name}
                  </Heading>
                  <Text textAlign={'justify'}>{slide.content}</Text>
                  <Button
                    w={{ base: "100%", md: "10rem" }}
                    p={"1rem"}
                    h={"3rem"}
                    fontSize={{ base: "1rem", md: "1.2rem" }}
                    letterSpacing={"0.1rem"}
                    color={"white"}
                    backgroundColor={"#12406F"}
                    mt={{ base: "1rem", md: "2rem" }}
                    _hover={{ backgroundColor: "#12406F" }}
                  >
                    <Text>Know More</Text>
                    <Center mt={"0.2rem"}>
                      <BiSolidRightArrow />
                    </Center>
                  </Button>
                </Box>

                {/* Right side with image */}
                <Box
                  width={{ base: "100%", md: "100%", lg: "50%", xl: "40%" }}
                  display={"flex"}
                  justifyContent={"end"}
                >
                  <Image
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </div>
          ))}
        </div>
        {/* Pagination dots */}
        <div
          className="swiper-pagination"
          style={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
            bottom: "6rem",
          }}
        ></div>
      </Box>
    </>
  );
};

export default Carousel;