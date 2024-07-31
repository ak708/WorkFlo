import { NextRequest, NextResponse } from "next/server";

type Task = {
  title: string;
  status: string;
  priority?: string;
  deadline?: Date;
  desc?: string;
  email?: string;
};

export async function POST(req: NextRequest) {
  const { title, status, priority, deadline, desc }: Task = await req.json();
  const token = req.headers.get("authorization")?.split(" ")[1];

  try {
    const response = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user-email": `${req.headers.get("x-user-email")}`,
      },
      body: JSON.stringify({ title, status, priority, deadline, desc }),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Task created successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to create task" },
        { status: response.status }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
