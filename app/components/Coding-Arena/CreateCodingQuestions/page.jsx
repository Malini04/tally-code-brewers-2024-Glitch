"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const steps = ["Details", "Languages", "Test Cases"];
const availableLanguages = [
  "C++",
  "JavaScript",
  "Python",
];


export default function CreateCodingQuestion() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [constraints, setConstraints] = useState("");
  const [testCases, setTestCases] = useState([
    {
      input: "",
      output: "",
    },
  ]);

  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: "", output: "" }]);
  };

  const removeTestCase = (index) => {
    const newTestCases = [...testCases];
    newTestCases.splice(index, 1);
    setTestCases(newTestCases);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission

    //input validation
    if (!title || !description || selectedLanguages.length === 0 || testCases.length === 0) {
      alert("Please fill in all the required fields");
      return;
    }

    //add question data to mongodb

    try {
      const res = await fetch("http://localhost:3000/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          constraints,
          testCases,
        }),
      })

      if(res.ok) {
        router.push('/components/Coding-Arena');
      }
      else {
        throw new Error("Failed to add question");
      }
    } catch (error) {
      console.log(error);
    }

    // const questionData = {
    //   title,
    //   description,
    //   selectedLanguages,
    //   testCases,
    //   createdAt: new Date(),
    // };
    // Retrieve existing data from local storage
    // const existingData = JSON.parse(localStorage.getItem("questions")) || [];

    // // Add the new question data
    // existingData.push(questionData);

    // // Store the updated data in local storage
    // localStorage.setItem("questions", JSON.stringify(existingData));

    // // Log the stored data
    // console.log(existingData);

   
    
    
    // Clear the form (if required)
    // setTitle("");
    // setDescription("");
    // setSelectedLanguages([]);
    // setTestCases([{ input: "", output: "" }]);

    // setActiveStep(0);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md flex mt-20">
      {/* Sidebar for Steps */}
      <div className="w-1/4 pr-6 border-r border-gray-300">
        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-md ${
                activeStep === index
                  ? "bg-violet-500 text-white text-sm font-semibold "
                  : "bg-white border border-gray-100 text-gray-700 text-sm"
              }`}
              onClick={() => setActiveStep(index)}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 pl-6">
        <h1 className="text-2xl font-semibold mb-6">Create Coding Question</h1>

        <div className="space-y-4">
          {activeStep === 0 && (
            <>
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Question Name
                </label> */}
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 text-sm block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Problem Description
                </label> */}
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 p-2 text-sm block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="6"
                ></textarea>
              </div>
            </>
          )}

          {activeStep === 1 && (
            <>
              <h2 className="text-lg font-normal">
                Select Applicable Languages
              </h2>
              <div className="space-y-2">
                {availableLanguages.map((language) => (
                  <div key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleLanguageChange(language)}
                      className="h-4 w-4 text-violet-500 focus:ring-violet-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={language}
                      className="ml-2 block text-sm font-medium text-gray-700"
                    >
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeStep === 2 && (
            <>
              <h2 className="text-lg font-normal">Test Cases</h2>
              {testCases.map((testCase, index) => (
                <div key={index} className="mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400">
                      Input Test Case {index + 1}
                    </label>
                    <textarea
                      value={testCase.input}
                      onChange={(e) =>
                        handleTestCaseChange(index, "input", e.target.value)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-400">
                      Output Test Case {index + 1}
                    </label>
                    <textarea
                      value={testCase.output}
                      onChange={(e) =>
                        handleTestCaseChange(index, "output", e.target.value)
                      }
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    onClick={() => removeTestCase(index)}
                    className="mt-4 text-sm bg-orange-500 text-white py-1 px-3 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={addTestCase}
                className="bg-violet-500 text-white text-sm py-1 px-3 rounded-md"
              >
                Add Test Case
              </button>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className="text-white text-sm bg-gray-600 text-gray-700 py-0 px-4 rounded-md disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
            className="bg-violet-500 text-white text-sm py-1 px-4 rounded-md"
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        <Link href={`/components/Coding-Arena`}>
          <h1 className="text-center mt-4 border border-slate-300 p-2">Back To Question Bank</h1>
        </Link>
      </div>
    </div>
  );
}
