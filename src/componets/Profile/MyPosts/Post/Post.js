import css from './Post.module.css'


function Post(post) {


    return (
        <div className={css.blockPosts}>
            <div>
                <img  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt=""/>
                Messages :  {post.m}
            </div>
            <div>
               Like :  {post.like}
            </div>
        </div>
    )
}

export default Post;