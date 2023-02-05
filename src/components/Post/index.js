import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'


const Post = () => {
    return (
        <View >
            <Text >Post</Text>
            <Ionicons name="ios-checkmark-circle" size={32} color="green" />
            <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: 300, height: 300 }}
                    />
        </View>
    );
}

export default Post;