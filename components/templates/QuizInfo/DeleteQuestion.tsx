"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

function DeleteQuestionSection({ id, QuizId }: { id: string; QuizId: string }) {
  const router = useRouter();
  const DeleteQuestion = async () => {
    Swal.fire({
      icon: "warning",
      text: "Do you want to delete this?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "Delete",
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          const res = await fetch(`/api/quiz/delete/${id}`, {
            method: "DELETE",
            body: JSON.stringify({ QuizId }),
          });

          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              text: "deleted successfully",
            });
            router.refresh();
          } else {
            Swal.fire({
              icon: "error",
              text: "deleted unsuccessfull",
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            text: "deleted unsuccessfull",
          });
        }
      } else return;
    });
  };
  return (
    <button
      onClick={DeleteQuestion}
      className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-accent-200 hover:bg-rose-700 text-white"
    >
      Delete
    </button>
  );
}

export default DeleteQuestionSection;
