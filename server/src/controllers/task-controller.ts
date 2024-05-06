import { Request, Response } from "express";
import { db } from '../db'

//date object
const date = new Date()
date.setDate(date.getDate() - 1)
const today = date.toISOString().split('T')[0];

//get today's tasks
const getTodayTasks = async (_req: Request, res: Response) => {
    try {
        const tasks = await db('task').where({ 'due_date': today })
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve today's task.`
        })
    }
}

//get upcoming tasks
const getUpcomingTasks = async (_req: Request, res: Response) => {
    try {
        const tasks = await db('task').where('due_date', '>', today)
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve today's task.`
        })
    }
}

//get task by id
const getTaskById = async (req: Request, res: Response) => {
    const { task_id } = req.params
    try {
        const task = await db('task').where({ id: task_id })
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve the task with id: ${task_id}`
        })
    }
}

//post task
const postTask = async (req: Request, res: Response) => {
    const postData = req.body
    try {
        const data = await db('task').insert(postData)
        const newTask = data[0]
        const createdTask = await db('task').where({ id: newTask }).first()
        res.status(201).json({ createdTask })
    } catch (error) {
        res.status(500).json({ message: `Error creating new task` });
    }
}

//update task by id
const updateTask = async (req: Request, res: Response) => {
    const { task_id } = req.params
    const putData = req.body
    try {
        const updatedData = await db('task').where({ id: task_id }).update(putData)
        res.status(200).json({ updatedData })
    } catch (error) {
        res.status(500).json({ message: `Error updating task item` })
    }
}

//delete task by id
const deleteTask = async (req: Request, res: Response) => {
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
}

export {
    getTodayTasks,
    getUpcomingTasks,
    getTaskById,
    updateTask,
    postTask,
    deleteTask,
}