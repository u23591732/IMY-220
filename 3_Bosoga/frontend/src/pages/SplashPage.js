import React from 'react';
import LoginWrapper from '../components/LoginWrapper';

export class SplashPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "/assets/images/billie.jpg",
                "/assets/images/channel.jpg",
                "/assets/images/damn - Copy.jpg",
                "/assets/images/flower.jpg",
                "/assets/images/gunna.jpg",
                "/assets/images/kabza.jpg",
                "/assets/images/odusi.jpg",
                "/assets/images/sab.jpg",
                "/assets/images/stevie.jpg",
                "/assets/images/testing.jpg",
                "/assets/images/theweek.jpg",
                "/assets/images/tyla.jpg"
            ],
            logo: "/assets/images/loop.png"
        };
    }

    async componentDidMount() {
        await this.fetchImages(); 
    }

    async fetchImages() {
        try {
            const response = await fetch('/api/images'); 
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            this.setState({ images: data.images }); 
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    getOrbitPosition(index, total, radius) {
        const angle = (index / total) * 2 * Math.PI; 
        const x = radius * Math.cos(angle); 
        const y = radius * Math.sin(angle); 
        return { left: `${50 + x}%`, top: `${50 + y}%` }; 
    }

    render() {
        const { images, logo } = this.state;
        const radius = 45; 

        return (
            <div style={styles.splashContainer}>
                <div style={styles.logoContainer}>
                    <img src={logo} alt="Logo" style={styles.logoImage} />
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image} 
                            alt={`orbiting-img-${index}`}
                            style={{
                                ...styles.orbitingImage,
                                ...this.getOrbitPosition(index, images.length, radius), 
                            }}
                        />
                    ))}
                </div>
                <div style={styles.loginContainer}>
                    <LoginWrapper />
                </div>
            </div>
        );
    }
}

const styles = {
    splashContainer: {
        backgroundColor: '#3F6751',
        padding: '25px',
        paddingTop: '100px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'relative',
        width: '600px',
        height: '600px', 
    },
    logoImage: {
        width: '240px',
        height: '170px',
        borderRadius: '10%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        zIndex: 10, 
    },
    orbitingImage: {
        width: '120px',  
        height: '120px',
        borderRadius: '10%',  
        position: 'absolute',
        objectFit: 'cover',
        opacity: 0.85, 
        zIndex: 5,
        transform: 'translate(-50%, -50%)' 
    },
    loginContainer: {
        marginTop: '50px',
        textAlign: 'center',
    },
};