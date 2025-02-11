import { z } from "zod";

// 🔹 Zod のバリデーションスキーマを定義
export const submitSchema = z
  .object({
    name: z.string().min(1, "名前は必須です"),
    email: z.string().email("正しいメールアドレスを入力してください"),
    message: z.string().min(10, "10文字以上入力してください"),
  })
  .brand("SubmitSchema");

export type SubmitSchemaType = z.infer<typeof submitSchema>;

export const loginSchema = z
  .object({
    email: z.string().email("正しいメールアドレスを入力してください"),
    password: z
      .string()
      .trim()
      .min(8, "8文字以上のパスワードにしてください"),
  })
  .brand("LoginSchema");

export type LoginSchemaType = z.infer<typeof loginSchema>;
