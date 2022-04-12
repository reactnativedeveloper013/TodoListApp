import {BaseModel} from '../reduxStore';

interface DataSectionConfig {
  tasks: any[];
}

export default class TaskModel extends BaseModel<DataSectionConfig> {
  static resource = 'TaskModel';
}
