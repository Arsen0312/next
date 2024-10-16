import { $api } from "@/shared/api";

type TMode = "login" | "register";

type TRegister = {
    email: string;
    username: string;
    password: string;
}

type TLogin = {
    email: string;
    password: string;
}

type TBody = TLogin | TRegister;

export const authorization = async (mode: TMode, body: TBody) => {
    const endpoint = mode === "login" ? "/user/login" : "/user/register";

    try {
        const res = await fetch(`${$api}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        // Проверка на успешный запрос
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Ошибка при запросе');
        }

        return await res.json();

    } catch (e) {
        return { error: e instanceof Error ? e.message : 'Неизвестная ошибка' };
    }
};