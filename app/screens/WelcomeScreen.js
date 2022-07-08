import React from 'react';
import { ImageBackground } from 'react-native';


function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require("../assets/climbingImages/climbinggymwall.jpg")}
        >
        </ImageBackground>
    );
}

export default WelcomeScreen;