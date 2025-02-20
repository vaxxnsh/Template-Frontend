import { Navigate, Route, Routes, type RouteProps } from 'react-router-dom'

import OtherLayout from '@/layouts/OtherLayout'
import { useAuthContext } from '@/context/useAuthContext'
import { appRoutes, authRoutes, feedRoutes, profilePagesRoutes, settingPagesRoutes, socialWithTopbarRoutes, } from '@/routes/index'
import FeedLayout from '@/layouts/FeedLayout'
import SocialLayout from '@/layouts/SocialLayout'
import ProfileLayout from '@/layouts/ProfileLayout'
import SettingLayout from '@/layouts/SettingLayout'
import BusinessSellerForm from '@/app/(plain)/BusinessSeller/BusinessSellerForm'
import JoinRoom from '@/components/live/StreamerInterface'
import Live from '@/components/live/viewerInterface'
import BusinessBuyerForm from '@/app/(plain)/BusinessBuyer/BusinessBuyer'
import Entrepreneurform from '@/app/(plain)/Entrepreneur/Entrepreneurform'
import InvestorForm from '@/app/(plain)/Investor/InvestorForm'
import MarketPlace from '@/app/(plain)/MarketPlace/MarketPlace'
import Founderforms from '@/app/(plain)/Founderform/Founderform'
import AccountSettings from '@/assets/data/clone/accountClone'
import MarketplaceDetails from '@/app/(plain)/Marketplacedetails/Marketplacedetails'
import VisitProfile from '@/components/VisitProfile'
import PleaseWaitPage from '@/components/Coming'


const AppRouter = (props: RouteProps) => {
  const { isAuthenticated } = useAuthContext()

  return (
    <Routes>
      {(authRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<OtherLayout {...props}>{route.element}</OtherLayout>} />
      ))}

      {(feedRoutes || []).map((route, idx) => (
        <Route 
        key={idx + route.name} 
        path={route.path} 
        element={isAuthenticated ? (
          <PleaseWaitPage/>
        ) : (
          <Navigate to={{ pathname: '/auth/sign-in', search: 'redirectTo=' + route.path, }} />
        )
        } />
      ))}
    
      {(socialWithTopbarRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={isAuthenticated ? (
            <PleaseWaitPage/>
          ) :
            (
              <Navigate to={{ pathname: '/auth/sign-in', search: 'redirectTo=' + route.path, }} />
            )
          } />
      ))}

      {(profilePagesRoutes || []).map((route, idx) => (
        <Route 
        key={idx + route.name} 
        path={route.path} 
        element={isAuthenticated ? (
          <PleaseWaitPage/>
        ) :
          (
            <Navigate to={{ pathname: '/auth/sign-in', search: 'redirectTo=' + route.path, }} />
            
            
          )
        } />
      ))}

      {(settingPagesRoutes || []).map((route, idx) => (
        <Route 
        key={idx + route.name} 
        path={route.path} 
        element={isAuthenticated ? (
          <PleaseWaitPage/>
        ) :
          (
            <Navigate to={{ pathname: '/auth/sign-in', search: 'redirectTo=' + route.path, }} />
          )
        } />
      ))}

      {(appRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={isAuthenticated ? (
            <PleaseWaitPage/>
          ) :
            (
              <Navigate to={{ pathname: '/auth/sign-in', search: 'redirectTo=' + route.path, }} />
            )
          }
        />
      ))}
      <Route path='/business-seller' element={<BusinessSellerForm/>}></Route>
      <Route path='/business-acquirer' element={<BusinessBuyerForm/>}></Route>
      { <Route path='/entreprenuer' element={<Entrepreneurform/>}></Route> }
      <Route path='/investor' element={<InvestorForm/>}></Route>
      <Route path='/join-live' element={<JoinRoom/>} />
      <Route path='/live' element={<Live/>} />
      <Route path='/AccountClone' element={<AccountSettings/>} />
      <Route path='/marketplace' element={<MarketPlace/>} />
      <Route path='/founder' element={<Founderforms></Founderforms>} />
      <Route path='/marketplacedetails/:id' element={<MarketplaceDetails/>}></Route>
      <Route path='/profile-visitors' element={<VisitProfile/>}></Route>
      <Route path='/coming-soon' element={<PleaseWaitPage/>}></Route>
    </Routes>
  )
}

export default AppRouter
