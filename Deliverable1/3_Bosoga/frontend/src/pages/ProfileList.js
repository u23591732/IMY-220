import React from "react";
import { ProfileShort } from "../components/ProfileShort";

export class ProfileList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shortPeople: [] }; 
    }

    componentDidMount() {
        this.setState({ shortPeople: [...this.props.proFriends]}); 
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#3F6751',
                
                borderRadius: '8px',
                width: '100%',
                maxWidth: '500px', 
            }}>
                {this.state.shortPeople.map((user, i) => (
                    <ProfileShort
                        key={i}
                        userPic={user.profilePic}
                        userName={user.userName}
                    />
                ))}
            </div>
        );
    }
}