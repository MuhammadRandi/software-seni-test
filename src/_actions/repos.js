import Axios from "axios"
import { GET_REPOS } from "../config/constant"

export const getRepos = (username) => {
    return {
        type: GET_REPOS,
        payload: Axios({
          method: "GET",
          url: `https://api.github.com/users/${username}/repos`
        })
      };
}