"use client";

import React from "react";
import Marquee from "react-marquee-slider";

import Image from "next/image";
import brand1 from "@/assets/brand1.png";
import brand2 from "@/assets/brand2.png";
import brand3 from "@/assets/brand3.png";
import brand4 from "@/assets/brand4.png";
import brand5 from "@/assets/brand5.png";

const BrandCarousel = () => {

    return (
        <div style={{ height: "100px", background: "var(--black-color)" }}>
            <Marquee 
                velocity={25} 
                direction="rtl" 
                resetAfterTries={200} 
                scatterRandomly={false}
                onInit={() => console.log("Marquee initialized")}
                onFinish={() => console.log("Marquee finished")}
            >
                <div style={{ padding: "0 20px", height: "100%" }}>
                    <Image src={brand1} alt="" height={50} style={{margin: "25px 0"}} />
                </div>
                <div style={{ padding: "0 20px", height: "100%" }}>
                    <Image src={brand2} alt="" height={50} style={{margin: "25px 0"}} />
                </div>
                <div style={{ padding: "0 20px", height: "100%" }}>
                    <Image src={brand3} alt="" height={50} style={{margin: "25px 0"}} />
                </div>
                <div style={{ padding: "0 20px", height: "100%" }}>
                    <Image src={brand4} alt="" height={50} style={{margin: "25px 0"}} />
                </div>
                <div style={{ padding: "0 20px", height: "100%" }}>
                    <Image src={brand5} alt="" height={50} style={{margin: "25px 0"}} />
                </div>
            </Marquee>
        </div>
    );
};

export default BrandCarousel;