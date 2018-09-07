import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://hwt-backend.now.sh' // 'http://localhost:3000/api/v1'
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default instance
