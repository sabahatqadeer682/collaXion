import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
    title: string;
    onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#1E40AF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 16,
    },
});
