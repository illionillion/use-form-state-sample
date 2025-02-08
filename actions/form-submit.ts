"use server"

export async function formSubmit(prevState: string, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log(prevState);

  // ここでバックエンドやDBに送信する処理を実装可能
  console.log({ name, email, message });

  return `送信しました: ${name} (${email}) - ${message}`;
}
