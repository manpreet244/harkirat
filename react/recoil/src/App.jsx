import './App.css'
import { networkAtom } from './atoms'
import { RecoilRoot, useRecoilValue,useRecoilState} from 'recoil';

function App(){
  return  <RecoilRoot>
   <MainApp />
  </RecoilRoot>

}
function MainApp() {
 const networkNotificationCount = useRecoilValue(networkAtom);
//  const jobsAtomCount = useRecoilValue(jobsAtom);
//  const notificationAtomCount = useRecoilValue(notificationsAtom);
 const [messagingAtomCount , setMessagingAtomCount] = useRecoilState(messagingAtom);
  return (
    <>
   
     <button>Home</button>
     <button>My Network {networkNotificationCount}</button>
     <button>Jobs</button>
     <button onClick={()=>{
      setMessagingAtomCount(messagingAtomCount+1)
     }}>Messages</button>
     <button>Notifications</button>
     <button>Me</button>
    </>
  )
}

export default App
