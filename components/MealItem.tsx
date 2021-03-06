import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DefaultText from "./DefaultText";

type Props = {
	title: string;
	onSelectMeal: () => void;
	duration: number;
	complexity: string;
	affordability: string;
	imageUri: string;
};

const MealItem = ({
	title,
	onSelectMeal,
	duration,
	complexity,
	affordability,
	imageUri,
}: Props) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: imageUri }}
							style={styles.bgImage}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<DefaultText>{duration}m</DefaultText>
						<DefaultText>{complexity.toUpperCase()}</DefaultText>
						<DefaultText>{affordability.toUpperCase()}</DefaultText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		height: 200,
		width: "100%",
		backgroundColor: "#ccc",
		borderRadius: 10,
		overflow: "hidden",
		marginVertical: 10,
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end",
	},
	mealRow: {
		flexDirection: "row",
	},
	mealHeader: {
		height: "85%",
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		height: "15%",
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		color: "white",
		textAlign: "center",
	},
});
