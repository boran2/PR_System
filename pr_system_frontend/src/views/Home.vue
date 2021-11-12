<template>
  <div class="bg-gray-900">
    <main>
      <header-component></header-component>
      <section class="absolute w-full h-full bg-gray-900">
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <t-modal ref="modal" class="m-auto">
              <p class="text-center text-xl">
                {{ table.records[eventId].name }}
              </p>
              <p class="text-center text-xs">
                {{ table.records[eventId].place }}
              </p>
              <p class="text-center text-xs">
                {{ table.records[eventId].speaker }}
              </p>
              <p class="text-center text-xs">
                {{ table.records[eventId].time }}
              </p>
              <div class="flex-auto px-2 lg:px-10 py-10 pt-10">
                  <div class="flex">
                    <div class="w-1/2">
                      <div class="relative w-full mb-3 mr-3">
                        <t-input-group label="Meno" for="grid-password">
                          <t-input
                            type="name"
                            placeholder="Meno"
                            style="transition: all 0.15s ease 0s"
                            id="formNameid"
                          />
                        </t-input-group>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="relative w-full mb-3 ml-3">
                        <t-input-group label="Priezvisko" for="grid-password">
                          <t-input
                            type="surname"
                            placeholder="Priezvisko"
                            style="transition: all 0.15s ease 0s"
                            id="formSurnameid"
                          />
                        </t-input-group>
                      </div>
                    </div>
                  </div>
                  <div class="flex mb-8">
                    <div class="w-1/2">
                      <div class="relative w-full mb-3 mr-3">
                        <t-input-group
                          label="Telefónne číslo"
                          for="grid-password"
                        >
                          <t-input
                            type="tel"
                            placeholder="Telefónne číslo"
                            style="transition: all 0.15s ease 0s"
                            id="formPhoneid"
                          />
                        </t-input-group>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="relative w-full mb-3 ml-3">
                        <t-input-group label="Email" for="grid-password">
                          <t-input
                            type="email"
                            placeholder="Email"
                            style="transition: all 0.15s ease 0s"
                            id="formMailid"
                          />
                        </t-input-group>
                      </div>
                    </div>
                  </div>
                <!-- <hr class="mb-4 border-b-1 border-gray-700" /> -->
                <p class="text-left text-base">Miesta na sedenie:</p>
                <div class="mt-1 mb-6 grid grid-cols-10 gap-2">
                  <div
                    v-for="index in 50"
                    :key="index"
                    class="py-1 px-2 rounded bg-green-300 cursor-pointer flex justify-center"
                  >
                    {{ index }}
                  </div>
                </div>
                <div class="flex items-center justify-center">
                  <t-button @click="$refs.modal.hide()">Rezervovať</t-button>
                </div>
              </div>
            </t-modal>
            <t-table :headers="table.headers" :data="table.records">
              <template v-slot:row="props">
                <tr
                  :class="[
                    props.trClass,
                    props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
                  ]"
                >
                  <td :class="props.tdClass">{{ props.row.id }}</td>
                  <td :class="props.tdClass">{{ props.row.name }}</td>
                  <td :class="props.tdClass">{{ props.row.place }}</td>
                  <td :class="props.tdClass">{{ props.row.time }}</td>
                  <td :class="props.tdClass">{{ props.row.speaker }}</td>
                  <td
                    v-if="props.row.organizer == 'greenpeace'"
                    :class="props.tdClass"
                  >
                    <img alt=" organizer" src="../assets/img/greenpeace.svg" />
                  </td>
                  <td
                    v-if="props.row.organizer == 'finax'"
                    :class="props.tdClass"
                  >
                    <img alt=" organizer" src="../assets/img/finax.svg" />
                  </td>
                  <td
                    v-if="props.row.organizer == 'who'"
                    :class="props.tdClass"
                  >
                    <img alt=" organizer" src="../assets/img/who.svg" />
                  </td>
                  <td :class="props.tdClass">{{ props.row.type }}</td>
                  <td :class="props.tdClass">
                    <t-button
                      @click=" $refs.modal.show((eventId = props.row.id - 1)); getLogedUserdata();"
                      >open</t-button
                    >
                  </td>
                </tr>
              </template>
            </t-table>
          </div>
        </div>
        <!-- <t-button>Example button</t-button> -->
        <footer-component></footer-component>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import FooterComponent from '../components/Footer.vue'
import { ReservationAPI } from '@/services/api'

export default {
  name: 'homepage',
  components: {
    // NavbarComponent,
    HeaderComponent,
    FooterComponent,
  },
  created() {
    // document.getElementById('formNameid').value = this.$logedUser.name
    // document.getElementById('formSurnameid').value = this.$logedUser.surname
    // document.getElementById('formPhoneid').value = this.$logedUser.phone
    // document.getElementById('formMailid').value = this.$logedUser.mail
    this.getLogedUser()
    console.log(this.logedUser)
  },
  data: () => ({
    eventId: 0,
    logedUser: [],
    table: {
      headers: [
        '#',
        'Názov',
        'Miesto',
        'Čas konania',
        'Speakeri',
        'Organizátor',
        'Detail',
        'Akcia',
      ],
      records: [
        {
          id: 1,
          name: 'Zastavme globálne oteplovanie',
          place: 'Fakulta Matematiky fyziky a informatiky, F2',
          time: '4.12.2021, 16:30',
          speaker: 'Ing. Pavol Novák',
          organizer: 'greenpeace',
          type: 'Prednaška',
        },
        {
          id: 2,
          name: 'Uhliková stopa',
          place: 'Fakulta Elektrotechniky a informatiky, B-212',
          time: '8.12.2021, 19:30',
          speaker: 'Ing. Pavol Junák',
          organizer: 'greenpeace',
          type: 'Seminár',
        },
        {
          id: 3,
          name: 'Uhliková stopa',
          place: 'Fakulta Elektrotechniky a informatiky, B-212',
          time: '8.12.2021, 19:30',
          speaker: 'Ing. Pavol Junák',
          organizer: 'greenpeace',
          type: 'Seminár',
        },
        {
          id: 4,
          name: 'Inflácia na najbližší rok',
          place: 'Fakulta Matematiky fyziky a informatiky, A',
          time: '10.12.2021, 12:30',
          speaker: 'Ing. Ján Novák',
          organizer: 'finax',
          type: 'Prednaška',
        },
        {
          id: 5,
          name: 'Účinnosť očkovania proti COVID',
          place: 'Zdravotná univerzita, B-130',
          time: '11.12.2021, 16:30',
          speaker: 'Doc. Adam Ondriška',
          organizer: 'who',
          type: 'Prednaška',
        },
        {
          id: 6,
          name: 'Účíme sa investovať',
          place: 'Fakulta Matematiky fyziky a informatiky, B',
          time: '15.12.2021, 18:30',
          speaker: 'Ing. Juraj Kováč',
          organizer: 'finax',
          type: 'Seminár',
        },
      ],
    },
  }),
  methods: {
    getLogedUser() {
      ReservationAPI.getLogedUser()
        .then((res) => (this.logedUser = res.data))
        .catch((err) => console.log(err))
    },
    postLogedUser(data) {
      ReservationAPI.postLogedUser(data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    },
    getLogedUserdata() {
      console.log(this.logedUser)
     document.getElementById('formNameid').value = this.logedUser.name
     document.getElementById('formSurnameid').value = this.logedUser.surname
     document.getElementById('formPhoneid').value = this.logedUser.phone
     document.getElementById('formMailid').value = this.logedUser.mail
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
