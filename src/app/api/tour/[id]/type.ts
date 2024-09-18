export type TBaseSchemaResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: TTour[]
}

export type TTour = {
    id: number,
    headline_img: string,
    title: string,
    description: string,
    participants_price: string,
    price: string,
    discount_price: null,
    author: {
        id: number,
        username: string,
        avatar: string
    },
    rating_user: false,
    middle_star: number,
    date_tour: [
        {
            id: 1,
            start_date: string,
            end_date: string
        }
    ]
};
