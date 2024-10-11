import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

const signup = () => {

    return (
        <View style={styles.userOnboardingScreen2}>
            <Pressable style={styles.userOnboardingScreen2Child} onPress={() => { }} />
            <Text style={styles.getStarted}>Get Started</Text>
            <Text style={styles.tapToLearn}>Tap to learn more...</Text>
            <Text style={styles.welcomeToAl}>Welcome to AL Path Finder!</Text>
            <View style={styles.toAIntelligentYouTogetherParent}>
                <Text style={[styles.toAIntelligent, styles.toAIntelligentTypo]}>to a intelligent you together.</Text>
                <Text style={[styles.andFacilitiesLets, styles.toAIntelligentTypo]}>and facilities. Let's embark on a journey</Text>
                <Text style={[styles.elevateYourExperience, styles.toAIntelligentTypo]}>{`Elevate your experience with our services `}</Text>
            </View>
            <Image style={styles.minimalTreeOfLifeIllustrat} resizeMode="cover" source="Minimal Tree of Life Illustrated Logo For Organic Spices Brand(1) 1.png" />
        </View>);
};

const styles = StyleSheet.create({
    toAIntelligentTypo: {
        fontFamily: "serif",
        fontWeight: "500",
        color: "#908e8e",
        textAlign: "center",
        fontSize: 16,
        position: "absolute"
    },
    userOnboardingScreen2Child: {
        top: 734,
        borderRadius: 17,
        backgroundColor: "#76b4d0",
        width: 337,
        height: 54,
        left: 27,
        position: "absolute"
    },
    getStarted: {
        top: 752,
        left: 99,
        fontWeight: "600",
        fontFamily: "serif",
        color: "#000",
        width: 195,
        height: 24,
        textAlign: "center",
        fontSize: 16,
        position: "absolute"
    },
    tapToLearn: {
        top: 689,
        left: 70,
        fontSize: 20,
        width: 253,
        height: 22,
        color: "#908e8e",
        fontFamily: "serif",
        textAlign: "center",
        position: "absolute"
    },
    welcomeToAl: {
        top: 457,
        fontSize: 28,
        color: "#353333",
        textAlign: "left",
        width: 375,
        height: 38,
        fontFamily: "serif",
        left: 27,
        position: "absolute"
    },
    toAIntelligent: {
        top: 48,
        left: 52
    },
    andFacilitiesLets: {
        top: 24,
        left: 6
    },
    elevateYourExperience: {
        marginLeft: -165.5,
        top: 0,
        left: "50%"
    },
    toAIntelligentYouTogetherParent: {
        top: 545,
        left: 31,
        width: 331,
        height: 72,
        position: "absolute"
    },
    minimalTreeOfLifeIllustrat: {
        top: 80,
        left: 10,
        borderRadius: 158,
        width: 371,
        height: 371,
        position: "absolute"
    },
    userOnboardingScreen2: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 852,
        overflow: "hidden"
    }
});

export default signup;
