import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
// import {AiOutlineSend} from 'react-icons/ai'
import {MdSend} from 'react-icons/md'

const MyPosts = (props) => {

    let text = 'Hello'

    let postElements = props.postsData.map(element => <Post message={element.message} likesValue={element.likesValue}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onChangePostInput = () => {
        let text = newPostElement.current.value;
        props.addTextPost(text);
    }

    return (
        <div className={style.myPosts}>
            <h3>My Posts</h3>
            <div className={style.inputItem}>
                <div>
                    <Input className={style.textareaAddPost} color={'primary'} onChange={onChangePostInput} name="Add new post" placeholder="Write a post..." inputRef={newPostElement} value={props.newPostText} />
                    {/*<textarea className={style.texareaAddPost} onChange={onChangePostInput} name="Add new post" placeholder="Write a message..." ref={newPostElement} value={props.newPostText}/>*/}
                </div>
                <div>
                    <Button variant={'text'} color={'primary'} size={'medium'} endIcon={<MdSend/>} onClick={addPost} disabled={!props.newPostText}>Send</Button>
                    {/*<button className={style.buttonAddPost} onClick={addPost}  disabled={!props.newPostText}> Add</button>*/}
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts