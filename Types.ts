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
interface QuizType {
  questions: QuestionType[];
  isOpen: boolean;
  title: string;
}
interface userType {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  parent: string;
}
