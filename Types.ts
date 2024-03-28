interface QuestionType {
  question: string;
  answer:
    | "true"
    | "false"
    | {
        correctAnswer: string;
        wrongeAnswer1: string;
        wrongeAnswer2: string;
        wrongeAnswer3: string;
      };
  _id: string;
}
interface QuisType {
  questions: QuestionType[];
  isOpen: boolean;
  title: string;
}
