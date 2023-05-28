import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import ProfileReduser, { SetUserProfileAC } from '../../redux/profile-reduser'
import { useParams } from 'react-router-dom';




class ProfileConteiner extends React.Component {

    componentDidMount() {
        // debugger
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.SetUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <>
                <Profile  {...this.props} porfile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    profile : state.ProfileReduser.profile
})


export default connect(mapStateToProps, {SetUserProfileAC})(ProfileConteiner);