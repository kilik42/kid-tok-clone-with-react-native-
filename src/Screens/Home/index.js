import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Post from '../../components/Post';
const Home = () => {
    return (
        <View >
        <Text>Home</Text>
        <Ionicons name="ios-checkmark-circle" size={32} color="green" />
        <Post />
        </View>
    );
    }

    export default Home;