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
                  <form>
                    <div class="relative w-full mb-3">
                      <t-input-group label="Email" for="grid-password">
                        <t-input
                          type="email"
                          placeholder="Email"
                          style="transition: all 0.15s ease 0s"
                        />
                      </t-input-group>
                    </div>
                    <div class="relative w-full mb-3">
                      <t-input-group label="Password" for="grid-password">
                        <t-input
                          type="password"
                          placeholder="Password"
                          style="transition: all 0.15s ease 0s"
                        />
                      </t-input-group>
                    </div>
                    <div class="mt-5 flex">
                      <div class="w-1/2">
                        <router-link
                          to="/home"
                          style="transition: all 0.15s ease 0s"
                          class="
                            float-right
                            bg-gray-900
                            text-white
                            active:bg-gray-700
                            text-sm
                            font-bold
                            uppercase
                            px-5
                            py-3
                            rounded
                            shadow
                            hover:shadow-lg
                            outline-none
                            focus:outline-none
                            mr-3
                            mb-1
                          "
                          >Sing in</router-link
                        >
                      </div>
                      <div class="w-1/2">
                        <router-link
                          to="/home"
                          style="transition: all 0.15s ease 0s"
                          class="
                            float-left
                            bg-gray-900
                            text-white
                            active:bg-gray-700
                            text-sm
                            font-bold
                            uppercase
                            px-5
                            py-3
                            rounded
                            shadow
                            hover:shadow-lg
                            outline-none
                            focus:outline-none
                            mr-3
                            mb-1
                          "
                          >Sing up</router-link
                        >
                      </div>
                    </div>
                  </form>
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
}
</script>
