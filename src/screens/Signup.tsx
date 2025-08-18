import React, { useState } from "react";
import { View, Text, SafeAreaView, Alert, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import Button from "../components/Button";
import InputField from "../components/InputField";

type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

export default function Signup({ navigation }: Props) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSignup = () => {
        if (!name || !email || !password) {
            Alert.alert("Error", "All fields are required!");
            return;
        }
        Alert.alert("Success", `Account created for ${name}`);
        // navigation.navigate("Login"); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Create Account ✨</Text>

                <InputField placeholder="Full Name" value={name} onChangeText={setName} />
                <InputField placeholder="Email Address" value={email} onChangeText={setEmail} />
                <InputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

                <Button title="Sign Up" onPress={handleSignup} />

                <Text
                    onPress={() => navigation.navigate("Login")}
                    style={styles.switchText}
                >
                    Already have an account? <Text style={styles.bold}>Login</Text>
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
