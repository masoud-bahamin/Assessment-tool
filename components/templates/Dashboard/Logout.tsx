"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Logout() {
  const router = useRouter();
  const fetchLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });
    if (res.status === 200) {
      router.refresh();
      Swal.fire({
        icon: "success",
        text: "logout is successfull",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "try again",
      });
    }
  };
  const logoutHandler = async () => {
    try {
      Swal.fire({
        icon: "warning",
        text: "Do you want to exit?",
        confirmButtonText: "Yes",
        showCancelButton: true,
        confirmButtonColor: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          fetchLogout();
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "try again",
      });
    }
  };
  return (
    <div>
      <button
        onClick={logoutHandler}
        className="py-2 px-4 rounded-lg bg-rose-200 text-red-700 hover:bg-rose-300"
      >
        Logout
      </button>
    </div>
  );
}
