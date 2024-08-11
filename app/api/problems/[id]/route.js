import connectDB from "@/libs/mongodb";
import  Problem from "@/models/problems";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const  { id }= params;
    const { newTitle: title, newDecription: description, newConstraints: constraints, newTestCases: testCases, newSolution: solution } = await request.json();
    await connectDB();
    await Problem.findByIdAndUpdate(id, {
        title,
        description,
        constraints,
        testCases,
        solution,
    });
    return NextResponse.json({ message: "Problem updated successfully" });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const problem = await Problem.findOne({_id : id});
    return NextResponse.json({problem});
}