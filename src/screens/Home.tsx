import { Button, Text, View } from "react-native"


const Home=({navigation})=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <Button  title="CLick me to move on Next screen " onPress={()=> 
                navigation.navigate('Profile')}/>
        </View>
    );

};

export default Home;