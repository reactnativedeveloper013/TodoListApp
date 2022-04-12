import { StyleSheet } from "react-native";
import { hp, isAndroid, normalize, wp } from "../Helper/responsiveScreen";
import { colors } from "./colors";

// common style 
export const commonStyles = StyleSheet.create({
  
    inputContainerStyle: {
        borderColor: colors.BORDER,
        backgroundColor: colors.CLEAR,
        borderWidth: 1,
        paddingVertical: isAndroid ? hp(0) : hp(1.5),
        borderRadius: 5,
        paddingHorizontal: wp(4)
    },
   
});