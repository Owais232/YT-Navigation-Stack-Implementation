import { Button, Text, View } from "react-native"


const Settings=({navigation})=>{
    return(
        <View>
            <Text>Settings Screen</Text>
            <Button  title="CLick me to move on Home screen "
            onPress={()=> navigation.navigate('Home')}/>
        </View>
    );

};

export default Settings;