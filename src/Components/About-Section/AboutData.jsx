import React from 'react'
import { GiSpeedometer } from 'react-icons/gi'
import { BiDevices } from 'react-icons/bi'
import { SiDynamics365, SiSlackware } from 'react-icons/si'
import { GoLightBulb } from 'react-icons/go'

import { IconContext } from "react-icons";



export const AboutIcon = [
         {
           id: 1,
           icon: (
             <IconContext.Provider value={{ className: "react-icons" }}>
               <GiSpeedometer />
             </IconContext.Provider>
           ),
           title: "Fast",
           paragraph: "Fast loading and lag free interaction with app.",
         },

         {
           id: 2,
           icon: (
             <IconContext.Provider value={{ className: "react-icons" }}>
               <BiDevices />
             </IconContext.Provider>
           ),
           title: "responsive",
           paragraph: "The layouts will work on all devices big and small.",
         },

         {
           id: 3,
           icon: (
             <IconContext.Provider value={{ className: "react-icons" }}>
               <SiDynamics365 />
             </IconContext.Provider>
           ),
           title: "dynamic",
           paragraph: "websites do not have to be static. i like making sites come to life.",
         },

         {
           id: 4,
           icon: (
             <IconContext.Provider value={{ className: "react-icons" }}>
               <GoLightBulb />
             </IconContext.Provider>
           ),
           title: "intuative",
           paragraph: " Strong preference for ease to use, using UX/UI.",
         },
       ];
