import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'


const BaseLayout = () => {

    return (
      <>
          <Navbar/>
              <Outlet/>
        </>
    )

    
}


export default BaseLayout