import ButtonUI from "@/components/ui/ButtonUi";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { setHasSeen } from "@/shared/store/onboardingSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";

type Props = {
    next: () => void;
}

export default function ScreenFour({ next }: Props) {
        const colorScheme = useColorScheme()
        const router = useRouter()

const dispatch = useDispatch();

const finishOnboarding = async () => {
  await AsyncStorage.setItem("hasSeenOnboarding", "true"); // persist
  dispatch(setHasSeen(true)); // update Redux
    router.replace('/(tabs)'); // navigate to main app
}
const finishOnboardingSignIn = async () => {
  await AsyncStorage.setItem("hasSeenOnboarding", "true"); // persist
  dispatch(setHasSeen(true));
    router.replace('/auth/login');
}

    return (
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center',}}>
                    <Image source={require('../../../assets/images/finalboard.png')} style={{flex: 1, width: '100%'}} />
                    
                    <View  style={{width: '100%', flex: 2/3, backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background, borderTopRightRadius: 20, borderTopLeftRadius: 20, gap: 20, alignItems: 'center'}}>
                        <Text style={{color:  colorScheme === "dark" ? Colors.dark.text : Colors.light.text, marginTop: 20, fontSize: 26, fontFamily:'Montserrat_500Medium'}}>Exclusive Offers, Just for You</Text>
                        <Text style={{color:  colorScheme === "dark" ? Colors.dark.text : Colors.light.text, width: '90%', textAlign: 'center', fontSize: 16, fontFamily:'Montserrat_500Medium',}}>Enjoy exclusive discounts, access to new arrivals, and personalized recommendations. Sign up today to unlock a world of savings and surprises.</Text>
                        
                        <View style={{width: '100%', alignItems: 'center', gap: 20}}>
                            <ButtonUI title="Get Started" onPress={() => finishOnboarding()}/>
                            <ButtonUI title="Sign In" variant="outline" onPress={() => finishOnboardingSignIn()}/>
                        </View>
                    </View>
                    
                </View>
    )
}