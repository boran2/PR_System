<template>
  <div class="hello">
    <t-table
      :headers="[
        {
          value: 'name',
          text: 'Názov',
        },
        {
          value: 'place',
          text: 'Miesto',
        },
        {
          value: 'time',
          text: 'Čas konania',
        },
        {
          value: 'speaker',
          text: 'Speakeri',
        },
        {
          value: 'organizer',
          text: 'Organizátor',
        },
        {
          value: 'type',
          text: 'Detail',
        },
        {
          value: 'actions',
          text: 'Akcia',
        },
      ]"
      :data="[
        {
          id: 1,
          name: 'Zastavme globálne oteplovanie',
          place: 'Fakulta Matematiky fyziky a informatiky, F2',
          time: '4.12.2021, 16:30',
          speaker: 'Ing. Pavol Novák',
          organizer: 'GrennPeace',
          type: 'Prednaška',
        },
        {
          id: 2,
          name: 'Uhliková stopa',
          place: 'Fakulta Elektrotechniky a informatiky, B-212',
          time: '8.12.2021, 19:30',
          speaker: 'Ing. Pavol Junák',
          organizer: 'GrennPeace',
          type: 'Seminár',
        },
        {
          id: 2,
          name: 'Uhliková stopa',
          place: 'Fakulta Elektrotechniky a informatiky, B-212',
          time: '8.12.2021, 19:30',
          speaker: 'Ing. Pavol Junák',
          organizer: 'GrennPeace',
          type: 'Seminár',
        },
        {
          id: 3,
          name: 'Inflácia na najbližší rok',
          place: 'Fakulta Matematiky fyziky a informatiky, A',
          time: '10.12.2021, 12:30',
          speaker: 'Ing. Ján Novák',
          organizer: 'Finax',
          type: 'Prednaška',
        },
        {
          id: 4,
          name: 'Účinnosť očkovania proti COVID',
          place: 'Zdravotná univerzita, B-130',
          time: '11.12.2021, 16:30',
          speaker: 'Doc. Adam Ondriška',
          organizer: 'WHO',
          type: 'Prednaška',
        },
        {
          id: 5,
          name: 'Účíme sa investovať',
          place: 'Fakulta Matematiky fyziky a informatiky, B',
          time: '15.12.2021, 18:30',
          speaker: 'Ing. Juraj Kováč',
          organizer: 'Finax',
          type: 'Seminár',
        },
      ]"
    >
      <!-- <template slot="row" slot-scope="props">
        <tr
          :class="[
            props.trClass,
            props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
          ]"
        >
          <td :class="props.tdClass">
            {{ props.row.name }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.place }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.time }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.speaker }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.organizer }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.time }}
          </td>
          <td :class="props.tdClass">
            <t-button variant="secondary">Rezervácia</t-button>
          </td>
        </tr>
      </template> -->
    </t-table>
    <t-button>Example button</t-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
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
