<template>
  <div>
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="
                  relative
                  flex flex-col
                  min-w-0
                  break-words
                  w-full
                  mb-6
                  shadow-lg
                  rounded-lg
                  bg-gray-300
                  border-0
                "
              >
                <div class="flex-auto px-4 lg:px-10 py-10 pt-10">
                  <div class="relative w-full mb-3">
                    <t-input-group label="Email" for="grid-password">
                      <t-input
                        type="email"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s"
                        id="logMailid"
                      />
                    </t-input-group>
                  </div>
                  <div class="relative w-full mb-3">
                    <t-input-group label="Password" for="grid-password">
                      <t-input
                        type="password"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s"
                        id="logPasswordid"
                      />
                    </t-input-group>
                  </div>
                  <div class="flex items-center justify-center">
                    <div class="mt-5">
                      <t-button
                        style="transition: all 0.15s ease 0s"
                        @click="findPerson()"
                      >
                        Sing in</t-button
                      >
                      <t-button
                        style="transition: all 0.15s ease 0s"
                        @click="$router.push('/register')"
                      >
                        Sing up</t-button
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Forgot password?</small></a
                  >
                </div>
                <div class="w-1/2 text-right">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Create new account</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </section>
    </main>
  </div>
</template>
<script>
// import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from '../components/Footer.vue'
import { ReservationAPI } from '@/services/api'

export default {
  name: 'login-page',
  components: {
    // NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      users: [],
      logedUser: {},
    }
  },
  created() {
    // try {
    //   const res = await axios.get(window.location.origin + '/data/users.json')
    //   this.users = res.data;
    // } catch (e) {
    //   console.error(e);
    // }
    // console.log(this.users)

    this.getUsers()
  },
  methods: {
    getUsers() {
      ReservationAPI.getUsers()
        .then((res) => (this.users = res.data))
        .catch((err) => console.log(err))
    },
    postLogedUser(data) {
      ReservationAPI.postLogedUser(data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    },
    getLogedUser() {
    },
    findPerson() {
      var mail = document.getElementById('logMailid').value
      var password = document.getElementById('logPasswordid').value

      for (var i = 0; i < this.users.length; i++) {
        console.log(this.users[i].mail)
        console.log(mail)

        if (
          this.users[i].mail === mail &&
          this.users[i].password === password
        ) {
          let logedUser = {
            id: this.users[i].id,
            name: this.users[i].name,
            surname: this.users[i].surname,
            phone: this.users[i].phone,
            mail: this.users[i].mail,
            password: this.users[i].password,
            places: this.users[i].places,
          }
          console.log(logedUser)
          this.postLogedUser(logedUser)
          console.log(logedUser)
          this.$router.push('/home')
          return
        }
      }
      this.$router.push('/register')

    },
  },
}
</script>
