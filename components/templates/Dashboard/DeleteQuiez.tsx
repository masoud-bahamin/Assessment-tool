"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DeleteQuiez({ id }: { id: string }) {
  const router = useRouter();

  const fetchDeleteQuize = async () => {
    const res = await fetch(`/api/quiz/delete-quiz/${id}`, {
      method: "DELETE",
    });
    console.log(res);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        text: "quiz deleted successfuly",
      });
      router.refresh();
    } else {
      Swal.fire({
        icon: "error",
        text: "try again",
      });
    }
  };

  const deleteQuize = async () => {
    try {
      Swal.fire({
        icon: "warning",
        text: "Do you want to delete this quiz?",
        confirmButtonText: "Yes",
        confirmButtonColor: "red",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          fetchDeleteQuize();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "try again",
      });
      console.log(error, "catch error");
    }
  };
  return (
    <button
      className="text-xs rounded-lg bg-accent-200 text-white py-1 px-2"
      onClick={deleteQuize}
    >
      DeleteQuiez
    </button>
  );
}
