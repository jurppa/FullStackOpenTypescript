interface trainingData {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;

  ratingDescription: string | undefined;
  target: number;
  average: number;
}
const calculateExercise = (dailyExercises: Array<number>, hours: number) : trainingData => {
  let trainingDays = 0;

  let rating = 1;
  let ratingDescription;
  const periodLength = dailyExercises.length;
  const target = hours;
  console.log("target", target);
  const average =
    dailyExercises.reduce((a, b) => a + b, 0) / dailyExercises.length;
  const success = average > target ? true : false;
  dailyExercises.forEach((day) => {
    if (day > 0) {
      trainingDays++;
    }
  });
  if (isNaN(average)) {
    throw new Error("arguments should be given as numbers");
  }
  if (average < target) {
    rating = 1;
    ratingDescription = "not too bad but could be better";
  }
  if (average == target) {
    rating = 2;
    ratingDescription = "target achieved";
  }
  if (average > target) {
    rating = 3;
    ratingDescription = "well done, went beyond target";
  }
  return {
    trainingDays,
    periodLength,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const parseArguments = (argumentArray: Array<string>) => {
  const targetValue = Number(process.argv[2]);

  const hoursPerDay = argumentArray.splice(3).map((a) => Number(a));
  const testData = calculateExercise(hoursPerDay, targetValue);
  console.log(testData);
};
const argsArray = process.argv;
parseArguments(argsArray);
