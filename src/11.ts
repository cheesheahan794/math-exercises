import { add } from 'mathjs';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomAdditionExercise = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  return `What is ${num1} + ${num2}?`;
};