import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";


const Stack=createNativeStackNavigator();

const Stacknavigation=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Home" component={Home} 
                options={{headerShown:false}}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="Profile" component={Profile}
                options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default Stacknavigation;