import { faker } from '@faker-js/faker';
import React from 'react'
import {View, Text} from 'react-native'
import {USERS} from './users'

export const POSTS = [
    {
    cat: 'Cat M',
    catdes: 'something',
    imageUrl: faker.image.abstract(),
    user: USERS[0].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[0].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat P',
        catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[1].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[1].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat O',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[2].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[2].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat E',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[3].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[3].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat Y',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[4].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[4].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat T',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[5].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[5].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat B',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[6].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[6].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat G',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[7].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[7].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat F',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[8].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[8].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat D',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[9].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[9].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe',
            
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat S',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[10].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[10].image,
    comments: [
       
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },
    {
        cat: 'Cat A',
            catdes: 'something',
    imageUrl: faker.image.abstract(1234, 2345, true),
    user: USERS[11].user,
    likes: faker.datatype.number({ min: 0, max: 10000000}),
    caption: 'hello I am a fake caption ... lol :)',
    profile_picture: USERS[11].image,
    comments: [
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
        {
            user: faker.internet.userName(),
            comment: 'Hello again! I am a fake comment .. hehe'
        },
    ]
    },

]