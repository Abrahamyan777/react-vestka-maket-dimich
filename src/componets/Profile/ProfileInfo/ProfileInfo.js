import { useParams } from "react-router-dom";
import Preloder from "../../commp/preloder/Preloder";
import css from "./ProfileInfo.module.css"

function ProfileInfo(props) {
    // console.log(props);
    
    // console.log(useParams());

    if(!props.profile){
        return <Preloder />
    }
    
    return(
        <div>
            <div className={css.imges}>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt=""/>
            </div> 
            <div>
                <p>{props.profile.fullName}</p>
                <img src={props.profile.photos.small} alt="" />
            </div>
        </div>
    )
}

export default ProfileInfo;