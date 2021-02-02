import React, {useEffect} from 'react';
import style from './Users.module.css';
import {
    Avatar, Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import {RiUserFollowLine, RiUserSharedLine, RiUserUnfollowLine} from "react-icons/all";
import * as axios from "axios";
import {AiOutlineSend} from "react-icons/ai";


const Users = ({users,setUsers, follow, unfollow }) => {
    // let getUsers = () => {
    //     if (!users.length) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users?count=20')
    //             .then(response => {
    //                 let users = response.data.items.map((user) => ({
    //                     ...user,
    //                     fullName: user.name,
    //                     imgSrc:user.photos.small,
    //                     location: {
    //                         country: '',
    //                         city: ''
    //                     }
    //                 }))
    //                 setUsers(users)
    //             })
    //     }
    // }
    useEffect(() => {
        if (!users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=10')
                .then(response => {
                    let users = response.data.items.map((user) => ({
                        ...user,
                        fullName: user.name,
                        imgSrc:user.photos.small,
                        location: {
                            country: '',
                            city: ''
                        }
                    }))
                    setUsers(users)
                })
        }
    }, [users])




    return (
        <List>
            {/*<IconButton children={<RiUserSharedLine/>}*/}
            {/*            color={'primary'}*/}
            {/*            size={'medium'}*/}
            {/*            onClick={getUsers}/>*/}
            {
                users.map(user => <>
                    <ListItem className={style.user}>
                        <ListItemAvatar>
                            <Avatar>
                                {
                                    user.imgSrc
                                        ? <img src={user.imgSrc} alt="Avatar" className='avatar'/>
                                        : <Avatar alt="Remy Sharp" className={style.colorIcon} >{user.fullName[0].toUpperCase()}</Avatar>
                                }
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.fullName} secondary={user.status}/>

                        <ListItemSecondaryAction style={{display: 'flex', alignItems: 'center'}}>
                            <Typography
                                variant='caption'>{`${user.location.country}, ${user.location.city}`}</Typography>
                            {user.followed
                                ? <IconButton color={"secondary"} children={<RiUserUnfollowLine/>}
                                              onClick={() => unfollow(user.id)}/>
                                : <IconButton children={<RiUserFollowLine/>} color={"primary"}
                                              onClick={() => follow(user.id)}/>}
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>

                </>)
            }
        </List>
    );
}
export default Users;
