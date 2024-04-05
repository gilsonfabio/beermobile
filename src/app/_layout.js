import { Slot } from "expo-router";

// Import your global CSS file
import "../styles/global.css"

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return(
        <GestureHandlerRootView style={{flex:1}}>
            <Slot/>
        </GestureHandlerRootView>
    )
}

