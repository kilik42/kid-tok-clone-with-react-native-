import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    video: {    

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0

    }   ,
    container: {
        width:  Dimensions.get('window').width,
       height: Dimensions.get('window').height,
    }
        
})

export default styles;