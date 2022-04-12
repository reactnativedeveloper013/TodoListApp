import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { hp, wp, normalize } from '../../Helper/responsiveScreen';
import { colors, Font } from '../../Utils/colors';

const Button = (props) => {

  return (
    <TouchableOpacity activeOpacity={1} onPress={props?.onPress} >
      <View style={[styles.container, props?.customStyle]}>
        <Text style={[styles.textStyle,props?.customTextStyle]}>{props.title}</Text>
        {
          props?.rightIcon && 
          <Image source={props?.rightIcon} style={[{height: wp(6) , width: wp(6), marginLeft: wp(3)},props?.RightIconStyle]} resizeMode='contain' />
   
        }
           </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GREEN,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(2),
    borderRadius: 6,
    alignSelf: 'center',
    marginVertical: hp(1),
   
  },
  textStyle:{ fontFamily: 'bold', fontSize: 17, color: colors.BLACK }

});


export default Button;
