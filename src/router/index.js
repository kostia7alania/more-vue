import Vue from 'vue'
import Router from 'vue-router'

import MainSuda from '@/components/Suda/0.MainSuda'
import Position from '@/components/Suda/1.Position'
import Track from '@/components/Suda/2.Track'
import Vessel from '@/components/Suda/3.Vessel'
import Suda90 from '@/components/Suda/4.Suda90'
import Rrr from '@/components/Suda/5.Rrr'
import Rmrs from '@/components/Suda/6.Rmrs'
import Ssoo from '@/components/Suda/7.Ssoo'
import Osdr from '@/components/Suda/8.Osdr'
import Arb from '@/components/Suda/9.Arb'

import Login from '@/Login'

Vue.use(Router)

let SudaSidebarLinks = [
  {
    text: 'МЕСТОПОЛОЖЕНИЕ СУДНА',
    path: '/position',
    component: Position
  },
  {
    text: 'ИСТОРИЯ ДВИЖЕНИЯ СУДНА',
    path: '/track',
    component: Track
  },
  {
    text: 'ДАННЫЕ О СУДНЕ',
    path: '/vessel',
    component: Vessel
  },
  {
    text: 'РЕЧНОЙ ФЛОТ (МОРИНФОЦЕНТР)',
    path: '/suda90',
    component: Suda90
  },
  {
    text: 'БАЗА ДАННЫХ РОССИЙСКОГО РЕЧНОГО РЕГИСТРА',
    path: '/rrr',
    component: Rrr
  },
  {
    text: 'БАЗА ДАННЫХ РОССИЙСКОГО МОРСКОГО РЕГИСТРА',
    path: '/rmrs',
    component: Rmrs
  },
  {
    text: 'РЕГИСТРАЦИЯ ССОО',
    path: '/ssoo',
    component: Ssoo
  },
  {
    text: 'РЕГИСТРАЦИЯ ОСДР',
    path: '/osdr',
    component: Osdr
  },
  {
    text: 'РЕГИСТРАЦИЯ АРБ',
    path: '/arb',
    component: Arb
  }
]

let prefixUrl = '/ship' // '/ptl/web/mcc/'
SudaSidebarLinks.map((el, i) => (SudaSidebarLinks[i].path = prefixUrl + SudaSidebarLinks[i].path))

let SudaFirst = [
  {
    text: 'Начало',
    path: '/ship',
    component: MainSuda
  }
]

window.SudaSidebarLinks = [...SudaFirst, ...SudaSidebarLinks]

let LoginRoute = [
  {
    path: '/',
    component: Login
  }
]
let routs = [...LoginRoute, ...SudaFirst, ...SudaSidebarLinks]

window.router = new Router({ routes: routs })

export default window.router
