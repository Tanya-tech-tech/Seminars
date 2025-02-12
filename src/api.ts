import { Method } from "./const.ts";

const BASE_URL = 'http://localhost:3000/seminars';

const Route = {
  GET_DATA: '/seminars',
  SEND_DATA: '/',
};

export const api = async (method, payload, endpoint = BASE_URL) => {
  let config = {};

  if (method) {
    config = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (method === Method.POST || method === Method.PUT) {
      config.body = JSON.stringify(payload.body)
    }

    if (method === Method.DELETE || method === Method.PUT) {
      endpoint = `${endpoint}/${payload.id}`
    }
  }

  try {
    const response = await fetch(endpoint, config);
    if (response.ok) {
      let message
      switch (method) {
        case Method.POST: {
          message = 'Data has been added'
          break
        }
        case Method.DELETE: {
          message = 'Data has been removed'
          break
        }
        case Method.PUT: {
          message = 'Data has been updated'
          break
        }
        default: {
          message = 'Data has been received'
        }
      }
      console.log(message)

      const result = await response.json()
      return result
    }

    throw new Error(response.statusText)
  } catch (err) {
    console.error(err.message || err)
  }
}

