import React, {useState}from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import styles from './styles';

const Post = () => {
    const[post, setPost] = useState (false);
    const[paused, setPaused] = useState (false);
    const onPlayPausePress = () => {
        console.warn('onPlayPausePress');
        console.warn( 'Post')

        setPaused(!paused);

    }
    return (
        
        <View style = {styles.container} >
            {/* <Text >Post 2</Text>
            <Ionicons name="ios-checkmark-circle" size={32} color="green" /> */}

            <TouchableWithoutFeedback onPress={onPlayPausePress}>

            <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode={'cover'}
                    shouldPlay
                    isLooping
                    paused={paused}
                    onError ={(error) => console.log(error)}
                    style={styles.video}
                    />
            </TouchableWithoutFeedback>

            <View style = {styles.uiContainer}>
                <View style = {styles.rightContainer}>
                    <View style = {styles.profilePicture} />
                    <View style = {styles.iconContainer}>
                        <Ionicons name="ios-heart-empty" size={32} color="white" />
                        <Ionicons name="ios-chatboxes" size={32} color="white" />   
                        <Ionicons name="ios-send" size={32} color="white" />
                    </View>
                    <View style = {styles.iconContainer}>   

                        <Ionicons name="ios-bookmark" size={32} color="white" />
                    </View>
                </View>
                <Text style={{fontSize: 20, color: 'white'}}>bottom component</Text>
            </View>
        </View>
    );
}

export default Post;

