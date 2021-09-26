// export interface CoursePart {
//   name: string;
//   exerciseCount: number;
// }
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}
export interface CourseNormalAndSubmission extends CoursePartBase {
  description: string;
}
export interface CourseNormalPart extends CourseNormalAndSubmission {
  type: "normal";
  //description: string;
}
export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CourseNormalAndSubmission {
  type: "submission";
  // description: string;
  exerciseSubmissionLink: string;
}
export interface CourseAnotherPart extends CourseNormalAndSubmission {
  type: "special";
  requirements: string[];
}
export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseAnotherPart;
