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
       height: Dimensions.get('window').height - 48,

    },
        
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 300,
        justifyContent: 'space-between',
        marginRight: 10,
        marginBottom: 10,
        // backgroundColor: 'blue'
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white'
    },
    iconContainer: {
        alignItems: 'center'
    }

    
})

export default styles;