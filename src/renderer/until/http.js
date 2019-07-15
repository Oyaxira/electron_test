import axios from 'axios'
import Qs from 'qs'

export default axios.create({
  headers: {
    // Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets'
    })
  },
})
