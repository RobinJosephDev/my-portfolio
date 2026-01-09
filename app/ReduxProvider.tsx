<<<<<<< HEAD
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
=======
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
>>>>>>> e7b500a4787e9b495d567a5254f9d942c3897de8
