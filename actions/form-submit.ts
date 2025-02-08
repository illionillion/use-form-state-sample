"use server";
import { submitSchema } from "@/schema/form";

export async function formSubmit(
  prevState: { errors?: Record<string, string[]>; success?: string },
  formData: FormData
): Promise<{ errors?: Record<string, string[]>; success?: string }> {
  // FormData から値を取り出す
  const formObject = Object.fromEntries(formData.entries());

  // Zod でバリデーション
  const result = submitSchema.safeParse(formObject);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const { name, email, message } = result.data;

  console.log(prevState);
  console.log("送信データ:", { name, email, message });

  // ここでバックエンドやDBに送信する処理を実装可能
  return { success: `送信しました: ${name} (${email}) - ${message}` };
}
