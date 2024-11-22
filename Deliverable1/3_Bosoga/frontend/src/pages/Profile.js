import React from 'react';
import { ProfileList } from './ProfileList';
import { SavedList } from '../components/SavedList';
import { useNavigate } from "react-router-dom";

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            friends: []
        };
        this.fetchFriends = this.fetchFriends.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.getRandomProfilePic = this.getRandomProfilePic.bind(this);
    }

    componentDidMount() {
        const passedProfile = JSON.parse(sessionStorage.getItem("profile"));
        if (passedProfile) {
            this.setState({ profile: passedProfile }, this.fetchFriends);
        }
    }

    getRandomProfilePic() {
        const randomNumber = Math.floor(Math.random() * (23 - 5 + 1)) + 5; 
        return `/assets/images/defaultProfiles/Picture${randomNumber}.png`;
    }

    handleEditClick() {
        this.props.navigate(`/editprofile/${this.state.profile._id}`);
    }

    async fetchFriends() {
        try {
            const response = await fetch(`/userFriends/${this.state.profile._id}`);
            if (response.ok) {
                const friendsData = await response.json();
                this.setState({ friends: friendsData[0].friendsList });
            } else {
                console.error('Failed to fetch friends:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching friends:', error);
        }
    }

    render() {
        const { profile, friends } = this.state;

        return (
            <div style={{ backgroundColor: '#3F6751', padding: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                    <div style={{
                        textAlign: 'center',
                        height: '180px',
                        width: '180px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginRight: '20px',
                        border: '3px solid #24392F',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
                    }}>
                        {profile ? (
                            <img 
                            src={profile.profilePic || this.getRandomProfilePic()}
                                
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                alt="Profile"
                                onError={(e) => { e.target.onerror = null; e.target.src = './assets/images/default-profile.png'; }}
                            />
                        ) : (
                            <div style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }} />
                        )}
                    </div>

                    <button style={{
                        fontSize: '18px',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        backgroundColor: '#24392F',
                        cursor: 'pointer',
                        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s'
                    }}
                    onClick={this.handleEditClick}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e2d26'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#24392F'}
                    >
                        Edit Profile
                    </button>
                </label>

                <div style={{ display: 'flex', backgroundColor: '#3F6751', alignItems: 'center', paddingTop: '15px', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', backgroundColor: '#24392F', alignItems: 'center', width: '650px', borderRadius: '8px', padding: '20px' }}>
                        {profile ? (
                            <>
                                <h3 style={{ color: 'white' }}>{profile.fullName}</h3>
                                <h3 style={{ color: 'white' }}>@{profile.userName}</h3>
                                <h3 style={{ color: 'white' }}>Pronouns: {profile.pronouns}</h3>
                                <h3 style={{ color: 'white' }}>{profile.bio}</h3>
                                <h3 style={{ color: 'white' }}>Instagram: {profile.insta}</h3>
                                <h3 style={{ color: 'white' }}>X: {profile.ex}</h3>
                                <h3 style={{ color: 'white' }}>TikTok: {profile.tik}</h3>
                            </>
                        ) : (
                            <h3 style={{ color: 'white' }}>Loading profile...</h3>
                        )}
                    </div>
                </div>

                <hr style={{ border: 'none', height: '1px', backgroundColor: "#24392F" }} />

                <div style={{ display: 'flex', width: '100%', backgroundColor: '#3F6751' }}>
                    <div style={{ flex: '1', padding: '20px', boxSizing: 'border-box' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <h1 style={{ color: 'white' }}>Saved Playlists</h1>
                            <img style={{ height: '45px', width: '45px', borderRadius: '50%', marginLeft: '10px' }} src='./assets/images/down.png' alt="Playlists" />
                        </label>
                        {profile == null ? (
                            <p>Loading saved playlists...</p> 
                        ) : (
                            <SavedList userID={this.state.profile._id} profile={profile} />
                        )}
                    </div>

                    <div style={{ flex: '1', padding: '20px', boxSizing: 'border-box' }}>
                        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <h1 style={{ color: 'white' }}>Friends</h1>
                            <img style={{ height: '45px', width: '45px', borderRadius: '50%', marginLeft: '10px' }} src='./assets/images/fri.jpg' alt="Friends" />
                        </label>
                        {friends.length === 0 ? (
                            <p>Loading friends...</p>
                        ) : (
                            <ProfileList proFriends={friends} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}