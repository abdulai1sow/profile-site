import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillTwitterSquare
} from "react-icons/ai";

export const links = [
  {
    id: 1,
    url: '#home',
    text: 'home',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 3,
    url: '#work',
    text: 'work',
  },
  {
    id: 4,
    url: '#contact',
    text: 'contact',
  },
];

export const social = [
          {
            id: 1,
            url: "https://www.linkedin.com",
            icon: <AiFillLinkedin />
          },
          {
            id: 2,
            url: "https://www.github.com",
            icon: <AiOutlineGithub />
          },
          {
            id: 3,
            url: "https://www.twitter.com",
            icon: <AiFillTwitterSquare />
          }
        ];