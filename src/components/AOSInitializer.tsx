'use client';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const AOSInitializer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            //once: true,
        });
    }, []);

    return null;
};

export default AOSInitializer;
