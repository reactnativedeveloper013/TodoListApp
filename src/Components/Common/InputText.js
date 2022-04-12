import React from 'react';
import { View, TextInput, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { hp, normalize, wp } from '../../Helper/responsiveScreen';
import { colors } from '../../Utils/colors';

const InputText = (props) => {
    const { placeholder, secureTextEntry, value, placeholderTextColor, lefticon, righticon, onChangeText, autoCorrect, containerStyle, textStyle, title, titleStyle, isTitle, isLeftIcon, keyboardType, multiline, onSubmitEditing, underlineColorAndroid,
        isRightIcon, RightIconStyle, LeftIconStyle, onRightIconPress, InputViewStyle, editable, numberOfLines, autoCapitalize, onFocus, onBlur, returnKeyType, refrence, onEndEditing, textContentType, blurOnSubmit, selectionColor,
        secondrighticon, onSecondRightIconPress, isSecondRightIcon, SecondRightIconStyle, onLeftIconPress, lefticonDisabled,
        countryCode, withFilter, withFlag, withCallingCode, onSelectCountry, visible, showcountryPicker } = props;
    return (
        <View style={[styles.ViewStyle, InputViewStyle]}>
            {isTitle && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            <View style={[styles.inputView, containerStyle]}>
                {isLeftIcon &&
                    <TouchableOpacity activeOpacity={1} onPress={onLeftIconPress} disabled={lefticonDisabled}>
                        <Image source={lefticon} style={[styles.lefticon, LeftIconStyle]} />
                    </TouchableOpacity>}

                <TextInput
                    ref={refrence}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={[styles.inputText, textStyle]}
                    onChangeText={onChangeText}
                    autoCorrect={autoCorrect}
                    value={value}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    onSubmitEditing={onSubmitEditing}
                    underlineColorAndroid={underlineColorAndroid}
                    editable={editable}
                    numberOfLines={numberOfLines}
                    autoCapitalize={autoCapitalize}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    returnKeyType={returnKeyType}
                    onEndEditing={onEndEditing}
                    textContentType={textContentType}
                    blurOnSubmit={blurOnSubmit}
                    selectionColor={selectionColor}
                />
                {isRightIcon &&
                    <TouchableOpacity activeOpacity={1} onPress={onRightIconPress}>
                        <Image source={righticon} style={[styles.righticon, RightIconStyle]} resizeMode={'contain'} />
                    </TouchableOpacity>}
                {isSecondRightIcon &&
                    <TouchableOpacity activeOpacity={1} onPress={onSecondRightIconPress}>
                        <Image source={secondrighticon} style={[styles.righticon, SecondRightIconStyle]} />
                    </TouchableOpacity>
                }

            </View>
        </View>
    )
}

export default InputText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ViewStyle: {
        marginVertical: hp(1)
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(5)
    },
    inputText: {
        fontSize: 17,
        fontWeight: '500',
        color: colors.BLACK,
        flexGrow: 1,
    },
    lefticon: {
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.BLACK,
        paddingVertical: hp(1),
        marginHorizontal: wp(5)
    },
  
});