import { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({ navigation }) => {

    const localimage = require('./bgimg.jpg');

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const verifyemail = 'tst@example.com';
    const verifypass = '123';

    const handlelogin = () => {
        if (email === verifyemail && pass === verifypass) {
            navigation.navigate('Home');
        } else{
            Alert.alert('Wrong Email and Password');
        }
    };

    return (
        <ImageBackground
            resizeMode="cover"
            style={Style.container}
            source={localimage}
        >
            <View style={Style.overlay}>
                <Text style={Style.text}>Login Screen</Text>
                <TextInput
                    placeholder="Email"
                    style={Style.input}
                    placeholderTextColor="#fff"
                    value={email}
                    onChangeText={setemail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Password"
                    style={Style.input}
                    placeholderTextColor="#fff"
                    value={pass}
                    onChangeText={setpass}
                    secureTextEntry
                    autoCapitalize="none"
                />
                <TouchableOpacity style={Style.button} onPress={handlelogin}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default Login;
