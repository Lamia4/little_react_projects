import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import "./Klicker.css";

export default function Klicker(props) {


    const [count, setCount] = useState(0);

    return (
        <div style={{background: "black", display: "flex", justifyContent: "center", marginTop: "300px", height: "300px"}}>
            <Text style={klickerStyles.bgColor}>Du hast {count} mal geklickt.</Text>
            <Button className="buttonStyle"
            onPress = {() =>setCount(count+1)}
            title="Klick mich!"
            ></Button>
            <Text style = {klickerStyles.bgColor}>{props.helloWorld}</Text>
        </div>
    )
}

const klickerStyles = StyleSheet.create({
    bgColor:{
        backgroundColor:"red",
    }
})
