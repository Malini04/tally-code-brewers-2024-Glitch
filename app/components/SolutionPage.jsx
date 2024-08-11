'use client';
import React, { useState, useEffect } from 'react';
import CodeBlock from './codeblocks';

const SolutionPage = ({ id }) => {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/problems?id=${id}`, {
                    method: "GET",
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch the question");
                }

                const data = await response.json();
                setQuestion(data.problem); // Assuming your API returns the question under `problem`
            } catch (error) {
                console.error("Error fetching the question:", error);
            }
        };

        if (id) {
            fetchQuestion();
        }
    }, [id]);

    return (
        <div className='mt-20 ml-20'>
            <h2>Solution Page</h2>
            {question ? (
                <div>
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
                    <h4>Solution:</h4>
                    <CodeBlock code={question.solution} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SolutionPage;
