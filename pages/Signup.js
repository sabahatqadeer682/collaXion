import { useState } from "react";
import { View, Text, TextInput, SafeAreaView, Alert, StyleSheet } from "react-native";
import CustomButton from "../components/Button";

export default function Signup({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        if (!name || !email || !password) {
            Alert.alert("Error", "All fields are required!");
            return;
        }
        Alert.alert("Success", `Account created for ${name}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Create Account ✨</Text>

                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="#6B7280"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#6B7280"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#6B7280"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />

                {/* ✅ Reusable Button */}
                <CustomButton title="Sign Up" onPress={handleSignup} />

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
        color: "#1D4ED8",
        marginBottom: 32,
    },
    input: {
        width: "100%",
        padding: 16,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 16,
        backgroundColor: "#F9FAFB",
        marginBottom: 16,
    },
    switchText: {
        textAlign: "center",
        color: "#3B82F6",
        marginTop: 16,
    },
    bold: {
        fontWeight: "600",
    },
});
