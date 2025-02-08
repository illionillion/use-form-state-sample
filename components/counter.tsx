"use client";

import { increment } from "@/actions/counter";
import { Button, Text, VStack } from "@yamada-ui/react";
import { useFormState } from "react-dom";

export default function Counter() {
    const [count, formAction] = useFormState(increment, 0);

    return (
        <VStack as="form" action={formAction}>
            <Text>カウント: {count}</Text>
            <Button type="submit">増やす</Button>
        </VStack>
    );
}
