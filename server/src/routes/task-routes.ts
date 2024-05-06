import { Router } from "express";
import { getTodayTasks, getUpcomingTasks, updateTask, postTask, deleteTask } from '../controllers/task-controller'

const router = Router()

router
    .route('/today')
    .get(getTodayTasks);

router
    .route('/upcoming')
    .get(getUpcomingTasks)

router
    .route('/update-task/:task_id')
    .put(updateTask)

router
    .route('/create-task')
    .post(postTask)

router
    .route('/delete-task/:task_id')
    .delete(deleteTask)


export default router