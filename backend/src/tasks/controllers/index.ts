import { getTasks } from './getTasks'
import { updateTask } from './updateTask'
import { deleteTask } from './deleteTask'
import { addTask } from './addTask'

export default {
  get: getTasks,
  put: updateTask,
  delete: deleteTask,
  post: addTask
}
