import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTailwind from 'vue-tailwind'
import './css/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {
  TButton,
  TTable,
  TInput,
  TInputGroup,
  TModal,
} from 'vue-tailwind/dist/components'

import './assets/tailwind.css'

const uiComponentSettings = {
  't-button': {
    component: TButton,
    props: {
      classes:
        'bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1',
    },
  },
  't-table': {
    component: TTable,
    props: {
      classes: {
        table:
          'min-w-full divide-y divide-gray-100 shadow-lg rounded-xl border-gray-200 bg-gray-300 border',
        thead: '',
        theadTr: '',
        theadTh: 'px-3 py-2 font-semibold text-left bg-gray-100 border-b',
        tbody: 'bg-white divide-y divide-gray-100',
        tr: '',
        td: 'px-3 py-2 whitespace-no-wrap',
        tfoot: '',
        tfootTr: '',
        tfootTd: '',
      },
      variants: {
        thin: {
          td: 'p-1 whitespace-no-wrap text-sm',
          theadTh: 'p-1 font-semibold text-left bg-gray-100 border-b text-sm',
        },
      },
    },
  },
  't-input': {
    component: TInput,
    props: {
      classes:
        'border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full',
    },
  },
  't-input-group': {
    component: TInputGroup,
    props: {
      fixedClasses: {
        wrapper: '',
        label: 'block uppercase text-gray-700 text-xs font-bold mb-2',
      },
    },
  },
  't-modal': {
    component: TModal,
    props: {
      fixedClasses: {
        overlay:
          'z-40 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
        wrapper: 'relative mx-auto z-50 max-w-lg px-3 py-12',
        modal: 'overflow-visible relative  rounded',
        body: 'p-3',
        header: 'border-b p-3 rounded-t',
        footer: ' p-3 rounded-b',
        close:
          'flex items-center justify-center rounded absolute right-0 top-0 h-5 w-5 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      },
      classes: {
        overlay: 'bg-black',
        wrapper: '',
        modal: 'bg-white shadow',
        body: 'p-3',
        header: 'border-gray-100',
        footer: 'bg-gray-100',
        close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
        closeIcon: 'fill-current h-4 w-4',
        overlayEnterClass: 'opacity-0',
        overlayEnterActiveClass: 'transition ease-out duration-100',
        overlayEnterToClass: 'opacity-100',
        overlayLeaveClass: 'opacity-100',
        overlayLeaveActiveClass: 'transition ease-in duration-75',
        overlayLeaveToClass: 'opacity-0',
        enterClass: '',
        enterActiveClass: '',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: '',
      },
      variants: {
        danger: {
          overlay: 'bg-red-100',
          header: 'border-red-50 text-red-700',
          close:
            'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
          modal: 'bg-white border border-red-100 shadow-lg',
          footer: 'bg-red-50',
        },
      },
    },
  },
}

const myV3App = createApp(App)
myV3App.use(VueTailwind, uiComponentSettings)
myV3App.use(router)
myV3App.use(VueAxios, axios)
// myV3App.provide('axios', App.config.globalProperties.axios)  // provide 'axios'

// myV3App.prototype.$users = [
//   {
//     id: 1,
//     name: '',
//     surname: '',
//     phone: '',
//     mail: '',
//     password: '',
//   },
// ]

// myV3App.prototype.$logedUser = {
//   id: 0,
//   name: '',
//   surname: '',
//   phone: '',
//   mail: '',
//   password: '',
// }

myV3App.mount('#app')
