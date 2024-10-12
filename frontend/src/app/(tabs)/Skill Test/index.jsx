import { Link, router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";

const QuizStreams = () => {
  return (
    <View className="bg-white h-screen">
      {/* Ensure the ScrollView has flex and padding/margin for display */}
      <ScrollView contentContainerStyle={styles.scrollableSection}>
        <Pressable
          style={styles.card}
        >
          <View style={styles.cardChild}>
            <Image
              style={styles.onczpn8501Icon}
              resizeMode="cover"
              source={require("../../../assets/images/maths.png")}
            />
            <Text style={styles.streamName}>Physical Science</Text>
            <TouchableOpacity onPress={() => router.push("/Skill Test/questionsPage")} className="w-4/6 ml-auto mr-2 mt-14">
              <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
                <Text className="text-md text-center text-white font-semibold">
                  Attempt Quiz
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* <Link href={'/Home/physicalScienceQuiz1'}>Start</Link> */}
        </Pressable>
        <Pressable style={styles.card} onPress={() => {}}>
          <View style={styles.cardChild} >
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/commerce.png")}
          />
          <Text style={styles.streamName}>Commerce</Text>
          <TouchableOpacity onPress={() => router.push("/Skill Test/questionsPage")} className="w-4/6 ml-auto mr-2 mt-14">
              <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
                <Text className="text-md text-center text-white font-semibold">
                  Attempt Quiz
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Pressable>
        <Pressable style={styles.card} onPress={() => {}}>
          <View style={styles.cardChild} >
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/bio.png")}
          />
          <Text style={styles.streamName}>Bio Science</Text>
          <TouchableOpacity onPress={() => router.push("/Skill Test/questionsPage")} className="w-4/6 ml-auto mr-2 mt-14">
              <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
                <Text className="text-md text-center text-white font-semibold">
                  Attempt Quiz
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Pressable>

        <Pressable style={styles.card} onPress={() => {}}>
          <View style={styles.cardChild} >
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/arts.png")}
          />
          <Text style={styles.streamName}>Arts</Text>
          <TouchableOpacity onPress={() => router.push("/Skill Test/questionsPage")} className="w-4/6 ml-auto mr-2 mt-14">
              <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
                <Text className="text-md text-center text-white font-semibold">
                  Attempt Quiz
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Pressable>
        <Pressable style={styles.card} onPress={() => {}}>
          <View style={styles.cardChild} >
          <Image
            style={styles.onczpn8501Icon}
            resizeMode="cover"
            source={require("../../../assets/images/tech.png")}
          />
          <Text style={styles.streamName}>Technology</Text>
          <TouchableOpacity onPress={() => router.push("/Skill Test/questionsPage")} className="w-4/6 ml-auto mr-2 mt-14">
              <View className="bg-[#2E6E8E] py-2.5 rounded-lg">
                <Text className="text-md text-center text-white font-semibold">
                  Attempt Quiz
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

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
    height: 102,
    marginBottom: 20,
    position: "relative",
  },
  scrollableSection: {
    flexGrow: 1, // Ensure scrolling
    paddingBottom: 20, // Add padding to avoid cutoff
    alignItems: "center", // Center cards horizontally
    marginTop: 30,
  },
});

export default QuizStreams;
