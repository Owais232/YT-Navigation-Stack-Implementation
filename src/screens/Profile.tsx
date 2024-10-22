import { Button, Text, View } from "react-native"


const Profile=({navigation})=>{
    return(
        <View>
            <Text>Profile Screen</Text>
            <Button  title="CLick me on Home "
            onPress={()=> navigation.navigate('Home')}/>
            <Button  title="CLick me to move on Settings"
            onPress={()=> navigation.navigate('Settings')}/>
        </View>
    );

};

export default Profile;