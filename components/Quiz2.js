import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Quiz2 = ({ navigation }) => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [z, setZ] = useState('');
    const [distance, setDistance] = useState('0');

    const calculateDistance = () => {
        const xVal = parseInt(x);
        const yVal = parseInt(y);
        const zVal = parseInt(z);

        if (!isNaN(xVal) && !isNaN(yVal) && !isNaN(zVal)) {
            const d = Math.sqrt(xVal * xVal + yVal * yVal + zVal * zVal);
            setDistance(Math.floor(d).toString());
        } else {
            setDistance('Invalid input');
        }
    };


    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 16 }}>
                Distance of (X,Y,Z) from (0,0,0)
            </Text>
            <Text style={{ fontSize: 24, marginBottom: 16 }}>
                Write the code for this app which calculates
            </Text>
            <Text style={{ fontSize: 24, marginBottom: 16 }}>
                d = Math.sqrt(x*x+y*y+z*z)
            </Text>
            <TextInput
                style={{ marginBottom: 8 }}
                placeholder="X"
                onChangeText={(text) => setX(text)}
                value={x}
                keyboardType="numeric"
            />
            <TextInput
                style={{ marginBottom: 8 }}
                placeholder="Y"
                onChangeText={(text) => setY(text)}
                value={y}
                keyboardType="numeric"
            />
            <TextInput
                style={{ marginBottom: 16 }}
                placeholder="Z"
                onChangeText={(text) => setZ(text)}
                value={z}
                keyboardType="numeric"
            />
            <View style={{ width: '50%' }}>
                <Button onPress={calculateDistance} title="Calculate Distance" />
            </View>
            <Text style={{ marginTop: 16 }}>
                Distance to ({x}, {y}, {z}) is d = {distance}
            </Text>
        </View>
    );
};

export default Quiz2;
