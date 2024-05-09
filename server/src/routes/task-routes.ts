import type { Response } from "express"
import dayjs from "dayjs"
import { db } from '../db'
import { Router } from "express"
import { authenticateToken } from '../middlewares/auth'
import type { AuthenticatedRequest } from '../types/requestWithUserId'

const router = Router()


//get today's tasks
router.get('/today', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const today = dayjs().format('YYYY-MM-DD')
    const tasks = await db('task')
      .where('due_date', '=', today)
      .andWhere({ 'user_id': req.user.userId })

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve today's task.`
    })
  }
}
)

//get upcoming tasks
router.get('/upcoming', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const today = dayjs().format('YYYY-MM-DD')
    const tasks = await db('task')
      .where('due_date', '>', today)
      .andWhere({ 'user_id': req.user.userId })

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve today's task.`
    })
  }
}
)

//get task by id
router.get('/:task_id', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  const { task_id } = req.params
  try {
    const task = await db('task')
      .where({ id: task_id }).first()
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve the task with id: ${task_id}`
    })
  }
}
)

//post task
router.post('/create-task', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  const postData = req.body
  try {
    const data = await db('task').insert({
      user_id: req.user.userId,
      ...postData
    })
    const newTask = data[0]
    const createdTask = await db('task').where({ id: newTask }).first()
    res.status(201).json({ createdTask })
  } catch (error) {
    res.status(500).json({ message: `Error creating new task` });
  }
}
)

//update task by id
router.put('/update-task/:task_id', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  const { task_id } = req.params
  const putData = req.body
  try {
    const updatedData = await db('task').where({ id: task_id }).update(putData)
    res.status(200).json({ updatedData })
  } catch (error) {
    res.status(500).json({ message: `Error updating task item` })
  }
}
)

//delete task by id
router.delete('/delete-task/:task_id', authenticateToken, async (req: AuthenticatedRequest, res: Response) => {
  const { task_id } = req.params
  try {
    const deletedTask = await db('task').where({ id: task_id }).delete()
    if (deletedTask === 0) {
      return res
        .status(404)
        .json({ message: `Task not found` });
    }
    res.status(204).json({ message: `Task deleted successfully.` })
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete task: ${error}`
    })
  }
})

export default router
