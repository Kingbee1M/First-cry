import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Text, View } from "react-native";

export default function Cart() {
      const resetOnboarding = async () => {
  await AsyncStorage.clear();
  console.log("Onboarding reset");
};
    return (
        <View>
            <Text>cart</Text>
                  <Button title='reset creach' onPress={resetOnboarding}/>
                  <Button title='reset creach' onPress={resetOnboarding}/>
                  <Button title='reset creach' onPress={resetOnboarding}/>
                  <Button title='reset creach' onPress={resetOnboarding}/>
                  <Button title='reset creach' onPress={resetOnboarding}/>
        </View>
    )
    
}