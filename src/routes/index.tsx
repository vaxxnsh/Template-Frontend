import RolePage from '@/components/RolePage'
import { lazy } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'
import AcountSttingClone from '@/assets/data/clone/accountClone'
import VisitProfile from '@/components/VisitProfile'
import MarketPlace from '@/app/(plain)/MarketPlace/MarketPlace'

// profiles for seller //
//const BusinessSeller = lazy(() => import('@/app/(plain)/BusinessSeller/BusinessSeller'))








//demo pages
const HomeDemo = lazy(() => import('@/app/(social)/feed/(container)/home/page'))
const HomeClassic = lazy(() => import('@/app/(plain)/classic/page'))
const HomePost = lazy(() => import('@/app/(social)/(with-topbar)/posts/page'))
const HomeVideo = lazy(() => import('@/app/(social)/feed/(no-container)/videos/page'))
const HomeEvent = lazy(() => import('@/app/(plain)/event/page'))
const LandingPage = lazy(() => import('@/app/(plain)/landing/page'))
const AppDownloadPage = lazy(() => import('@/app/(plain)/download/page'))


//pages
const Albums = lazy(() => import('@/app/(social)/feed/(container)/albums/page'))
const Celebration = lazy(() => import('@/app/(social)/feed/(container)/celebration/page'))
const Messaging = lazy(() => import('@/app/(social)/(with-topbar)/messaging/page'))
const Events = lazy(() => import('@/app/(social)/feed/(container)/events/page'))
const Events2 = lazy(() => import('@/app/(social)/(with-topbar)/events/page'))
const EventDetails = lazy(() => import('@/app/(social)/feed/(container)/events/[eventId]/page'))
const EventDetails2 = lazy(() => import('@/app/(plain)/events/details/page'))
const Groups = lazy(() => import('@/app/(social)/feed/(container)/groups/page'))
const GroupDetails = lazy(() => import('@/app/(social)/feed/(container)/groups/[groupId]/page'))
const PostVideos = lazy(() => import('@/app/(social)/feed/(container)/post-videos/page'))
const PostVideoDetails = lazy(() => import('@/app/(social)/feed/(container)/post-videos/details/page'))
const PostDetails = lazy(() => import('@/app/(social)/(with-topbar)/feed/post-details/page'))
const VideoDetails = lazy(() => import('@/app/(social)/feed/(no-container)/videos/details/page'))
const Blogs = lazy(() => import('@/app/(social)/(with-topbar)/blogs/page'))
const BlogDetails = lazy(() => import('@/app/(social)/(with-topbar)/blogs/[blogId]/page'))

//profile pages
const ProfileFeed = lazy(() => import('@/app/(social)/profile/feed/page'))
const ProfileAbout = lazy(() => import('@/app/(social)/profile/about/page'))
const ProfileConnections = lazy(() => import('@/app/(social)/profile/connections/page'))
const ProfileMedia = lazy(() => import('@/app/(social)/profile/media/page'))
const ProfileVideos = lazy(() => import('@/app/(social)/profile/videos/page'))
const ProfileEvents = lazy(() => import('@/app/(social)/profile/events/page'))
const ProfileActivity = lazy(() => import('@/app/(social)/profile/activity/page'))

//account pages
const CreatePage = lazy(() => import('@/app/(social)/feed/(container)/create-page/page'))
const AccountSetting = lazy(() => import('@/app/(social)/settings/account/page'))
const ManageConnections = lazy(() => import('@/app/(social)/settings/ManageConnections/page'))
const AccountPrivacy = lazy(() => import('@/app/(social)/settings/privacy/page'))
const AccountCommunication = lazy(() => import('@/app/(social)/settings/communication/page'))
const  visitProfile = lazy(() => import('@/components/VisitProfile'))
const AccountMessaging = lazy(() => import('@/app/(social)/settings/messaging/page'))
const AccountClose = lazy(() => import('@/app/(social)/settings/close-account/page'))
const HelpPage = lazy(() => import('@/app/(social)/help/page'))
const HelpDetails = lazy(() => import('@/app/(social)/help/details/page'))
const NotificationPage = lazy(() => import('@/app/(social)/(with-topbar)/notifications/page'))

//auth routes
const SignIn = lazy(() => import('@/app/(plain)/(authentication)/auth/sign-in/page'))
const EmailVerification = lazy(() => import('@/app/(plain)/(authentication)/auth/verify/components/EmailVerification'))
const SignUp = lazy(() => import('@/app/(plain)/(authentication)/auth/sign-up/page'))
const ForgotPass = lazy(() => import('@/app/(plain)/(authentication)/auth/forgot-pass/page'))
const SignInAdvance = lazy(() => import('@/app/(plain)/(authentication)/auth-advance/sign-in/page'))
const SignUpAdvance = lazy(() => import('@/app/(plain)/(authentication)/auth-advance/sign-up/page'))
const ForgotPassAdvance = lazy(() => import('@/app/(plain)/(authentication)/auth-advance/forgot-pass/page'))

const NotFoundPage = lazy(() => import('@/app/(social)/(with-topbar)/not-found/page'))
const OfflinePage = lazy(() => import('@/app/(plain)/offline/page'))
const PrivacyAndTermPage = lazy(() => import('@/app/(social)/(with-topbar)/privacy-terms/page'))


export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

const initialRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/feed/home" />,
  },
 
]

// feed with container
const generalRoutes: RoutesProps[] = [
  {
    path: '/feed/home',
    name: 'Demo Home',
    element: <HomeDemo />,
  },
 
  {
    path: '/profile-visitors',
    name: 'Profile Visitors',
    element: <VisitProfile />,
  },
  {
    path: '/feed/albums',
    name: 'Albums',
    element: <Albums />,
  },
  {
    path: '/feed/celebration',
    name: 'Celebration',
    element: <Celebration />,
  },
  {
    path: '/feed/events',
    name: 'Events',
    element: <Events />,
  },
  {
    path: '/feed/events/:eventId',
    name: 'Events',
    element: <EventDetails />,
  },
  {
    path: '/feed/groups',
    name: 'Groups',
    element: <Groups />,
  },
  {
    path: '/feed/groups/:groupId',
    name: 'Group Details',
    element: <GroupDetails />,
  },
  {
    path: '/feed/post-videos',
    name: 'Post Videos',
    element: <PostVideos />,
  },
  {
    path: '/feed/post-videos/details',
    name: 'Post Video Details',
    element: <PostVideoDetails />,
  },
  {
    path: '/feed/create-page',
    name: 'Create Page',
    element: <CreatePage />,
  },
]

//plain routes
const otherRoutes: RoutesProps[] = [
  {
    path: '/classic',
    name: 'Home Classic',
    element: <HomeClassic />,
  },
  {
    path: '/event',
    name: 'Home Event',
    element: <HomeEvent />,
  },
  {
    path: '/landing',
    name: 'Home Landing',
    element: <LandingPage />,
  },
  {
    path: '/download',
    name: 'Home Download',
    element: <AppDownloadPage />,
  },
  {
    path: '/events/details',
    name: 'Event Details 2',
    element: <EventDetails2 />,
  },
  {
    path: '/feed/videos',
    name: 'Home Video',
    element: <HomeVideo />,
  },
  {
    path: '/feed/videos/details',
    name: 'Video Details',
    element: <VideoDetails />,
  },
  {
    path: '/help',
    name: 'Help',
    element: <HelpPage />,
  },
  {
    path: '/help/details',
    name: 'Help Details',
    element: <HelpDetails />,
  },
  {
    path: '/offline',
    name: 'Offline',
    element: <OfflinePage />,
  },
]

export const settingPagesRoutes:RoutesProps[]=[
  {
    path: '/settings/account',
    name: 'Account Settings', 
    element: <AccountSetting />,
  },
  {
    path : '/settings/role',
    name : 'Role Settings',
    element : <RolePage/>,
  },
  {
    path: '/settings/ManageConnections',
    name: 'Account Notification',
    element: <ManageConnections />,
  },
  {
    path: '/settings/communication',
    name: 'Account Notification',
    element: <AccountCommunication />,
  },
  {
    path: '/settings/messaging',
    name: 'Profile Visit Analysis',
    element: <VisitProfile />,
  },
  // { 

  //   image : ChartNetwork,
  //   name: 'Profile Visit Analysis',
  //   link: '/profile-visitors',
  // },
  {
    path: '/settings/close-account',
    name: 'Account Close',
    element: <AccountClose />,
  },
  {
    path: '/settings/privacy',
    name: 'Account Privacy',
    element: <AccountPrivacy />,
  },
]

//social pages with topbar
export  const socialWithTopbarRoutes: RoutesProps[] = [
  {
    path: '/AccountClone',
    name: 'Account Clone',
    element: <AcountSttingClone />,
  },
  {
    path: '/posts',
    name: 'Home Posts',
    element: <HomePost />,
  },
  {
    path: '/messaging',
    name: 'Messaging',
    element: <Messaging />,
  },
  {
    path: '/notifications',
    name: 'Notification',
    element: <NotificationPage />,
  },
  {
    path: '/events',
    name: 'Events',
    element: <Events2 />,
  },
  {
    path: '/feed/post-details',
    name: 'Post Details',
    element: <PostDetails />,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    element: <Blogs />,
  },
  {
    path: '/blogs/:blogId',
    name: 'Blog Details',
    element: <BlogDetails />,
  },
  {
    path: '/privacy-terms',
    name: 'Privacy And Terms',
    element: <PrivacyAndTermPage />,
  },
  {
    path: '*',
    name: 'not-found',
    element: <NotFoundPage />,
  },
  {
    path: '/not-found',
    name: 'Not Found',
    element: <NotFoundPage />,
  },
]

export const profilePagesRoutes: RoutesProps[] = [
  {
    path: '/profile/feed/:id', 
    name: 'Feed',
    element: <ProfileFeed />,
  },
  {
    path: '/profile/about/:id',
    name: 'About',
    element: <ProfileAbout />,
  },
  {
    path: '/profile/connections/:id',
    name: 'Connections',
    element: <ProfileConnections />,
  },
  {
    path: '/profile/media/:id',
    name: 'Media',
    element: <ProfileMedia />,
  },
  {
    path: '/profile/videos/:id',
    name: 'Video',
    element: <ProfileVideos />,
  },
  {
    path: '/profile/events/:id',
    name: 'Events',
    element: <ProfileEvents />,
  },
  {
    path: '/profile/activity/:id',
    name: 'Activity',
    element: <ProfileActivity />,
  },
]

export const authRoutes: RoutesProps[] = [
  {
    path: '/auth/sign-in', // change according to  auth/verify-email/verify?token=${verificationToken}
    name: 'Sign In',
    element: <SignIn />,
  },
  {
    path: '/auth/verify-email',
    name: 'Email Verification',
    element: <EmailVerification />,
  },
  {
    path: '/auth/sign-up',
    name: 'Sign Up',
    element: <SignUp />,
  },
  {
    path: '/auth/forgot-pass',
    name: 'Sign In',
    element: <ForgotPass />,
  },
  {
    path: '/auth-advance/sign-in',
    name: 'Sign In Advance',
    element: <SignInAdvance />,
  },
  {
    path: '/auth-advance/sign-up',
    name: 'Sign Up Advance',
    element: <SignUpAdvance />,
  },
  {
    path: '/auth-advance/forgot-pass',
    name: 'Sign Up Advance',
    element: <ForgotPassAdvance />,
  },
]

export const appRoutes = [
  ...otherRoutes,
]

export const feedRoutes = [
  ...initialRoutes,
  ...generalRoutes,
]
