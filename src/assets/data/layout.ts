import type { ProfilePanelLink } from '@/types/data'

import homeImg from '@/assets/images/icon/home-outline-filled.svg'
import personImg from '@/assets/images/icon/person-outline-filled.svg'
import medalImg from '@/assets/images/icon/medal-outline-filled.svg'
import clockImg from '@/assets/images/icon/clock-outline-filled.svg'
import earthImg from '@/assets/images/icon/earth-outline-filled.svg'
import calendarImg from '@/assets/images/icon/calendar-outline-filled.svg'
import chatImg from '@/assets/images/icon/chat-outline-filled.svg'
import notificationImg from '@/assets/images/icon/notification-outlined-filled.svg'
import cogImg from '@/assets/images/icon/cog-outline-filled.svg'
import likeImg from '@/assets/images/icon/like-outline-filled.svg'
import starImg from '@/assets/images/icon/star-outline-filled.svg'
import taskDoneImg from '@/assets/images/icon/task-done-outline-filled.svg'
import arrowBoxedImg from '@/assets/images/icon/arrow-boxed-outline-filled.svg'
import shieldImg from '@/assets/images/icon/shield-outline-filled.svg'
import handshakeImg from '@/assets/images/icon/handshake-outline-filled.svg'
import chatAltImg from '@/assets/images/icon/chat-alt-outline-filled.svg'
import trashImg from '@/assets/images/icon/trash-var-outline-filled.svg'

import logo8 from '@/assets/images/logo/08.svg'
import logo9 from '@/assets/images/logo/09.svg'
import logo10 from '@/assets/images/logo/10.svg'

type ExperienceType = {
  title: string
  description: string
  logo: string
}



export const profilePanelLinksData1: ProfilePanelLink[] = [
  // {
  //   image: homeImg,
  //   name: 'Feed',
  //   link: '/profile/feed',
  // },
  {
  
    name: 'Profile Visit Analysis',
    link: '/profile-visitors',
  },
  // {
  //   image: earthImg,
  //   name: 'Latest News',
  //   link: '/blogs',
  // },
  // {
  //   image: calendarImg,
  //   name: 'Events',
  //   link: '/profile/events',
  // },
  // {
  //   image: chatImg,
  //   name: 'Who viewed your profile',
  //   link: '/feed/groups',
  // },
  // {
  //   image: notificationImg,
  //   name: 'Notifications',
  //   link: '/notifications',
  // },
  // {
  //   image: cogImg,
  //   name: 'Settings',
  //   link: '/settings/account',
  // },
]

export const profilePanelLinksData2: ProfilePanelLink[] = [
  {
    image: homeImg,
    name: 'Feed',
    link: '/profile/feed',
  },
  // {
  //   image: medalImg,
  //   name: 'Popular',
  //   link: '',
  // },
  // {
  //   image: clockImg,
  //   name: 'Recent',
  //   link: '',
  // },
  {
    image: likeImg,
    name: 'Subscriptions',
    link: '',
  },
  // {
  //   image: starImg,
  //   name: 'My favorites',
  //   link: '',
  // },
  // {
  //   image: taskDoneImg,
  //   name: 'Wishlist',
  //   link: '',
  // },
  {
    image: notificationImg,
    name: 'Notifications',
    link: '/notifications',
  },
  {
    image: cogImg,
    name: 'Settings',
    link: '/settings/account',
  },
  // {
  //   image: arrowBoxedImg,
  //   name: 'Logout',
  //   link: '/auth/sign-in',
  // },
  // {
  //   image: arrowBoxedImg,
  //   name: 'Logout',
  //   link: '/auth/verify-email',
  // },
]

export const settingPanelLinksData: ProfilePanelLink[] = [
  
  {
    image: personImg,
    name: 'Basic Profile',
    link: '/settings/account',
  },
  {
    image : personImg,
    name : 'Business Profile',
    link : '/settings/role'
  },
  {
    
    image : personImg,
    name : 'View Profile',
    link : `profile/feed/`
  },
  {
    image: notificationImg,
    name: 'Notification',
    link: '/settings/notification',
  },
  // {
  //   image: shieldImg,
  //   name: 'Privacy and safety',
  //   link: '/settings/privacy',
  // },
  // {
  //   image: handshakeImg,
  //   name: 'Communications',
  //   link: '/settings/communication',
  // },
  {
    image: chatAltImg,
    name: 'Messaging',
    link: '/settings/messaging',
  },
  // {
  //   image: trashImg,
  //   name: 'Close account',
  //   link: '/settings/close-account',
  // },
]


export const experienceData: ExperienceType[] = [
  {
    title: 'Apple Computer, Inc.',
    description: 'May 2015 – Present Employment Duration 8 mos',
    logo: logo8,
  },
  {
    title: 'Microsoft Corporation',
    description: 'May 2017 – Present Employment Duration 1 yrs 5 mos',
    logo: logo9,
  },
  {
    title: 'Tata Consultancy Services.',
    description: 'May 2022 – Present Employment Duration 6 yrs 10 mos',
    logo: logo10,
  },
]
