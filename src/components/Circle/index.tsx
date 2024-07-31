import { getColors } from "@/layout/Theme/themes";
import Image from "next/image";
import React from "react";
import "./index.css";

export default function Circle() {
  return (
    <div className="relative h-full w-full flex items-center justify-center mt-10">
      <div
        className={` circularmotion profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 `}
        style={{
          borderColor: getColors().grey[800],
        }}
      >
        <button
          className=" profile_item left-[45px] -top-[4px]  absolute rounded-full bg-cover cursor-pointer border p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] "
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image src="/logo/nextjs.svg" className="" alt="circle" height={40} width={40} />
          </span>
        </button>

        <button
          className={`profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]"
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image
              src="/logo/tailwind.svg"
              alt="circle"
              height={40}
              width={40}
            />
          </span>
        </button>

        <button
          className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]"
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image src="/logo/figma.svg" alt="circle" height={40} width={40} />
          </span>
        </button>

        <button
          className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border  active:scale-95 hover:scale-95 transition-all duration-500"
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] "
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image
              src="/logo/wordpress.svg"
              alt="circle"
              height={40}
              width={40}
            />
          </span>
        </button>

        <button
          className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] "
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image
              src="/logo/laravel.svg"
              alt="circle"
              height={40}
              width={40}
            />
          </span>
        </button>

        <button
          className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border  p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]"
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image src="/logo/mysql.svg" alt="circle" height={40} width={40} />
          </span>
        </button>

        <button
          className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
          style={{
            borderColor: getColors().grey[100],
          }}
        >
          <span
            className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]  p-1"
            style={{
              background: getColors().grey[900],
            }}
          >
            <Image src="/logo/aws.svg" alt="circle" height={40} width={40} />
          </span>
        </button>

        <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full  cursor-pointer transition-all duration-500 z-0">
          <div
            className="w-full h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-200"
            style={{
              background: getColors().grey[900],
            }}
          >
            <span className=" inline-block">
              <Image src="/favicon.svg" alt="circle" height={100} width={100} />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
