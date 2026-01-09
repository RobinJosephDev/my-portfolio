"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";
import { RootState } from "@/store";

export default function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900">
      <div className="font-bold text-xl">My Portfolio</div>
      <button onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
