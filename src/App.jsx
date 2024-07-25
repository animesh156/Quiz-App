/* eslint-disable react/jsx-key */
import  { useState } from 'react';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Kolkata', isCorrect: false },
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Chennai', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},

    {
			questionText: 'How many States are in India?',
			answerOptions: [
				{ answerText: '25', isCorrect: false },
				{ answerText: '45', isCorrect: false },
				{ answerText: '16', isCorrect: false },
				{ answerText: '28', isCorrect: true },
			],
		},

		
		{
			questionText: 'Who won the 2019 cricket world-cup?',
			answerOptions: [
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'England', isCorrect: true },
				{ answerText: 'Pakistan', isCorrect: false },
				{ answerText: 'Australia', isCorrect: false },
			],
		},


	];



	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app w-auto md:w-full lg:w-full container'>
			{showScore ? (
				<div className='score-section container text-orange-400'>
					
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section w-auto md:w-full lg:w-full container'>
						<div className='question-count text-fuchsia-500'>
							<span className= 'text-red-500' >Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text text-yellow-300'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}