import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const getAllQuizFromServer = createAsyncThunk(
  "quiz/getAllquiz",
  async () => {}
);
export const createQuiz = createAsyncThunk(
  "quiz/createQuiz",
  async ({
    questions,
    title,
  }: {
    questions: QuestionType[];
    title: string;
  }) => {
    try {
      const res = await fetch("/api/quiz/create", {
        method: "POST",
        body: JSON.stringify({
          questions,
          isOpen: true,
          title: title || Date.now(),
        }),
      });
      console.log(res);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          text: "save successfull",
        });
        localStorage.removeItem(title);
      } else if (res.status === 400) {
        const data = await res.json();
        Swal.fire({
          icon: "error",
          text: data.error[0].message,
        });
      }
      return true;
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
      });
      return false;
    }
  }
);

const initialState: {
  data: {};
  loading: boolean;
  status: "idle" | "pending" | "success";
  error: string;
} = {
  data: [],
  loading: false,
  status: "idle",
  error: "",
};

const quizSlice = createSlice({
  name: "QUIZ",
  reducers: {},
  initialState,
});

export default quizSlice.reducer;
