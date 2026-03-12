import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { Image, Text, TouchableOpacity, View } from "react-native";
type Props = {
    next: () => void;
}

export default function ScreenTwo({ next }: Props) {
         const colorScheme = useColorScheme()

    return (
        <View style={{flex: 1, backgroundColor: 'orange', alignItems: 'center',}}>
                    <Image source={require('../../../assets/images/superdeals.png')} style={{flex: 1, width: '100%'}}  />
                    
                    <View  style={{width: '100%', flex: 2/3, backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background, borderTopRightRadius: 20, borderTopLeftRadius: 20, gap: 20, alignItems: 'center'}}>
                        <Text style={{color:  colorScheme === "dark" ? Colors.dark.text : Colors.light.text, marginTop: 20, fontSize: 26, fontFamily:'Montserrat_500Medium'}}>Exclusive Offers, Just for You</Text>
                        <Text style={{color:  colorScheme === "dark" ? Colors.dark.text : Colors.light.text, width: '90%', textAlign: 'center', fontSize: 18, fontFamily:'Montserrat_500Medium',}}>Enjoy exclusive discounts, access to new arrivals, and personalized recommendations. Sign up today to unlock a world of savings and surprises.</Text>
                        
                        <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: colorScheme === "dark" ? Colors.dark.background: Colors.light.background,
                            borderColor: '#F8991E',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20,
                        }}
                        >
                        {/* Top-right "border" */}
                        <View
                            style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 40,
                            height: 40,
                            borderTopWidth: 3,
                            borderRightWidth: 3,
                            borderColor: '#F8991E',
                            borderTopRightRadius: 40,
                            }}
                        />
                        <View
                            style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            transform: [{ scaleY: -1 }],
                            width: 40,
                            height: 40,
                            borderTopWidth: 3,
                            borderRightWidth: 3,
                            borderColor: '#F8991E',
                            borderTopRightRadius: 40,
                            }}
                        />

                        <View
                            style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            transform: [{ scaleY: -1 }, { scaleX: -1 }],
                            width: 40,
                            height: 40,
                            borderTopWidth: 3,
                            borderRightWidth: 3,
                            borderColor: '#F8991E',
                            borderTopRightRadius: 40,
                            }}
                        />
        
                        <TouchableOpacity
                        onPress={next}
                            style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            backgroundColor: '#F8991E',
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}
                        >
                            <IconSymbol lib="Feather" name="arrow-right" size={24} color="#fff" />
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
    )
}