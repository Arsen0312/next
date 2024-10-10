import { NextResponse } from 'next/server';
import {Tour} from "@/app/api/tours/type";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const response = await fetch(`https://traveltok.pythonanywhere.com/tours-api/${id}/`);
        // https://traveltok.pythonanywhere.com/tours-api/1/

        if (!response.ok) {
            throw new Error(`Ошибка при получении данных: ${response.status}`);
        }

        const data: Tour = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return NextResponse.json({ error: 'Ошибка при получении данных' }, { status: 500 });
    }
}