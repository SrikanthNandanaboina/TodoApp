import axios from "axios";

class TasksController {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.BASE_URL,
    });
  }

  dashboard = async (token) => {
    const response = await this.client.get(`/dashboard`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  };

  allTasks = async (token) => {
    const response = await this.client.get(`/tasks`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  };

  addTask = async (data, token) => {
    const response = await this.client.post(`/tasks`, data, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  };

  editTask = async (taskId, token) => {
    const response = await this.client.put(`/tasks/${taskId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  };

  deleteTask = async (taskId, token) => {
    const response = await this.client.delete(`/tasks/${taskId}`, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  };
}

export default TasksController;
