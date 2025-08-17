import { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Alert, StyleSheet } from "react-native";
import CustomButton from "../components/Button";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill all fields!");
            return;
        }
        Alert.alert("Success", `Welcome back, ${email}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Welcome Back 👋</Text>

                <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor="#6B7280"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="#6B7280"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />

                {/* ✅ Reusable Button */}
                <CustomButton title="Login" onPress={handleLogin} />

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
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        textAlign: "center",
        color: "#1D4ED8", // blue-700
        marginBottom: 32,
    },
    input: {
        width: "100%",
        padding: 16,
        borderWidth: 1,
        borderColor: "#D1D5DB", // gray-300
        borderRadius: 16,
        backgroundColor: "#F9FAFB", // gray-50
        marginBottom: 16,
    },
    switchText: {
        textAlign: "center",
        color: "#3B82F6", // blue-500
        marginTop: 16,
    },
    bold: {
        fontWeight: "600",
    },
});
