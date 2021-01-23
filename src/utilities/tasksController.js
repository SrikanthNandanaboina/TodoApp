import axios from "axios";

class TasksController {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
  }

  dashboard = async (token) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dashboard`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return { data };
    } catch (err) {
      return { err: err.response };
    }
  };

  addTask = async (task, token) => {
    try {
      const { data } = await this.client.post(`/tasks`, task, {
        headers: {
          Authorization: token,
        },
      });
      return { data };
    } catch (err) {
      return { err: err.response };
    }
  };

  editTask = async (taskId, task, token) => {
    try {
      const { data } = await this.client.put(`/tasks/${taskId}`, task, {
        headers: {
          Authorization: token,
        },
      });
      return { data };
    } catch (err) {
      return { err: err.response };
    }
  };

  deleteTask = async (taskId, token) => {
    try {
      const { data } = await this.client.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: token,
        },
      });
      return { data };
    } catch (err) {
      return { err: err.response };
    }
  };
}

export default new TasksController(process.env.REACT_APP_BASE_URL);
