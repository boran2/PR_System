<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      bg-gray-900
    "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <!-- <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              href="#pablo"
            >
              <i
                class="
                  fab
                  fa-facebook-square
                  text-lg
                  leading-lg
                  text-white
                  opacity-75
                "
              /><span class="ml-2">Share</span>
            </a>
          </li> -->
          <li class="nav-item">
            <a
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
                cursor-pointer
              "
            >
              <span class="ml-2"
                ><img
                  @click="$refs.modal.show()"
                  alt=" user"
                  src="../assets/img/userWhite.svg"
              /></span>
            </a>
          </li>
        </ul>
        <t-modal ref="modal" class="m-auto">
          <p class="text-center text-xl font-semibold">Chcete sa odhlasiť?</p>
          <div class="flex mt-3 items-center justify-center">
            <t-button
              style="transition: all 0.15s ease 0s"
              @click="$router.push('/login')"
            >
              Áno</t-button
            >
            <t-button @click="$refs.modal.hide()" type="button">Nie</t-button>
          </div>
        </t-modal>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'indigo-navbar',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
