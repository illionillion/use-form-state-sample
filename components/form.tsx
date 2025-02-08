"use client"

import { formSubmit } from "@/actions/form-submit";
import { Box, Button, FormControl, Input, Text, Textarea, VStack } from "@yamada-ui/react"
import { useFormState } from "react-dom";

export const Form = () => {

    // useFormStateでフォームの状態を管理
    const [state, formAction] = useFormState(formSubmit, "");

    return <VStack as="form" action={formAction}>
        <FormControl label="お名前">
            <Input type="text" name="name" placeholder="山田太郎" />
        </FormControl>
        <FormControl label="メールアドレス">
            <Input type="email" name="email" placeholder="hoge@email.com" />
        </FormControl>
        <FormControl label="内容">
            <Textarea name="message" placeholder="お問い合わせ内容" />
        </FormControl>
        <Box>
            <Button type="submit">送信</Button>
        </Box>

        {/* フォーム送信後の状態を表示 */}
        {state && <Text color="success">{state}</Text>}
    </VStack>
}