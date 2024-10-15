import { Button, Text, View } from "react-native"


const Home=({navigation})=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
            <Text style={{fontSize:30,alignItems:'center',alignSelf:'center'}}>Home Screen</Text>
            <Button  title="CLick me to move on Next screen and See Functionality" onPress={()=> 
                navigation.navigate('Profile')}/>
        </View>
    );

};

export default Home;