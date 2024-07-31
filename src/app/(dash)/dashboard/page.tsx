"use client";
import React, { useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ModeToggle";
import { Card } from "@/components/ui/card";
import { CardList } from "@/components/Scrollsample";
import { get } from "http";
export const page = () => {
  const { data: session, status } = useSession();
  const [tasks, setTasks] = React.useState([]);
  // useEffect(() => {
  //   async function getTasks() {
  //     const session = await getSession();
  //     if (session) {
  //       const res = await fetch("/api/tasks", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-user-email": `${session.user?.email}`,
  //         },
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //     }
  //   }
  //   getTasks();
  // }, []);

  console.log(session);
  return (
    <div className="mt-4 ">
      <div className="top-4 right-4 absolute">
        <ModeToggle />
      </div>
      <div>
        <div className="text-3xl px-2 font-bold">Hey, User</div>
      </div>
      <div className="w-full grid grid-cols-4 py-4 px-2">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
      <Separator className="my-4" />
    </div>
  );
};
export default page;
