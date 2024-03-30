"use client"
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  // Use GSAP to create the glowing effect
  useGSAP(() => {
    gsap.to(cursorRef.current, {
      scale: 1.5,
      duration: 0.5,
      opacity: 0.6,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    // Function to update cursor position
    const updateCursorPosition = (e) => {
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
    };

    // Add event listener to update cursor position on mouse move
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
