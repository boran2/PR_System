import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTailwind from 'vue-tailwind'
import './css/tailwind.css'


import {
  TButton,
  TTable,
  TInput,
  TInputGroup
 
} from 'vue-tailwind/dist/components';

import './assets/tailwind.css'

const uiComponentSettings = {
  't-button': {
    component: TButton,
    props: {
      classes: 'bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1',
    }
  },
  't-table': {
    component: TTable,
    props: {
      classes: {
        table: 'min-w-full divide-y divide-gray-100 shadow-lg rounded-xl border-gray-200 bg-gray-300 border',
        thead: '',
        theadTr: '',
        theadTh: 'px-3 py-2 font-semibold text-left bg-gray-100 border-b',
        tbody: 'bg-white divide-y divide-gray-100',
        tr: '',
        td: 'px-3 py-2 whitespace-no-wrap',
        tfoot: '',
        tfootTr: '',
        tfootTd: ''
      },
      variants: {
        thin: {
          td: 'p-1 whitespace-no-wrap text-sm',
          theadTh: 'p-1 font-semibold text-left bg-gray-100 border-b text-sm'
        }
      }
    }
  },
  't-input': {
    component: TInput,
    props: {
      classes: 'border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
    },
  },
  't-input-group': {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: '',
        label: 'block uppercase text-gray-700 text-xs font-bold mb-2'
      }
    }
  }
}
createApp(App).use(router).use(VueTailwind, uiComponentSettings).mount('#app')