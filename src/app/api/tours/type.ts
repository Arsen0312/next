export type TourMember = {
    username: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export type Ratings = {
    user: {
        id: number,
        username: string,
        first_name: string,
        last_name: string,
        avatar: string
    },
    rating: number,
    comment: string,
    created_at: string
}

export type Tour = {
    id: number;
    creator: {
        username: string,
        first_name: string,
        last_name: string,
        avatar: string
    },
    members: TourMember[],
    banner: string,
    title: string,
    category: string,
    description: string,
    region: string,
    language: "ru" | "kg" | "en",
    price: number,
    ratings: Ratings[],
    average_rating:number,
    views_qty: number,
    members_qty: number,
    duration: number,
    booking_conditions: string,
    favorited_by: number[]
}