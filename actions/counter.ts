"use server"
export async function increment(prevState: number, formData: FormData) {
    console.log(formData, prevState);

    return prevState + 1;
}