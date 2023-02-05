import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import styles from './styles';

const Post = () => {
    return (
        <View style = {styles.container} >
            <Text >Post 2</Text>
            <Ionicons name="ios-checkmark-circle" size={32} color="green" />
            <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={styles.video}
                    />
        </View>
    );
}

export default Post;

