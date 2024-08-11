// pages/api/problems/route.js
import connectDB from "@/libs/mongodb";
import Problem from "@/models/problems";
// import { request } from "express";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, constraints, testCases, solution } = await request.json();
    console.log(title, description, constraints, testCases, solution);
    await connectDB();

    // Create a new problem document
    const problem = await Problem.create({
      title,
      description,
      constraints,
      testCases,
      solution,
    });

    return NextResponse.json(
      { message: "Problem created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating problem:", error);
    return NextResponse.json(
      { message: "Failed to create problem", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  const problems = await Problem.find();
  return NextResponse.json(problems);
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await Problem.findByIdAndDelete(id);
  return NextResponse.json({ message: "Problem deleted successfully" });
}

