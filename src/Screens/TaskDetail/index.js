
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import TaskRenderItem from '../../Components/TaskItem/TaskrenderItem';
import { wp,hp } from '../../Helper/responsiveScreen';
import TaskModel from '../../models/TaskModel';
import TaskService from '../../services/TaskService';
import { colors } from '../../Utils/colors';


const TaskDetailScreen = ({ navigation, route, }) => {

const item = route.params.item

    function BackClick() {
        navigation.goBack();
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
        });
      
        return unsubscribe;
    }, [navigation]);

  
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Task Detail',
            headerLeft: () => {
                return(
                    <TouchableOpacity onPress={() => BackClick()}>
                    <Image source={require('../../Assets/Images/arrow.png')} style={{height: wp(5), width:wp(5),marginHorizontal: wp(4)}}></Image>
                    </TouchableOpacity>
                )
            },
            headerTintColor: 'black', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
        });
      }, [navigation]);

  
    return (
        <View style={styles.container}>
         <Text style={{fontWeight: '500'}}>{item?.content}</Text>
        <Text style={styles.textStyle}>Priority : {item?.priority}</Text>
          <Text style={styles.textStyle}>Date : {item?.due?.date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingHorizontal: wp(4)
    },
    textStyle: {
        fontSize: 12, paddingVertical: hp(1)
    }
});



const mapStateToProps = (state) => {
   
    return { };
};

export default connect(mapStateToProps)(TaskDetailScreen);

