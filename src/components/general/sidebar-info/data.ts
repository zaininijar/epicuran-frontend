export type ProfileListDataType = {
    name: string;
    username: string;
    picture_path: string;
    coverImageUrl: string;
}

export const ProfileListData: Array<ProfileListDataType> = [
    {
        name: "Ada Mu",
        username: "@ada_mu",
        picture_path: "/images/profile-pic-1.png",
        coverImageUrl: "https://source.unsplash.com/random/tIAzOZlwqiAq",
    },
    {
        name: "Jane Doe",
        username: "@jane_doe",
        picture_path: "/images/profile-pic-2.png",
        coverImageUrl: "https://source.unsplash.com/random/chAQyqrDtyAf",
    },
    {
        name: "John Week",
        username: "@john_week",
        picture_path: "/images/profile-pic-3.png",
        coverImageUrl: "https://source.unsplash.com/random/DUKcOhnqRijJ",
    },
]