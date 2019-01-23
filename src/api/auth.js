import axios from 'axios';

export default() => {
    return axios.create({
      baseURL: `http://localhost:3030/user`,
      proxy: {
          host: 'http://192.168.43.35',
          port: 8081,
        }
  })
  }