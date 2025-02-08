"use client";

import { formSubmit } from "@/actions/form-submit";
import { Box, Button, FormControl, Input, Text, Textarea, VStack } from "@yamada-ui/react";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

export const Form = () => {
  const [state, formAction] = useFormState(formSubmit, {});

  // バリデーションエラーの状態管理
  const [errors, setErrors] = useState<{ name?: string[]; email?: string[]; message?: string[] }>({});

  useEffect(() => {
    if (state.errors) {
      setErrors(state.errors);
    } else {
      setErrors({});
    }
  }, [state]);

  return (
    <VStack as="form" action={formAction}>
      <FormControl label="お名前">
        <Input type="text" name="name" placeholder="山田太郎" />
        {errors.name && <Text color="danger">{errors.name.join(", ")}</Text>}
      </FormControl>

      <FormControl label="メールアドレス">
        <Input type="email" name="email" placeholder="hoge@email.com" />
        {errors.email && <Text color="danger">{errors.email.join(", ")}</Text>}
      </FormControl>

      <FormControl label="内容">
        <Textarea name="message" placeholder="お問い合わせ内容" />
        {errors.message && <Text color="danger">{errors.message.join(", ")}</Text>}
      </FormControl>

      <Box>
        <Button type="submit">送信</Button>
      </Box>

      {/* フォーム送信後の成功メッセージを表示 */}
      {state.success && <Text color="success">{state.success}</Text>}
    </VStack>
  );
};
