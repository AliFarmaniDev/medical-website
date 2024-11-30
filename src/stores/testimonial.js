import { defineStore } from 'pinia'
import axios from 'axios'
// base url
const api = 'http://localhost:3000'

export const useTestimonialStore = defineStore('testimonial', {
  state: () => ({
    testimonial: [],
    loading: true,
    errMsg: '',
  }),

  getters: {
    showTestimonial() {
      return this.testimonial
    },
  },

  actions: {
    getTestimonial() {
      //get data
      axios
        .get(`${api}/testimonial`)
        .then((res) => {
          this.testimonial = res.data
          this.loading = false
          console.log(this.testimonial)
        })
        .catch((err) => {
          this.errMsg = 'somthing is wrong'
          console.log(`error is ${err.message}`)
        })
    },
  },
})
