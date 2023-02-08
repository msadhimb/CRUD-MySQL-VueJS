<template>
  <main>
    <div class="container pt-5">
      <h1 class="w-100">Congratulation on your wedding</h1>
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <img
            src="../assets/undraw_wedding_re_66hj.png"
            alt="wedding"
            class="d-block img-fluid"
          />
        </div>
        <div class="col-md-6">
          <form @submit.prevent="addGuest()">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                :value="this.forms.email"
                @input="(event) => (this.forms.email = event.target.value)"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="Name"
                :value="this.forms.nama"
                @input="(event) => (this.forms.nama = event.target.value)"
              />
              <label for="floatingName">Name</label>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
      <div class="div d-flex justify-content-end">
        <router-link to="/guest" class="btn btn-success"
          >See Guest List</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "InputGuest",
  data() {
    return {
      forms: {
        email: "",
        nama: "",
      },
    };
  },
  methods: {
    addGuest() {
      axios
        .post("http://localhost:4000/tamu", this.forms)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.forms.email = "";
      this.forms.nama = "";
    },
  },
};
</script>

<style></style>
