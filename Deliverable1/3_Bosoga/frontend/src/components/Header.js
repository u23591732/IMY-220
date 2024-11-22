import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,  
        };
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    }

    componentDidMount() {
        
        this.loadUserIdFromSession();

        
        window.addEventListener("profileUpdated", this.handleProfileUpdate);
    }

    componentWillUnmount() {
       
        window.removeEventListener("profileUpdated", this.handleProfileUpdate);
    }

    loadUserIdFromSession() {
        const profile = JSON.parse(sessionStorage.getItem("profile"));
        if (profile && profile._id) {
            this.setState({ userId: profile._id });
        }
    }

    handleProfileUpdate() {
        
        this.loadUserIdFromSession();
    }

    render() {
        return (
            <div style={{backgroundColor:'#24392F', overflow: 'hidden', padding: '20px 10px', display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '30px'}} >
                <img style={{height: '50px', width: '100px', paddingRight: '30px', borderStyle: 'none'}} src='/assets/images/loop.png' alt="Loop"></img>
                
                {this.state.userId ? (
                    
                    <Link to={`/home/${this.state.userId}`}>
                        <img style={{height: '40px', width: '100px', paddingRight: '30px', borderStyle: 'none'}} src='/assets/images/s.png' alt="Home"></img>
                    </Link>
                ) : (
                    
                    <span>Loading...</span>
                )}
                
                <Link to="/profile"><img style={{height: '40px', width: '100px', paddingRight: '30px', borderStyle: 'none'}} src='/assets/images/p.png' alt="Profile"></img></Link>
                <Link to="/search"><img style={{height: '40px', width: '100px', paddingRight: '30px', borderStyle: 'none'}} src='/assets/images/h.png' alt="Search"></img></Link>
                <Link to="/logout"><img style={{height: '40px', width: '100px', paddingRight: '30px', borderStyle: 'none'}} src='/assets/images/l.png' alt="Logout"></img></Link>
            </div>
        );
    }
}