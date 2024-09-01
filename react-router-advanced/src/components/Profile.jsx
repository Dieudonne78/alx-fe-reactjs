import { Routes,Route } from 'react-router-dom'
import ProfileDetail from './ProfileDetails';
import ProfileSetting from './ProfileSettings';
function Profile(){
  return(
    <Routes>
      <Route path='/details'element={<ProfileDetail />}/>
      <Route path='/settings'element={<ProfileSetting />}/>
    </Routes>
  )
}

export default Profile;