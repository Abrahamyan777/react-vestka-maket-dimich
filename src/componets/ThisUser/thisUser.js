import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ThisUser = () => {

    const {id} = useParams()

    const [post, setPost] = useState()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        //     .then(response => {
        //         this.props.SetUserProfileAC(response.data)
        //     })
    },[id])

    console.log(id);
    console.log(post);
    return (
        <>    

            <div>This User {id}</div>
            <h3>{post &&
                post.fullName}</h3>
        </>

    )
}

export {ThisUser}