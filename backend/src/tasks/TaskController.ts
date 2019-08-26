import { getTasks } from './controllers/getTasks'
import { updateTask } from './controllers/updateTask'
import { deleteTask } from './controllers/deleteTask'
import { addTask } from './controllers/addTask'

export default {
  get: getTasks,
  put: updateTask,
  delete: deleteTask,
  post: addTask
}
