import AppHeader from '../app-header/appHeader'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='layout-wrapper'>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default Layout