// form.tsx
"use client";

import { login } from "@/actions/login";
import { loginSchema } from "@/schema/form";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Box, Button, FormControl, Input, ui } from "@yamada-ui/react";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export function LoginForm() {
    const [lastResult, action, pending] = useFormState(login, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: loginSchema });
        },
        shouldValidate: "onBlur",
    });

    return (
        <ui.form display="flex" flexDir="column" gap="md" {...getFormProps(form)} action={action} noValidate>
            <FormControl label="Email" invalid={!!fields.email.errors} errorMessage={fields.email.errors}>
                <Input {...getInputProps(fields.email, { type: 'email' })} disabled={pending} />
            </FormControl>
            <FormControl label="Password" invalid={!!fields.password.errors} errorMessage={fields.password.errors}>
                <Input {...getInputProps(fields.password, { type: 'password' })} disabled={pending} />
            </FormControl>
            <Box>
                <Button type="submit" loading={pending}>Login</Button>
            </Box>
        </ui.form>
    );
}