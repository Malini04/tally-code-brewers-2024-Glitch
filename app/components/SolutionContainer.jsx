'use client'
import React from 'react'
import { useRouter } from 'next/navigation';


const SolutionContainer = ({ id }) => {

    const router = useRouter(); 

    const handleNavigate = () => {
        router.push(`/components/Coding-Arena/CreateCodingQuestions/questions`);
    }

  return (
    <div className='bg-violet-500 text-white text-xs mt-2 py-1 px-2 rounded'>
      <button id={id} onClick={handleNavigate} >Solution</button>
    </div>
  )
}

export default SolutionContainer
