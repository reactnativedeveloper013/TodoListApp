
import TaskModel from './TaskModel.ts';


export const initiateEmptyStore = () => {


  new TaskModel({
    id: 'taskList',
    tasks:[]
  }).$save();



};
