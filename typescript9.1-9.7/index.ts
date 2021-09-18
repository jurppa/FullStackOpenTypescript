import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();
app.get("/hello", (_request, response) => {
  response.send("Hello Full Stack!");
});
app.get("/bmi", (request, response) => {
  // query string example http://localhost:3000/bmi?height=177&weight=78
  let height: number = Number(request.query.height);
  let weight: number = Number(request.query.weight);
  // Check if height or weight is NaN
  if (isNaN(height) || isNaN(weight)) {
    response.status(400).json({ error: "malformatted parameters" });
  }
  // If not NaN, check if either missing
  if (!height || !weight) {
    response.status(400).json({ error: "parameter missing" });
  }
  let bmi = calculateBmi(height, weight);
  const responseJson = {
    weight: weight,
    height: height,
    bmi: bmi,
  };
  response.send(responseJson);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
