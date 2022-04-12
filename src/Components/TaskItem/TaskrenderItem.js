import moment from 'moment';
import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { hp, wp,} from '../../Helper/responsiveScreen';
import { colors } from '../../Utils/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const TaskRenderItem = (props) => {
    const {item ,onPress,changeStatus} = props;
   
   const renderLeftActions = (progress, dragX) => {
      const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [-20, 0, 0, 1],
      });
      return (
        <Animated.View style={{backgroundColor:'Transparent',width:"35%",justifyContent:'center'}}>
         <Animated.Text style={{marginRight:'auto',marginRight:50, fontSize:15, fontWeight:'bold',transform: [{ translateX: trans }]}}>{item?.completed ? 'Open' : 'Completed'}</Animated.Text>
       </Animated.View>
      );
    };
    
    const animatedChangeStatus = useCallback(() => {
      changeStatus();
  })
    return (
      <Swipeable renderLeftActions={renderLeftActions} onSwipeableOpen={() => animatedChangeStatus()}>
        <Animated.View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
          <Text style={{fontWeight: '500', color: item?.completed ? colors.GREEN: colors.RED}}>{item.content}</Text>
          {
            item.description != '' && 
            <Text style={{fontSize: 12}}>{item.description}</Text>
          }
          <Text style={styles.textstyle}>Date: {moment(item.created).format('DD-MM-YYYY hh:mm a')}</Text>
          </TouchableOpacity>
        </Animated.View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
     marginVertical: hp(2), 
     marginHorizontal: wp(5),
     borderColor: colors.BORDER,
     borderWidth: 1,
     borderRadius: wp(3),
     padding: wp(2),
    },
    textstyle: {
      fontSize: 12, paddingVertical: hp(1)
    }
});


export default TaskRenderItem;
