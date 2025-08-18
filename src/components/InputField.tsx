import React from "react";
import { TextInput, StyleSheet } from "react-native";

type InputFieldProps = {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
};

export default function InputField({
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
}: InputFieldProps) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#6B7280"
            secureTextEntry={secureTextEntry}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        padding: 16,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 16,
        backgroundColor: "#F9FAFB",
        marginBottom: 16,
    },
});
