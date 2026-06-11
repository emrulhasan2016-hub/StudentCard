import { useState } from "react";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";

interface ProfileCardProps {
  name: string;
  studentId: string;
  department: string;
  bio: string;
}

export default function ProfileCard({
  name,
  studentId,
  department,
  bio,
}:

 ProfileCardProps) {
    const [followed, setFollowed] = useState(false);

const handleFollow = () => {
  setFollowed(!followed);
};


  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("");

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {initials}
        </Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.idBadge}>
        ID: {studentId}
      </Text>

      <Text style={styles.role}>
        {department}
      </Text>

      <View style={styles.divider} />

      <Text style={styles.bio}>
        {bio}
        <TouchableOpacity
  style={[
    styles.button,
    followed && styles.buttonFollowed
  ]}
  onPress={handleFollow}
>
  <Text
    style={[
      styles.buttonText,
      followed && styles.buttonTextFollowed
    ]}
  >
    {followed ? "Following ✓" : "Follow"}
  </Text>
</TouchableOpacity>
      </Text>
    </View>
    
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 28,
    width: "88%",
    alignItems: "center",
    elevation: 4,
    marginBottom: 20,
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
  },

  idBadge: {
    fontSize: 12,
    color: "#0D9488",
    backgroundColor: "#E1F5EE",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
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
  },
  button: {
  marginTop: 20,
  paddingVertical: 10,
  paddingHorizontal: 32,
  borderRadius: 24,
  borderWidth: 2,
  borderColor: "#0D9488",
},

buttonFollowed: {
  backgroundColor: "#0D9488",
},

buttonText: {
  color: "#0D9488",
  fontWeight: "600",
},

buttonTextFollowed: {
  color: "#FFFFFF",
},
});