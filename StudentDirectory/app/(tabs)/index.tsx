import { useState } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import SearchBar from "@/components/search-bar";
import StudentItem from "@/components/student-item";
import StudentDetail from "@/components/student-detail";

import {
  Student,
  STUDENTS,
} from "@/data/students";

export default function HomeScreen() {
  // Search State
  const [query, setQuery] = useState("");

  // Department Filter State
  const [departmentFilter, setDepartmentFilter] =
    useState("All");

  // Selected Student State
  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  // Select / Deselect Student
  const handleSelect = (student: Student) => {
    setSelectedStudent((prev) =>
      prev?.id === student.id ? null : student
    );
  };

  // Search + Department Filter
  const filtered = STUDENTS.filter((s) => {
    const matchesQuery =
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.department
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All" ||
      s.department === departmentFilter;

    return matchesQuery && matchesDepartment;
  });

  return (
    <View style={styles.container}>
      {/* Title Bar */}
      <View style={styles.titleBar}>
        <Text style={styles.title}>
          Student Directory
        </Text>

        <Text style={styles.count}>
          {filtered.length} Students
        </Text>
      </View>

      {/* Department Filter Tabs */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            departmentFilter === "All" &&
              styles.activeFilter,
          ]}
          onPress={() =>
            setDepartmentFilter("All")
          }
        >
          <Text
            style={
              departmentFilter === "All"
                ? styles.activeFilterText
                : styles.filterText
            }
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            departmentFilter ===
              "Computer Science" &&
              styles.activeFilter,
          ]}
          onPress={() =>
            setDepartmentFilter(
              "Computer Science"
            )
          }
        >
          <Text
            style={
              departmentFilter ===
              "Computer Science"
                ? styles.activeFilterText
                : styles.filterText
            }
          >
            Computer Science
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            departmentFilter ===
              "Software Engineering" &&
              styles.activeFilter,
          ]}
          onPress={() =>
            setDepartmentFilter(
              "Software Engineering"
            )
          }
        >
          <Text
            style={
              departmentFilter ===
              "Software Engineering"
                ? styles.activeFilterText
                : styles.filterText
            }
          >
            Software Engineering
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <SearchBar
        value={query}
        onChangeText={setQuery}
      />

      {/* Student List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentItem
            student={item}
            onPress={handleSelect}
            isSelected={
              selectedStudent?.id === item.id
            }
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              No students match {query}
            </Text>
          </View>
        }
      />

      {/* Student Detail */}
      {selectedStudent && (
        <StudentDetail
          student={selectedStudent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },

  titleBar: {
    backgroundColor: "#0D1F4E",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  count: {
    fontSize: 12,
    color: "#CCFBF1",
    marginTop: 4,
  },

  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  filterButton: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  activeFilter: {
    backgroundColor: "#0D9488",
  },

  filterText: {
    color: "#000",
    fontSize: 12,
  },

  activeFilterText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  empty: {
    padding: 40,
    alignItems: "center",
  },

  emptyText: {
    fontSize: 14,
    color: "#94A3B8",
  },
});