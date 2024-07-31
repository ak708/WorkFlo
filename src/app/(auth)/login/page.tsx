"use client";
import React from "react";
import { LoginForm } from "@/components/Login";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { setToken } from "@/lib/features/auth/authSlice";
const login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status == "authenticated" && session.user?.email) {
    dispatch(setToken(session.user.email));
    router.push("/");
  }
  return (
    <div>
      <div className="relative mt-[7%]">
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
