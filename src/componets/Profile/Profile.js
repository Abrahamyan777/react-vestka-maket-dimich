import { useParams } from 'react-router-dom';
import MyPostsContener from './MyPosts/MyPostsContener';
import ProfileInfo from './ProfileInfo/ProfileInfo';




function Profile(props) {
  // console.log(useParams());
  console.log(props);

    return (
      <>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContener  />
      </>
    )
}

export default Profile;