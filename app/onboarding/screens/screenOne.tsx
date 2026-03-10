import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { Image, Text, TouchableOpacity, View, useColorScheme } from "react-native";

type Props = {
    next: () => void;
}

export default function Screen1({ next }: Props) {
     const colorScheme = useColorScheme()
    return (
        <View style={{flex: 1, backgroundColor: 'orange', alignItems: 'center',}}>
            <Image source={require('../../../assets/images/babygirl.png')} style={{flex: 1, width: '100%'}} />
            
            <View  style={{width: '100%', flex: 2/3, backgroundColor: colorScheme === "dark" ? Colors.dark.background : Colors.light.background, borderTopRightRadius: 20, borderTopLeftRadius: 20, gap: 20, alignItems: 'center'}}>
                <Text style={{color:  colorScheme === "dark" ? Colors.dark.text : Colors.light.text, marginTop: 20, fontSize: 26, fontFamily:'Montserrat_500Medium'}}>Tailored for Your Little Ones</Text>
                <Text style={{color:  colorScheme === "dark" ? Colors.dark.text : Colors.light.text, width: '90%', textAlign: 'center', fontSize: 16, fontFamily:'Montserrat_500Medium',}}>Our curated collection is designed to cater to the diverse needs of your little ones, ensuring they get the very best.</Text>
                
                <View
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: '#fff',
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