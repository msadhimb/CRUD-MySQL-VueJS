<template>
  <main>
    <h1>Guest List</h1>
    <div class="container">
      <table class="table table-striped" style="max-height: 85vh">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(guest, index) in guests" v-bind:key="guest.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ guest.nama }}</td>
            <td>{{ guest.email == null ? "Kosong" : guest.email }}</td>
            <td>
              <button
                class="btn btn-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="handleUpdate(guest.id)"
              >
                Edit
              </button>
              <button class="btn btn-danger" @click="deleteGuest(guest.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="div d-flex justify-content-start">
        <router-link to="/" class="btn btn-success">Back</router-link>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Data</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form @submit.prevent="updateGuest()">
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="forms.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingName"
                  placeholder="Name"
                  v-model="forms.nama"
                />
                <label for="floatingName">Name</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "GuestList",
  data() {
    return {
      guests: [],
      forms: {
        id: "",
        nama: "",
        email: "",
      },
    };
  },
  mounted() {
    this.getAllGuest();
  },
  methods: {
    getAllGuest() {
      axios.get("http://localhost:4000/tamu").then((response) => {
        this.guests = response.data;
      });
    },
    deleteGuest(id) {
      axios.delete("http://localhost:4000/tamu/" + id).then((response) => {
        console.log(response);
        this.getAllGuest();
      });
    },
    handleUpdate(id) {
      axios.get("http://localhost:4000/tamu/" + id).then((response) => {
        const data = response.data;
        this.forms.id = data.id;
        this.forms.nama = data.nama;
        this.forms.email = data.email;
      });
    },
    updateGuest() {
      axios
        .put("http://localhost:4000/tamu/" + this.forms.id, this.forms)
        .then((response) => {
          console.log(response);
          this.getAllGuest();
        });
    },
  },
};
</script>

<style></style>
