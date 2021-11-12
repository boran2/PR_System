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
                      <t-input-group label="Meno" for="grid-password">
                        <t-input
                          type="name"
                          placeholder="Meno"
                          style="transition: all 0.15s ease 0s"
                          id="registerNameid"
                        />
                      </t-input-group>
                    </div>
                    <div class="relative w-full mb-3">
                      <t-input-group label="Priezvisko" for="grid-password">
                        <t-input
                          type="surname"
                          placeholder="Priezvisko"
                          style="transition: all 0.15s ease 0s"
                          id="registerSurnameid"
                        />
                      </t-input-group>
                    </div>
                    <div class="relative w-full mb-3">
                      <t-input-group
                        label="Telefónne číslo"
                        for="grid-password"
                      >
                        <t-input
                          type="tel"
                          placeholder="Telefónne číslo"
                          style="transition: all 0.15s ease 0s"
                          id="Phoneid"
                        />
                      </t-input-group>
                    </div>
                    <div class="relative w-full mb-3">
                      <t-input-group label="Email" for="grid-password">
                        <t-input
                          class="
                            form-control
                            @error('email')
                            border-red-500
                            @enderror
                          "
                          type="email"
                          placeholder="Email"
                          style="transition: all 0.15s ease 0s"
                          id="registerMailid"
                        />
                      </t-input-group>
                    </div>
                    <div class="relative w-full mb-3">
                      <t-input-group label="Heslo" for="grid-password">
                        <t-input
                          type="password"
                          placeholder="Heslo"
                          style="transition: all 0.15s ease 0s"
                          id="registerPasswordid"
                        />
                      </t-input-group>
                    </div>
                    <div class="mt-5">
                      <div class="flex items-center justify-center">
                        <t-button
                          @click="createPerson()">
                          Register</t-button
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
export default {
  name: 'login-page',
  components: {
    // NavbarComponent,
    FooterComponent,
  },
  created (){
  //     document.getElementById('registerNameid').value = ''
  //     document.getElementById('registerSurnameid').value = ''
  //     document.getElementById('registerPhoneid').value = ''
  //     document.getElementById('registerMailid').value = ''
  //     document.getElementById('registerPasswordid').value = ''
  },
  methods: {
    createPerson() {
      // var person = {
      //   id: this.$users.length + 1,
      //   name: '',
      //   surname: '',
      //   phone: '',
      //   mail: '',
      //   password: '',
      // }

      // person.name = document.getElementById('registerNameid').value
      // person.surname = document.getElementById('registerSurnameid').value
      // person.phone = document.getElementById('registerPhoneid').value
      // person.mail = document.getElementById('registerMailid').value
      // person.password = document.getElementById('registerPasswordid').value
      // for (var searchedPerson in this.$users) {
      //   if (searchedPerson.mail === person.mail) {
      //     return;
      //   }
      // }
      // console.log(person.mail)
      // this.$users.push(person)
      // this.$router.push('/login');
    },
  },
  data: () => ({
    eventId: 0,
  }),
}
</script>
