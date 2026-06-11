import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <StatusBar style="dark" />

      <ProfileCard
        name="Emrul Hasan"
        studentId="YOUR-ID"
        department="Computer Science - AIUB"
        bio="Passionate about software development."
      />

      <ProfileCard
        name="Rakib Rahman"
        studentId="22-67890-2"
        department="Computer Science - AIUB"
        bio="Interested in AI and Full Stack Development."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
});