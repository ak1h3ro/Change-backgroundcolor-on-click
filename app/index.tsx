import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";


export default function Index() {
    const [color,setColor] = useState('')
    const changeBackgroundColorBtn = () => {
        const newColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
        setColor(newColor);
    }
    const randomNumber = () => {
        return Math.floor(Math.random() * 256)
    }
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;

    return (
   <View style={{flex: 1}}>
       <TouchableOpacity onPress={() => {changeBackgroundColorBtn()}} style={{backgroundColor: color,height:screenHeight, width:screenWidth, justifyContent: 'center'}}>
           <Text style={{alignSelf: 'center'}}>Hello world</Text>
       </TouchableOpacity>
   </View>
  );
}
