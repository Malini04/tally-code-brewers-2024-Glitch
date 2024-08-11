// "use client";
// import { useEffect, useState } from "react";
import Link from "next/link";
// import axios from "axios";
import QuestionsList from "./CreateCodingQuestions/QuestionsList";

export default function CodingArena() {
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   const storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
  //   setQuestions(storedQuestions);
  // }, []);

  

  // const handleDelete = (index) => {
  //   // Retrieve existing data from local storage
  //   const existingData = JSON.parse(localStorage.getItem("questions")) || [];

  //   // Remove the question at the specified index
  //   existingData.splice(index, 1);

  //   // Store the updated data in local storage
  //   localStorage.setItem("questions", JSON.stringify(existingData));

  //   // Update state to reflect changes
  //   setQuestions(existingData);
  // };

  

  return (
    <div
      style={{ display: "flex", height: "100vh" }}
      className="w-full pt-20 flex mx-auto"
    >
      {/* Main Content Area */}
      <div className="w-full pl-4 justify-center">
        <h1 className="">Welcome to the Coding Arena</h1>
        <h2>Your Questions: </h2> 

        <QuestionsList/>

        {/* {questions.length === 0 ? (
          <p>No questions available. Add some in the Question Bank.</p>
        ) : (
          // Render questions
          questions.map((question, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              <h3>Title: {question.title}</h3>
              <p>{question.description}</p>
              <p>{question.constraints}</p>
              <h4>Test Cases:</h4>
              <ul>
                {question.testCases.map((testCase, idx) => (
                  <li key={idx}>
                    <strong>Input:</strong> {testCase.input} |{" "}
                    <strong>Output:</strong> {testCase.output}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleDelete(index)}
                className="mt-4 bg-red-400 text-white text-sm py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))
        )} */}
      </div>

      {/* Right-side Navigation Bar */}
      <div style={{ width: "200px", padding: "20px" }} className="Navigation-Panel">
        <h2>Navigation</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link
              href={`/components/Coding-Arena`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded flex"
            >
              Question Bank
            </Link>
          </li>
          <li>
            <Link
              href={`/components/Coding-Arena/CreateCodingQuestions`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded flex"
            >
              Add Que
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
