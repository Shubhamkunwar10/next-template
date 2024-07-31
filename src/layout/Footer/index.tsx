// Footer.tsx

import React from "react";
import { footer } from "@/Data/footer";
import buy_coffee from "/buy-me-a-coffee.svg";
import { Button, Typography, Link, Box } from "@mui/material";
import {
  FooterContainer,
  ColumnContainer,
  Column,
  Title,
  FooterLink,
} from "./style.css";
import { getColors } from "../Theme/themes";

function Footer() {
  return (
    <FooterContainer>
      <ColumnContainer>
        {footer.columns.map((item, index) => (
          <Column key={index}>
            <Title>{item.title}</Title>
            <div>
              {item.links.map((linkItem, linkIndex) => (
                <div key={linkIndex} className="my-4">
                  <a
                    href={linkItem.link}
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: getColors().grey[100],
                    }}
                    className="items-center flex no-underline"
                  >
                    {linkItem.icon && (
                      <div className="pr-2 -mb-1">{linkItem.icon}</div>
                    )}
                    {linkItem.name}
                  </a>
                </div>
              ))}
            </div>
          </Column>
        ))}
      </ColumnContainer>
        <div
          className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0"
          style={{
            color: getColors().grey[100],
          }}
        >
          <Title>Sponsored By</Title>
          <div className="space-y-2 mt-4 w-full flex  items-center sm:items-start flex-col grid justify-items-center">
            <div>
              <Button>Metakul</Button>
            </div>
            <Typography variant="body2" className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </Typography>
          </div>
        </div>
      <Box className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <Typography
          className="flex flex-col items-center justify-center"
          style={{
            color: getColors().grey[100],
          }}
        >
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img src="/logo/react.svg" width="26" title="React" />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="/logo/nextjs.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img src="/logo/tailwind.svg" width="26" title="TailwindCSS" />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div
            className="mt-2 text-xs"
            style={{
              color: getColors().grey[100],
            }}
          >
            {" "}
            <a
              href="mailto:1cliq@gmail.com?subject=Personal Message&body=Message"
              className="text-fun-gray-light font-medium"
            >
              1CLIQ
            </a>
            . All rights reserved.
          </div>
        </Typography>
      </Box>
    </FooterContainer>
  );
}

export default Footer;
