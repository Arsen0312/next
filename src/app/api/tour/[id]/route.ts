import { NextResponse } from 'next/server';
import {TTour} from "@/app/api/tour/[id]/type";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const response = await fetch(`https://baktyiar.pythonanywhere.com/api/index/regions/${id}/tours/`);

        if (!response.ok) {
            throw new Error(`Ошибка при получении данных: ${response.status}`);
        }

        const data: TTour = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return NextResponse.json({ error: 'Ошибка при получении данных' }, { status: 500 });
    }
}