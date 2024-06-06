import React, {useState} from "react";
import { View, TextInput, Text, Button } from "react-native";


export default function Form(){  
   const [textButton, setTextButton] = useState("Enviar")

 

    function validationImc(){
        if(weight != null && height != null){   
            return
        }
        
    }
    return(  
        <View>
         <View>
            <Button
            onPress={() => validationImc()}
            title={textButton}
            />
         </View>    
        </View>
    );
}