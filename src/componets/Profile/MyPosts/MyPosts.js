import { useRef } from 'react';
import css from './MyPosts.module.css'
import Post from './Post/Post';


function MyPosts (props) {
    // console.log(props.state.newPostText);

    const postsElement = props.state.posts.map(el => <Post key={el.id} m={el.messages} like={el.likeeCount} />)

    let PostsRef = useRef()

    let addPost = () => {
        props.onAddPost()
    }
    
    let onChangeText = () => {
        let text = PostsRef.current.value
        props.onPostChangeText(text)        
    }
    
    return (
        <div> 
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea  
                        ref={PostsRef}
                        value={props.state.newPostText}
                        onChange={ onChangeText }
                        />
                </div>
                <div>
                    <button onClick={ addPost }>Add posts</button>
                </div>
                <div className={css.postsItem}>
                    {postsElement} 
                </div>
            </div>
        </div>
    )
}

export default MyPosts;