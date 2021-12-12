import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Popup } from "@screens/modals/Popup";
import { HomeScreen } from '@screens/Home';

const RootStack = createNativeStackNavigator();

const options: NativeStackNavigationOptions = {
    headerShown: false,
    presentation: "modal",
};

export const Root = () => (
    <RootStack.Navigator initialRouteName="Screens" screenOptions={options}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        {/* <RootStack.Group screenOptions={{ presentation: "transparentModal" }}>
            <RootStack.Screen name="Popup" component={Popup} />
        </RootStack.Group> */}
    </RootStack.Navigator>
)