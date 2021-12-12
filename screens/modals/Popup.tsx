import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export const Popup = () => (
    <View style={styles.layout}>
        <Text>Popup</Text>
    </View>
);

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});