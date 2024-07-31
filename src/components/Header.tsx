"use client";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Highlight } from "./ui/hero-highlight";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <AuroraBackground>
        <div className="absolute top-4 right-4 flex flex-row gap-2">
          {status == "authenticated" && (
            <Button variant="outline" className="dark:text-white text-black">
              Log out
            </Button>
          )}
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-10">
          <div className="text-8xl font-bold text-center dark:text-white">
            Welcome to <Highlight>Workflo.</Highlight>
          </div>
          <div className="flex flex-row justify-center items-center">
            {status === "authenticated" ? (
              <div className="flex flex-row gap-3">
                <Link href="/dashboard">
                  <button className="p-[3px] relative hover:scale-105 transition">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-600 dark:to-purple-600 rounded-lg" />
                    <div className="group relative hover:bg-none px-8 py-2 text-2xl  dark:bg-black rounded-[6px] dark:text-white transition duration-200 ">
                      Dashboard
                    </div>
                  </button>
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <button className="p-[3px] relative hover:scale-105 transition">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-600 dark:to-purple-600 rounded-lg" />
                  <div className="group relative hover:bg-none px-8 py-2 text-2xl  dark:bg-black rounded-[6px] dark:text-white transition duration-200 ">
                    Sign In
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Header;
