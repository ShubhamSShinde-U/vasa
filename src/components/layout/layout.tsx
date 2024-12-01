import AppHeader from '../app-header/appHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer';
// import "../../styles/index.scss";

function Layout() {
  return (
    <div className='layout-wrapper'>
      <AppHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout