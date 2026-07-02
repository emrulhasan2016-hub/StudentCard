import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AddStudentForm from "../../components/add-student-form";
import { Student, STUDENTS } from "../../data/students";

export default function HomePage() {
  const [students, setStudents] = useState<Student[]>(STUDENTS);
  const [showForm, setShowForm] = useState(false);

  const handleNewStudent = (newStudent: Student) => {
    setStudents((prev) => [newStudent, ...prev]);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <AddStudentForm
        onSubmitSuccess={handleNewStudent}
        onCancel={() => setShowForm(false)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AIUB Directory</Text>
        <Pressable style={styles.addBtn} onPress={() => setShowForm(true)}>
          <Text style={styles.addBtnText}>+ Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#0D1F4E",
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#FFF" },
  addBtn: {
    backgroundColor: "#0D9488",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addBtnText: { color: "#FFF", fontWeight: "600" },
});
