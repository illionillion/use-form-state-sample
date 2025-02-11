// action.ts
"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { loginSchema } from "@/schema/form";

export async function login(prevState: unknown, formData: FormData) {
  console.log(prevState, formData);

  const submission = parseWithZod(formData, {
    schema: loginSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  redirect("/login");
}
