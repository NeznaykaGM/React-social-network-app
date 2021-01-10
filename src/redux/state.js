import {rerenderEntireTree} from "../render"

let state = {
    profilePage: {
        posts: [
            {id: 1, message: `Hi, how are you ?`, likesValue: 54},
            {id: 2, message: `Happy birthday, for me`, likesValue: 21},
            {id: 3, message: `It's my first post!`, likesValue: 67},
        ],
        newPostText: '',
    },
    messengerPage: {
        dialogs: [
            {id: 1, name: 'Alexey', imgSrc: 'https://i.redd.it/wellr7jjiv011.jpg'},
            {
                id: 2,
                name: 'Andrey',
                imgSrc: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_014.webp'
            },
            {id: 3, name: 'Maxim', imgSrc: 'https://i.pinimg.com/736x/f5/ec/14/f5ec1493f8cf15a2f2d017ac9afe628d.jpg'},
            {
                id: 4,
                name: 'Egor',
                imgSrc: 'https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest/top-crop/width/360/height/450?cb=20180911165028'
            },
            {
                id: 5,
                name: 'Alexander',
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU'
            },
            {
                id: 6,
                name: 'Mikhail',
                imgSrc: 'https://c0.klipartz.com/pngpicture/164/223/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'
            },
        ],
        messages: [
            {id: 1, message: `Hello`},
            {id: 2, message: `How are you?`},
            {id: 3, message: `Happy birthday, for me`},
            {id: 4, message: 'Egor'},
            {id: 5, message: `This is my firth post`},
        ],
        newMessage: '',
    },
    friendsNav: [
        {id: 1, name: 'Alexey', imgSrc: 'https://i.redd.it/wellr7jjiv011.jpg'},
        {id: 3, name: 'Maxim', imgSrc: 'https://i.pinimg.com/736x/f5/ec/14/f5ec1493f8cf15a2f2d017ac9afe628d.jpg'},
        {
            id: 4,
            name: 'Egor',
            imgSrc: 'https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest/top-crop/width/360/height/450?cb=20180911165028'
        },
        {
            id: 2,
            name: 'Andrey',
            imgSrc: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_014.webp'
        },
        {
            id: 5,
            name: 'Alexander',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU'
        },
        {
            id: 6,
            name: 'Mikhail',
            imgSrc: 'https://c0.klipartz.com/pngpicture/164/223/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'
        },
    ]
}

if (localStorage.getItem("state")){
     state = JSON.parse(localStorage.getItem("state"))
}


window.state = state; /*TODO*/

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText,
        likesValue: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''

    rerenderEntireTree(state);
}

export let addMessage = () => {
    let addNewMassage = {
        id: state.messengerPage.messages.length + 1,
        message: state.messengerPage.newMessage,
    }

    state.messengerPage.messages.push(addNewMassage);
    state.messengerPage.newMessage = ''
    rerenderEntireTree(state);
}

export let addTextMessage = (text) => {
    state.messengerPage.newMessage = text
    rerenderEntireTree(state);
}

export let addTextPost = (text) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state);
}

export default state