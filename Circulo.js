import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

export default function Circulo(props) {
  const [myState, setMyState] = useState(false);

  function handleOnPress () {
    setMyState(!myState);
    {props.circle(!myState, props.text)}
  }

  if (!myState){
    return (
      <View>
        <Text></Text>
        <TouchableOpacity
            onPress={(handleOnPress)}
            style = {styles.btn}
        >
          <Text style = {styles.txt}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  else {
    return (
      <View>
          <Text></Text>
          <TouchableOpacity
            onPress={(handleOnPress)}
            style = {styles.btnSelected}
          >
            <Text style = {styles.txt}>{props.text}</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      btn: {
        alignItems: 'center',
        backgroundColor: "#4682b4",
        padding: 10,
        borderRadius:1000,
      },
      btnSelected: {
        alignItems: 'center',
        backgroundColor: "#20b2aa",
        padding: 10,
        borderRadius:1000,
      },
      txt: {
        fontSize: 30,
      }
}) ;
export {styles}