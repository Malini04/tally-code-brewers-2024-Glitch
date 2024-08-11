import React from "react";
import { getQuestions } from "./getQuestions"; // Replace with the actual path to your getQuestions function
import CodeBlock from "../../codeblocks";
import Link from "next/link";
import RemoveButton from "../../RemoveButton";
import SolutionContainer from "../../SolutionContainer";


export default async function QuestionsList() {
  // Fetch the questions data
  const questions = await getQuestions();

 
  return (
    <>
      {questions.map((question, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          <Link
          id = {question._id}
          href={`/components/Coding-Arena/CreateCodingQuestions/questions`}
          className="text-blue-500">
            <h3>Title: {question.title}</h3>
          </Link>
          
          
          
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
          <SolutionContainer id = {question._id}/>
          <CodeBlock code={question.solution} />
          <RemoveButton id = {question._id}/>
        </div>
      ))}
    </>
  );
}
