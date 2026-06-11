import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
    return (
        // ScrollView allows the page to scroll if content overflows
        <ScrollView contentContainerStyle={styles.screen}>
            <StatusBar style="dark" />

            {/* Card container */}
            <View style={styles.card}>
                {/* Avatar placeholder */}
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>SU</Text>
                </View>

                {/* Name and role */}
                <Text style={styles.name}>Emrul hassan</Text>
                <Text style={styles.role}>Computer Science — AIUB</Text>
                {/* Divider line */}
                <View style={styles.divider} />

                {/* Bio text */}
                <Text style={styles.bio}>Passionate about mobile development and building tools that make everyday life easier.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F0F4F8",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 28,
        width: "88%",
        alignItems: "center",
        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        // Elevation for Android
        elevation: 4,
    },
    avatar: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: "#0D9488",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    avatarText: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0D1F4E",
        marginBottom: 4,
    },
    role: {
        fontSize: 14,
        color: "#64748B",
        marginBottom: 16,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#E2E8F0",
        marginBottom: 16,
    },
    bio: {
        fontSize: 14,
        color: "#64748B",
        textAlign: "center",
        lineHeight: 22,
    },
});
