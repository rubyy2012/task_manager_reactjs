
import avatar from '../assets/images/avatar.jpg'
const ListTasksApi = {
    Backlog: [
        {
            id: 1,
            name: 'New Header Image',
            date: 'Jun 17',
            labelColors : [
                {
                    id: 1, 
                    color: '#6D67E4'
                } ,
                {
                    id: 2, 
                    color: '#F49D1A'
                } ,
                {
                    id: 3, 
                    color: '#80489C'
                }
            ],
            members: [
                {
                    id:1,
                    linkAvatar:avatar
                },
                {
                    id:2,
                    linkAvatar:avatar
                }
            ]
        },
        {
            id: 2,
            name: 'Wireframe for App',
            date: 'Jun 19',
            labelColors : [
                {
                    id: 1, 
                    color: '#B2A4FF'
                } ,
                {
                    id: 2, 
                    color: '#F49D1A'
                } ,
                {
                    id: 3, 
                    color: '#95CD41'
                }],
            members: [
                {
                    id:1,
                    linkAvatar:avatar
                },
                {
                    id:2,
                    linkAvatar:avatar
                }
            ]
        },
        {
            id: 3,
            name: 'Brand Logo Design',
            date: 'Jun 20',
            labelColors : [
                {
                    id: 1, 
                    color: '#CC0E74'
                } ,
                {
                    id: 2, 
                    color: '#383E56'
                } ,
                {
                    id: 3, 
                    color: '#F96D80'
                }
            ],
            members: [
                {
                    id:1,
                    linkAvatar:avatar
                },
                {
                    id:2,
                    linkAvatar:avatar
                }
            ]
        },
    ],
    Todos: [
    {
        id: 4,
        name: 'New Header Image',
        date: 'Jun 17',
        labelColors : [
            {
                id: 1, 
                color: '#6D67E4'
            } ,
            {
                id: 2, 
                color: '#F49D1A'
            } ,
            // {
            //     id: 3, 
            //     color: '#80489C'
            // }
        ],
        members: [
            {
                id:1,
                linkAvatar:avatar
            },
            {
                id:2,
                linkAvatar:avatar
            }
        ]
    },
    {
        id: 5,
        name: 'Wireframe for App',
        date: 'Jun 19',
        labelColors : [
            // {
            //     id: 1, 
            //     color: '#B2A4FF'
            // } ,
            {
                id: 2, 
                color: '#F49D1A'
            } ,
            {
                id: 3, 
                color: '#95CD41'
            }],
        members: [
            {
                id:1,
                linkAvatar:avatar
            },
            {
                id:2,
                linkAvatar:avatar
            }
        ]
    },
    {
        id: 6,
        name: 'Brand Logo Design',
        date: 'Jun 20',
        labelColors : [
            {
                id: 1, 
                color: '#CC0E74'
            } ,
            // {
            //     id: 2, 
            //     color: '#383E56'
            // } ,
            // {
            //     id: 3, 
            //     color: '#F96D80'
            // }
        ],
        members: [
            {
                id:1,
                linkAvatar:avatar
            },
            {
                id:2,
                linkAvatar:avatar
            }
        ]
    },
    ],
    InProgress: [
        {
            id: 7,
            name: 'Updating modules',
            comments: 3,
            attachments:1,
            completed: 6,
            date: 'Jun 18',
            labelColors : [
                // {
                //     id: 1, 
                //     color: '#576CBC'
                // } ,
                {
                    id: 2, 
                    color: '#383E56'
                } ,
                {
                    id: 3, 
                    color: '#1C82AD'
                }],
            members: [
                {
                    id:1,
                    linkAvatar:avatar
                },
                {
                    id:2,
                    linkAvatar:avatar
                }
            ]
        },
        {
            id: 8,
            name: 'Create plugins',
            date: 'Jun 19',
            comments: 8,
            attachments:5,
            completed: 7,
            labelColors : [
                {
                    id: 1, 
                    color: '#FB2576'
                } ,
                {
                    id: 2, 
                    color: '#FC4F00'
                } ,
                // {
                //     id: 3, 
                //     color: '#C65D7B'
                // }
            ],
            members: [
                {
                    id:1,
                    linkAvatar:avatar
                },
                {
                    id:2,
                    linkAvatar:avatar
                }
            ]
        }
    ],
    Completed: [
        {
            id: 9,
            name: 'New Background',
            date: 'Jun 19',
            comments: 5,
            attachments:7,
            completed: 3,
            labelColors : [
                {
                    id: 1, 
                    color: '#C65D7B'
                } ,
                {
                    id: 2, 
                    color: '#F49D1A'
                } ,
                {
                    id: 3, 
                    color: '#F96D80'
                }],
        members: [
            {
                id:1,
                linkAvatar:avatar
            },
            {
                id:2,
                linkAvatar:avatar
            }
        ]
        }
    ]
}
export default ListTasksApi;




// const ListTasksApi = [
//     {
//         id: 0,
//         name :'Backlogs',
//         lists : [
//             {
//                 id: 1,
//                 name: 'New Header Image',
//                 date: 'Jun 17',
//                 labelColors : [
//                     {
//                         id: 1, 
//                         color: '#6D67E4'
//                     } ,
//                     {
//                         id: 2, 
//                         color: '#F49D1A'
//                     } ,
//                     {
//                         id: 3, 
//                         color: '#80489C'
//                     }
//                 ],
//                 members: [
//                     {
//                         id:1,
//                         linkAvatar:avatar
//                     },
//                     {
//                         id:2,
//                         linkAvatar:avatar
//                     }
//                 ]
//             },
//             {
//                 id: 2,
//                 name: 'Wireframe for App',
//                 date: 'Jun 19',
//                 labelColors : [
//                     {
//                         id: 1, 
//                         color: '#B2A4FF'
//                     } ,
//                     {
//                         id: 2, 
//                         color: '#F49D1A'
//                     } ,
//                     {
//                         id: 3, 
//                         color: '#95CD41'
//                     }],
//                 members: [
//                     {
//                         id:1,
//                         linkAvatar:avatar
//                     },
//                     {
//                         id:2,
//                         linkAvatar:avatar
//                     }
//                 ]
//             },
//             {
//                 id: 3,
//                 name: 'Brand Logo Design',
//                 date: 'Jun 20',
//                 labelColors : [
//                     {
//                         id: 1, 
//                         color: '#CC0E74'
//                     } ,
//                     {
//                         id: 2, 
//                         color: '#383E56'
//                     } ,
//                     {
//                         id: 3, 
//                         color: '#F96D80'
//                     }
//                 ],
//                 members: [
//                     {
//                         id:1,
//                         linkAvatar:avatar
//                     },
//                     {
//                         id:2,
//                         linkAvatar:avatar
//                     }
//                 ]
//             },
//         ],
//     },
//     {
//         id:1,
//         name: 'Todos',
//         lists:[
//             {
//                 id: 4,
//                 name: 'New Header Image',
//                 date: 'Jun 17',
//                 labelColors : [
//                     {
//                         id: 1, 
//                         color: '#6D67E4'
//                     } ,
//                     {
//                         id: 2, 
//                         color: '#F49D1A'
//                     } ,
//                     // {
//                     //     id: 3, 
//                     //     color: '#80489C'
//                     // }
//                 ],
//                 members: [
//                     {
//                         id:1,
//                         linkAvatar:avatar
//                     },
//                     {
//                         id:2,
//                         linkAvatar:avatar
//                     }
//                 ]
//             },
//             {
//                 id: 5,
//                 name: 'Wireframe for App',
//                 date: 'Jun 19',
//                 labelColors : [
//                     // {
//                     //     id: 1, 
//                     //     color: '#B2A4FF'
//                     // } ,
//                     {
//                         id: 2, 
//                         color: '#F49D1A'
//                     } ,
//                     {
//                         id: 3, 
//                         color: '#95CD41'
//                     }],
//                 members: [
//                     {
//                         id:1,
//                         linkAvatar:avatar
//                     },
//                     {
//                         id:2,
//                         linkAvatar:avatar
//                     }
//                 ]
//             },
//             {
//                 id: 6,
//                 name: 'Brand Logo Design',
//                 date: 'Jun 20',
//                 labelColors : [
//                     {
//                         id: 1, 
//                         color: '#CC0E74'
//                     } ,
//                     // {
//                     //     id: 2, 
//                     //     color: '#383E56'
//                     // } ,
//                     // {
//                     //     id: 3, 
//                     //     color: '#F96D80'
//                     // }
//                 ],
//                 members: [
//                     {
//                         id:1,
//                         linkAvatar:avatar
//                     },
//                     {
//                         id:2,
//                         linkAvatar:avatar
//                     }
//                 ]
//             },
//             ],
//             InProgress: [
//                 {
//                     id: 7,
//                     name: 'Updating modules',
//                     comments: 3,
//                     attachments:1,
//                     completed: 6,
//                     date: 'Jun 18',
//                     labelColors : [
//                         // {
//                         //     id: 1, 
//                         //     color: '#576CBC'
//                         // } ,
//                         {
//                             id: 2, 
//                             color: '#383E56'
//                         } ,
//                         {
//                             id: 3, 
//                             color: '#1C82AD'
//                         }],
//                     members: [
//                         {
//                             id:1,
//                             linkAvatar:avatar
//                         },
//                         {
//                             id:2,
//                             linkAvatar:avatar
//                         }
//                     ]
//                 },
//                 {
//                     id: 8,
//                     name: 'Create plugins',
//                     date: 'Jun 19',
//                     comments: 8,
//                     attachments:5,
//                     completed: 7,
//                     labelColors : [
//                         {
//                             id: 1, 
//                             color: '#FB2576'
//                         } ,
//                         {
//                             id: 2, 
//                             color: '#FC4F00'
//                         } ,
//                         // {
//                         //     id: 3, 
//                         //     color: '#C65D7B'
//                         // }
//                     ],
//                     members: [
//                         {
//                             id:1,
//                             linkAvatar:avatar
//                         },
//                         {
//                             id:2,
//                             linkAvatar:avatar
//                         }
//                     ]
//                 }
//             ],
//     },
//     {
//         id: 2,
//         name: 'Completed',
//         lists: [
//             {
//                 id: 9,
//                 name: 'New Background',
//                 date: 'Jun 19',
//                 comments: 5,
//                 attachments:7,
//                 completed: 3,
//                 labelColors : [
//                     {
//                         id: 1, 
//                         color: '#C65D7B'
//                     } ,
//                     {
//                         id: 2, 
//                         color: '#F49D1A'
//                     } ,
//                     {
//                         id: 3, 
//                         color: '#F96D80'
//                     }],
//             members: [
//                 {
//                     id:1,
//                     linkAvatar:avatar
//                 },
//                 {
//                     id:2,
//                     linkAvatar:avatar
//                 }
//             ]
//             }
//         ]
//     }
// ]