import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Получение данных с внешнего API

        const response = await fetch("https://traveltok.pythonanywhere.com/api/tours/");

        // Проверка, успешен ли ответ
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Преобразование ответа в JSON
        const data = await response.json();

        // Возвращаем данные в формате JSON
        return NextResponse.json(data);
    } catch (error) {
        // Обработка ошибок
        console.error('Ошибка при получении данных:', error);
        return NextResponse.json({ error: 'Ошибка при получении данных' }, { status: 500 });
    }
}