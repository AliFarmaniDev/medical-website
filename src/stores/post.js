import { defineStore } from 'pinia'
import axios from 'axios'
//set base url
const api = 'http://localhost:3000'
export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    loeading: true,
    errorMessage: '',
  }),

  getters: {
    showPosts() {
      return this.posts
    },
  },

  actions: {
    getPosts() {
      axios
        .get(`${api}/posts`)
        .then((res) => {
          this.posts = res.data
          this.loeading = false
        })
        .catch((err) => {
          this.errorMessage = 'somthing is wrong'
          console.log(err.message)
        })
    },
  },
})
