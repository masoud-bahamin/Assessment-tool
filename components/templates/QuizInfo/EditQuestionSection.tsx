"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function EditQuestionSection({ id, QuizId }: { id: string; QuizId: string }) {
  const router = useRouter();
  const editQuestion = async () => {
    await Swal.fire({
      icon: "info",
      text: "Do you want to edit question?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "save",
      input: "text",
      inputPlaceholder: "write here",
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          const response = await fetch(`/api/quiz/editQuestion/${id}`, {
            method: "PUT",
            body: JSON.stringify({ QuizId, question: res.value }),
          });

          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              text: "edited successfully",
            });
            router.refresh();
          } else {
            Swal.fire({
              icon: "error",
              text: "edited unsuccessfull",
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            text: "edited unsuccessfull",
          });
        }
      } else return;
    });
  };
  return (
    <button
      onClick={editQuestion}
      className="inline-block p-2 rounded font-medium text-[12px] leading-none bg-primary-200 hover:bg-primary-300 text-white mr-4"
    >
      Edit
    </button>
  );
}

export default EditQuestionSection;
