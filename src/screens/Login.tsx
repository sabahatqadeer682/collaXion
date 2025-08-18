import React, { useState } from "react";
import { View, Text, SafeAreaView, Alert, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import Button from "../components/Button";
import InputField from "../components/InputField";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill all fields!");
            return;
        }
        Alert.alert("Success", `Welcome back, ${email}`);
        // navigation.navigate("Home"); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>CollaXion</Text>

                <InputField
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Button title="Login" onPress={handleLogin} />

                <Text
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.switchText}
                >
                    Don’t have an account? <Text style={styles.bold}>Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF" },
    innerContainer: { flex: 1, justifyContent: "center", paddingHorizontal: 32 },
    title: { fontSize: 28, fontWeight: "800", textAlign: "center", color: "#1D4ED8", marginBottom: 32 },
    switchText: { textAlign: "center", color: "#3B82F6", marginTop: 16 },
    bold: { fontWeight: "600" },
});
