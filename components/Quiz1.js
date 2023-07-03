import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DirectionLayout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}>
                    <Text style={styles.buttonText}>BLUE BUTTON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
                    <Text style={styles.buttonText}>RED BUTTON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
                    <Text style={styles.buttonText}>GREEN BUTTON</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <Text style={styles.textStyle}>Write the Code for this screen</Text>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}>
                    <Text style={styles.buttonText}>BLUE BUTTON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
                    <Text style={styles.buttonText}>RED BUTTON</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
                    <Text style={styles.buttonText}>GREEN BUTTON</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 10,
    },
    button: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'blue',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },
    text: {
        flex: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -350,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        alignItems: 'center ',
        justifyContent: 'center',
    },
});

export default DirectionLayout;


