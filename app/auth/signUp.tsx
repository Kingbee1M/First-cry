import ButtonUI from "@/components/ui/ButtonUi"
import { IconSymbol } from "@/components/ui/icon-symbol"
import { Colors } from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme.web"
import { useRouter } from "expo-router"
import { useState } from "react"
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SignUp() {
    const colorScheme = useColorScheme()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const [phone, setPhone] = useState("")
    const router = useRouter()

    return (
        <SafeAreaView
        style={{flex: 1, gap: 40, backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background}}
        >
            <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flex: 1, gap: 40, alignItems: 'center', backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background}}
                >
                <Text style={{fontSize: 24, fontFamily: "Montserrat_500Medium", fontWeight: 'bold',  color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, marginTop: 40}}>Sign Up an account</Text>

                <View style={styles.form}>
                    <View style={styles.inputView}>
                        <Text style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>First Name</Text>
                        <TextInput
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                        placeholder="jane" 
                        placeholderTextColor={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text}
                        style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, borderWidth: 1, borderColor: '#F8991E', borderRadius: 10, paddingHorizontal: 10, fontSize: 18}}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Text style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Last Name</Text>
                        <TextInput
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                        placeholder="Doe" 
                        placeholderTextColor={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text} 
                        style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, borderWidth: 1, borderColor: '#F8991E', borderRadius: 10, paddingHorizontal: 10, fontSize: 18}}
                        />
                    </View>
    
                    <View style={styles.passwordView}>
                        <Text  style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Password</Text>

                        <View style={{gap: 10}}>
                        <View style={styles.passwordholder}>
                            <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="Your password"
                            secureTextEntry={showPassword}
                            placeholderTextColor={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text}
                            style={{width: '80%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}
                            />
                            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                                <IconSymbol lib="Feather" size={20} color={colorScheme === "dark" ? Colors.dark.text : Colors.light.text} name={showPassword ? 'eye-off' : 'eye'} />
                            </TouchableOpacity>
                        </View>
                            <Text style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Must be at leat 6 characters</Text>
                        </View>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, fontSize: 18}}>Phone</Text>
                        <TextInput
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                        placeholder="Phone No" 
                        placeholderTextColor={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text} 
                        style={{width: '100%', fontFamily: "Montserrat_500Medium", color: colorScheme === "dark" ? Colors.dark.text : Colors.light.text, borderWidth: 1, borderColor: '#F8991E', borderRadius: 10, paddingHorizontal: 10, fontSize: 18}}
                        />
                    </View>
                </View>


                <View style={{width: '100%', alignItems: 'center', gap: 20}}>
                    <ButtonUI title="Sign In" onPress={()=>router.push('/(tabs)')}/>
                    <ButtonUI variant="outline" title="Sign in with Google" image={require('@/assets/images/google.png')} iconPosition="left" onPress={()=>router.push('/(tabs)')}/>
                </View>
            </ScrollView>
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