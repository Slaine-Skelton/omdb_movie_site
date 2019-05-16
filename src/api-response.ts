interface ITVShowDetails{
    Title:string;
    Year:string;
    Genre: string;
    Released: string;
    totalSeasons:string;
    MyReview:string;
    Ratings: ITVShowRatings[];
}

interface ITVShowRatings {
    Source: string;
    Value: string;
}