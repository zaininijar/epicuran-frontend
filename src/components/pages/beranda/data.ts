export const RecipePostList: Array<RecipePostListType> = [
    {
        isPinned: true,
        id: "EoAFbKlRZcVSeAseZSbAUfCGZOXMzx",
        author: {
            name: 'Alexius Kenriko Salim',
            username: '@alexkriko',
            profilePictureUrl: 'https://source.unsplash.com/random/VbURzqtzVHKgXRUxgOuizrH',
        },
        pictureUrl: 'https://img.taste.com.au/qRDdmfsk/w720-h480-cfill-q80/taste/2022/09/healthy-tacos-recipe-181113-1.jpg',
        content: `
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa, porro velit suscipit, labore repellendus sint cupiditate eaque eius alias possimus eos recusandae perferendis dolores ipsum amet! Sint.
            <br/>
            <br/>
            Get started here:
            <a style="color: #FFA800" href="https://example-url.com/recipe">https://example-url.com/recipe</a>
        `,
        liked: 5,
        commented: 3,
        createdAt: 'Apr 10, 2023'
    },
    {
        id: "bhitfUpwGlYIHQiVGkogBrhwRYuBdfO",
        isPinned: false,
        author: {
            name: 'Habib Erdian',
            username: '@habiberdian',
            profilePictureUrl: 'https://source.unsplash.com/random/ABCD1234',
        },
        pictureUrl: '/images/posts/Italian chicken.jpg',
        content: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        liked: 10,
        commented: 8,
        createdAt: 'May 5, 2023',
        detail: {
            comments: [
                {
                    id: "wPtNWYdOGqKu",
                    name: "Linnie Moreno",
                    username: "@JeremiahMaxwell",
                    profilePictureUrl: 'https://source.unsplash.com/random/ABCD1234',
                    comment: "Nice recipe for creating a",
                    createdAt: 'May 5, 2023',
                    reply: [
                        {
                            name: "Rhoda Wallace",
                            username: "@AngelWarner",
                            comment: "Nice recipe for creating a",
                            profilePictureUrl: 'https://source.unsplash.com/random/ABCD1234',
                            createdAt: 'May 5, 2023',
                        },
                    ]
                },
                {
                    id: "PUyAgEyprvnO",
                    name: "Christina Sims",
                    username: "@MarionCastro",
                    comment: "Nice recipe for creating a",
                    profilePictureUrl: 'https://source.unsplash.com/random/ABCD1234',
                    createdAt: 'May 5, 2023',
                }
            ]
        }
    },
    {
        id: "EaxDUdJOlkgvkTnYEFitzOVjmKFPtWm",
        isPinned: false,
        author: {
            name: 'Jane Smith',
            username: '@jane_smith',
            profilePictureUrl: 'https://source.unsplash.com/random/EFGH5678',
        },
        pictureUrl: '/images/posts/Salted Caramel.jpg',
        content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        liked: 15,
        commented: 7,
        createdAt: 'Jun 20, 2023'
    },
    {
        isPinned: true,
        id: "BAmzuKLvFEuXFIaBchzkWDzZVFNwtu",
        author: {
            name: 'Sam Brown',
            username: '@sam_brown',
            profilePictureUrl: 'https://source.unsplash.com/random/UVWXYZ1234',
        },
        pictureUrl: 'https://img.taste.com.au/5osiH6Gx/w720-h480-cfill-q80/taste/2017/01/easy-thai-noodle-salad-120069-1.jpg',
        content: `Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.`,
        liked: 8,
        commented: 5,
        createdAt: 'Jul 15, 2023'
    },
    {
        id: "GWrEYGCPrekwKQGeYvzCxcMEhrcoakj",
        isPinned: false,
        author: {
            name: 'Eva Green',
            username: '@eva_green',
            profilePictureUrl: 'https://source.unsplash.com/random/GHIJ5678',
        },
        pictureUrl: 'https://img.taste.com.au/dYzEQRcZ/w720-h480-cfill-q80/taste/2019/01/green-kiwi-smoothie-146651-1.jpg',
        content: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
        liked: 12,
        commented: 6,
        createdAt: 'Aug 5, 2023'
    },
    {
        isPinned: true,
        id: "qtDpfyLlauFCixhkwlwTmXBGqZaCJR",
        author: {
            name: 'Chris Taylor',
            username: '@chris_taylor',
            profilePictureUrl: 'https://source.unsplash.com/random/WXYZ5678',
        },
        pictureUrl: 'https://img.taste.com.au/ehjbgBTL/w720-h480-cfill-q80/taste/2016/11/how-to-bake-with-mangoes-110621-2.jpeg',
        content: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
        liked: 20,
        commented: 10,
        createdAt: 'Sep 10, 2023'
    },

    {
        id: "liRJkjMkYCMWBWNGzhYLofSRsBqRknn",
        isPinned: false,
        author: {
            name: 'Michael White',
            username: '@michael_white',
            profilePictureUrl: 'https://source.unsplash.com/random/KLMN1234',
        },
        pictureUrl: 'https://img.taste.com.au/5kbiVa6Z/w720-h480-cfill-q80/taste/2020/07/lamb-gozleme-one-pan-pie-recipe-163922-2.jpg',
        content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.`,
        liked: 8,
        commented: 4,
        createdAt: 'Oct 15, 2023'
    },
    {
        isPinned: true,
        id: "korWnkrNzPlUaxPpMEPKdfdzSHLUNC",
        author: {
            name: 'Sophie Miller',
            username: '@sophie_miller',
            profilePictureUrl: 'https://source.unsplash.com/random/PQRS5678',
        },
        pictureUrl: 'https://img.taste.com.au/qRDdmfsk/w720-h480-cfill-q80/taste/2022/09/healthy-tacos-recipe-181113-1.jpg',
        content: `Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
        liked: 18,
        commented: 9,
        createdAt: 'Nov 5, 2023'
    },
    {
        id: "UOaUQgrMmNvnEPTyNqKmjVLKpHYFvDy",
        isPinned: false,
        author: {
            name: 'David Johnson',
            username: '@david_johnson',
            profilePictureUrl: 'https://source.unsplash.com/random/XYZA5678',
        },
        pictureUrl: 'https://img.taste.com.au/fmfGrIBX/w720-h480-cfill-q80/taste/2016/11/chocolate-caramel-slice-16643-1.jpeg',
        content: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.`,
        liked: 14,
        commented: 7,
        createdAt: 'Dec 10, 2023'
    },
]

export type RecipePostListType = {
    isPinned: boolean
    id: string
    author: {
        name: string
        username: string
        profilePictureUrl: string
    }
    pictureUrl: string
    content: string
    liked: number
    commented: number
    createdAt: string
    detail?: {
        comments: CommentsType[]
    }
}

export type CommentsType = {
    id: string
    name: string
    username: string
    comment: string
    profilePictureUrl: string
    createdAt: string
    reply?: {
        name: string
        username: string
        comment: string
        profilePictureUrl: string
        createdAt: string
    }[]
}