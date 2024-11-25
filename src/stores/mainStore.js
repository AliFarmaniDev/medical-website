import { defineStore } from 'pinia';

// base api
const api = 'http://localhost:3000';

export const useDoctorStore = defineStore('useDoctorStore', {
  state: () => ({
    doctors: [],
    loading: true,
    errMsg: '',
  }),

  getters: {
    sorted() {
      return this.doctors.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    },
  },

  actions: {
    getDoctors() {
      // get doctors
      fetch(`${api}/doctor-expertis`)
        .then((res) => res.json())
        .then((data) => {
          this.doctors = data;
          this.loading = false;
          // log data
          console.log(this.doctors);
        })
        .catch((err) => {
          this.errMsg = 'something is wrong';
          this.loading = false;
          console.log(`error is ${err.message}`);
        });
    },
  },
});
