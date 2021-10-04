import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/success.png")}
                    // source={{uri: 'https://static01.nyt.com/images/2021/01/20/sports/19ALTsummit-k2-2-print/19summit-k2-2-mobileMasterAt3x.jpg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></Text>
            <Text>Number was:<Text style={styles.highlight}>{props.userNumber}</Text></Text>
            <MainButton onPress={props.onRestart}>New Button</MainButton>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },highlight: {
        color: colors.primary

    }
});

export default GameOverScreen;