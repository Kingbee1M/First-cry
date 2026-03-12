import ButtonUI from "@/components/ui/ButtonUi";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { loginUser } from "@/shared/auth";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from 'react-native-toast-message';


export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false)
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const colorScheme = useColorScheme()

    const handleLogin = async () => {
    setLoading(true)

    try {
        if (!identifier || !password) {
            Toast.show({
                type: "error",
                text1: "Login Failed",
                text2: "Email/Phone no and Password are required",
            })
            setLoading(false)
            return
        }
        const data = await loginUser(identifier, password)
        console.log(data)

        router.push("/(tabs)")

        Toast.show({
        type: "success",
        text1: "Login Successful",
        });

    } catch (error: any) {

        Toast.show({
            type: "error",
            text1: "Login Failed",
            text2: error.message || "Something went wrong",
        })
        console.log('error: ', error)

    } finally {
        setLoading(false)
    }
}

    return (
        <SafeAreaView
        style={{flex: 1, gap: 40, backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background}}
        >
            <KeyboardAvoidingView
            style={{flex: 1, gap: 40, alignItems: 'center', backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background}}
            >
            <Text style={{fontSize: 24, fontFamily: "Montserrat_500Medium", fontWeight: 'bold',  color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, marginTop: 40,}}>Sign In to your account</Text>
            <Text style={{fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Welcome back! Please enter your details.</Text>

            <View style={styles.form}>

                <View style={styles.inputView}>
                    <Text style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Email/Phone No</Text>
                    <TextInput
                    value={identifier}
                    onChangeText={(text) => setIdentifier(text)}
                    placeholder="Email@gmail.com" 
                    placeholderTextColor={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text} 
                    style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, borderWidth: 1, borderColor: '#F8991E', borderRadius: 10, paddingHorizontal: 10, fontSize: 18}}
                    />
                </View>

                <View style={styles.passwordView}>
                    <Text  style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Password</Text>

                    <View style={styles.passwordholder}>
                        <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Your password"
                        secureTextEntry={showPassword} placeholderTextColor={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text}
                        style={{width: '80%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}
                        />
                        <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                            <IconSymbol lib="Feather" size={20} color={colorScheme === "dark" ? Colors.dark.text : Colors.light.text} name={showPassword ? 'eye-off' : 'eye'} />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
            </View>

            <View style={{width: '100%', alignItems: 'center', gap: 20}}>
                <ButtonUI title="Sign In" onPress={handleLogin}/>
                <ButtonUI variant="outline" title="Sign in with Google" image={require('@/assets/images/google.png')} iconPosition="left" onPress={handleLogin}/>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 5, }}>
                <Text style={{fontFamily: "Montserrat_500Medium", fontSize: 18, color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text}}>Don&apos;t have an account?</Text>
                
                <TouchableOpacity onPress={()=>router.push('/auth/signUp')}>
                    <Text style={{fontFamily: "Montserrat_500Medium", color: '#F8991E', textDecorationLine: 'underline', fontSize: 18}}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    form: {
        width: '90%',
        alignItems: 'flex-start',
        gap: 20
    },

    inputView: {
        width: '100%',
        gap: 15,
    },
    input: {
        
    },
    passwordView: {
        gap: 15,
        width: '100%',
    },
    passwordholder: {
        borderWidth: 1,
        borderColor: '#F8991E',
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    }
})