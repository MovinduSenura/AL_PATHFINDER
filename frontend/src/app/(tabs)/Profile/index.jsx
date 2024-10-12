import { View, Text } from "react-native";
import { router } from "expo-router";
import {
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function Profile() {
  return (
    <View className="bg-white h-screen">
      {/* <Text className="mx-auto text-red-600 text-3xl font-bold">profile</Text> */}
      {/* <View contentContainerStyle={styles.maindiv}> */}
      <Pressable style={styles.card}>
        <View style={styles.cardChild}>

          <Pressable style={styles.card2}>
            <View style={styles.cardChild2} />
            <Image
              style={styles.onczpn8501Icon2}
              resizeMode="cover"
              source={require("../../../assets/images/skillTest.png")}
            />
            <Text style={styles.skillTest2}>Name:</Text>
            <Text style={styles.skillTest3}>Age:</Text>
            <Text style={styles.skillTest4}>School:</Text>
          </Pressable>

          <Pressable style={styles.card2}>
            <View style={styles.cardChild2} />
            <Text style={styles.skillTest5}>About</Text>
          </Pressable>

          {/* <Text style={styles.streamName}>Physical Science</Text> */}
          <TouchableOpacity
            onPress={() => router.push("/Skill Test/allMarks")}
            // className="w-[80%] mx-auto ml-auto mt-[40px]"
            className="w-[80%] mx-auto ml-auto mt-[200px]"
          >
            <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
              <Text className="text-md text-center text-white font-semibold">
                View My Results
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => router.push("/Skill Test/questionsPage")}
            className="w-[80%] mx-auto ml-auto mt-7"
          >
            <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
              <Text className="text-md text-center text-white font-semibold">
                Educational Details
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/Skill Test")}
            className="w-[80%] mx-auto ml-auto mt-7"
          >
            <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
              <Text className="text-md text-center text-white font-semibold">
                Skill Test
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>

        {/* <Link href={'/Home/physicalScienceQuiz1'}>Start</Link> */}
      </Pressable>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure full height
    alignItems: "stretch", // Allow content to stretch horizontally
    backgroundColor: "white",
  },
  icon: {
    width: "100%",
    height: 212,
  },
  forYou1: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
    color: "#353333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cardChild: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  onczpn8501Icon: {
    position: "absolute",
    left: 5,
    width: 97,
    height: 91,
    top: 5,
  },
  theSkillTest: {
    top: 23,
    fontSize: 10,
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
    position: "absolute",
    left: 112,
    width: 235,
    textAlign: "justify",
    lineHeight: 14,
    color: "#000",
  },
  streamName: {
    position: "absolute",
    top: 17,
    left: 100,
    right: 0,
    fontSize: 19,
    fontWeight: "700",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
    textAlign: "center",
  },
  card: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: "90%",
    height: 560,
    marginBottom: 20,
    position: "relative",
    marginLeft: 20,
    marginTop: 30,
  },
  maindiv: {
    // alignItems: "center", // Center cards horizontally
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: "center",
  },

  container2: {
    flex: 1, // Ensure full height
    alignItems: "stretch", // Allow content to stretch horizontally
    backgroundColor: "white",
  },
  icon2: {
    width: "100%",
    height: 212,
  },
  forYou12: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
    color: "#353333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cardChild2: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  onczpn8501Icon2: {
    position: "absolute",
    left: 5,
    width: 97,
    height: 91,
    top: 5,
  },
  theSkillTest2: {
    top: 23,
    fontSize: 10,
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
    position: "absolute",
    left: 112,
    width: 235,
    textAlign: "justify",
    lineHeight: 14,
    color: "#000",
  },
  skillTest2: {
    position: "absolute",
    top: 15,
    left: 112,
    fontSize: 13,
    fontWeight: "800",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
  },
  skillTest3: {
    position: "absolute",
    top: 45,
    left: 112,
    fontSize: 13,
    fontWeight: "800",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
  },
  skillTest4: {
    position: "absolute",
    top: 75,
    left: 112,
    fontSize: 13,
    fontWeight: "800",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
  },
  skillTest5: {
    position: "absolute",
    top: 5,
    left: 10,
    fontSize: 13,
    fontWeight: "800",
    fontFamily: Platform.OS === "ios" ? "serif" : "serif",
  },
  card2: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: "90%",
    height: 102,
    marginBottom: 20,
    position: "relative",
    marginLeft: 17,
    marginTop: 20,
  },
  scrollableSection2: {
    flexGrow: 1, // Ensure scrolling
    paddingBottom: 20, // Add padding to avoid cutoff
    alignItems: "center", // Center cards horizontally
    marginTop: 10,
  },
});
