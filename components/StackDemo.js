import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountChange from './CountChange';
import KeyPad from './KeyPad'; // Import the KeyPad component

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Tim's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Tim' })
        }
      />
      <Button
        title="Count Change"
        onPress={() =>
          navigation.navigate('CountChange')
        }
      />
      <Button // Button to navigate to KeyPad demo
        title="KeyPad Demo"
        onPress={() =>
          navigation.navigate('KeyPad')
        }
      />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CountChange" component={CountChange} />
        <Stack.Screen name="KeyPad" component={KeyPad} /> // Add KeyPad screen
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
