import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TextInput, Button } from 'react-native';

const APIdemo = () => {
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const getWeather = async () => {
    try {
      const url = `https://api.weather.gov/points/${latitude},${longitude}`;
      const response = await fetch(url);
      const json = await response.json();
      console.dir(json.properties.forecast);
      const response2 = await fetch(json.properties.forecast);
      const json2 = await response2.json();
      const forecast = json2.properties.periods[0].detailedForecast;
      console.dir(forecast);
      setData(json);
      setForecast(forecast);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View>
      <Text>API Demo</Text>

      <TextInput
        placeholder="Enter latitude"
        value={latitude}
        onChangeText={text => setLatitude(text)}
      />
      <TextInput
        placeholder="Enter longitude"
        value={longitude}
        onChangeText={text => setLongitude(text)}
      />
      <Button title="Get Weather" onPress={getWeather} />

      <Text>{JSON.stringify(forecast)}</Text>
    </View>
  );
};

export default APIdemo;
