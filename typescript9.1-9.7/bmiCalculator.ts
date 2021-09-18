export const calculateBmi = (a: number, b: number): String => {
  const bmi = b / ((a / 100) * (a / 100));

  if (bmi < 16) {
    return "Underweight (Severe thinness)";
  }
  if (bmi > 16 && bmi < 16.9) {
    return "Underweight (Moderate thinness)";
  }
  if (bmi > 17 && bmi < 18.4) {
    return "Underweight (Mild thinness)";
  }

  if (bmi > 18.5 && bmi < 24.9) {
    return "Normal range";
  }
  if (bmi > 25 && bmi < 29.9) {
    return "Overweight (Pre-obese)";
  }
  if (bmi > 30 && bmi < 34.9) {
    return "Obese";
  } else {
    return "Input needs to be number a: height and b: weight";
  }
};
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log(calculateBmi(a, b));
