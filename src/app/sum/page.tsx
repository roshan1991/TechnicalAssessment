"use client";
import React, { useState } from 'react';

const twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target)
            return [left + 1, right + 1];
        else if (sum < target)
            left++;
        else
            right--;
    }
    return [];
};

const TwoSumPage = () => {
    const [numbersInput, setNumbersInput] = useState('[2,7,11,15]');
    const [targetInput, setTargetInput] = useState('9');
    const [result, setResult] = useState([]);
    const [error, setError] = useState('');

    const handleCalculate = () => {
        try {
            const parsedNumbers = JSON.parse(numbersInput);
            if (!Array.isArray(parsedNumbers)) {
                throw new Error('Numbers input must be a valid JSON array.');
            }
            if (parsedNumbers.some(isNaN)) {
                throw new Error('All elements in the numbers array must be valid numbers.');
            }
            const parsedTarget = parseInt(targetInput);
            if (isNaN(parsedTarget)) {
                throw new Error('Target must be a valid number.');
            }
            setError('');
            setResult(twoSum(parsedNumbers, parsedTarget));
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">
                    Two Sum II - Sorted Array
                </h1>

                <div className="space-y-6">
                    {/* Numbers Input */}
                    <div>
                        <label htmlFor="numbers" className="block text-sm font-medium text-gray-700 mb-2">
                            Numbers Array (e.g., [2,7,11,15])
                        </label>
                        <input
                            type="text"
                            id="numbers"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base transition duration-200 ease-in-out"
                            value={numbersInput}
                            onChange={(e) => setNumbersInput(e.target.value)}
                            placeholder="Enter numbers array (e.g., [2,7,11,15])"
                        />
                    </div>
                    <div>
                        <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-2">
                            Target Number
                        </label>
                        <input
                            type="number"
                            id="target"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-base transition duration-200 ease-in-out"
                            value={targetInput}
                            onChange={(e) => setTargetInput(e.target.value)}
                            placeholder="Enter target number"
                        />
                    </div>
                    <button
                        onClick={handleCalculate}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                    >
                        Find Indices
                    </button>
                    {error && (
                        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                            Error: {error}
                        </div>
                    )}
                    <div className="mt-8 text-center">
                        <p className="text-xl font-bold text-gray-800">
                            Result (1-indexed indices):{" "}
                            <span className="text-purple-600">
                {result.length > 0 ? `[${result.join(', ')}]` : "—"}
              </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoSumPage;
