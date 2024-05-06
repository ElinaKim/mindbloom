import { Request, Response } from "express";

const knex = require('knex')(require('../../knexfile'));

//get today's tasks
const date = new Date()
date.setDate(date.getDate() - 1)
const today = date.toISOString().split('T')[0];

const getTodayTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await knex('task').where({ 'due_date': today })
        if (tasks.length === 0) {
            return res.status(404).json({
                message: `Today's tasks were not found.`
            })
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve today's task.`
        })
    }
}

//get upcoming tasks
const getUpcomingTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await knex('task').where('due_date', '<', today)
        if (tasks.length === 0) {
            return res.status(404).json({
                message: `Upcoming tasks were not found.`
            })
        }
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve today's task.`
        })
    }
}


//post task
const postTask = async (req: Request, res: Response) => {
    const postData = req.body
    try {
        const data = await knex('task').insert(postData)
        const newTask = data[0]
        const createdTask = await knex('task').where({ id: newTask }).first()
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
        const updatedData = await knex('task').where({ id: task_id }).update(putData)
        res.status(200).json({ updatedData })
    } catch (error) {
        res.status(500).json({ message: `Error updating task item` })
    }
}

//delete task by id
const deleteTask = async (req: Request, res: Response) => {
    const { task_id } = req.params
    try {
        const deletedTask = await knex('task').where({ id: task_id }).delete()
        if (deletedTask === 0) {
            return res
                .status(404)
                .json({ message: `Warehouse with ID ${req.params.warehouse_id} not found` });
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
    updateTask,
    postTask,
    deleteTask,
}