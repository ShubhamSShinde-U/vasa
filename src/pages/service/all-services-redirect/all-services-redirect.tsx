import { useNavigate } from 'react-router-dom';
import './all-services-redirect.scss'
function AllServicesRedirect() {
    const navigate=useNavigate()
  return (
    <div className='all-services-redirect-wrapper' onClick={()=>{navigate('/#services1')}}>
        Explore Other Services <img src='assets/up.svg' width={18}/>
    </div>
  )
}

export default AllServicesRedirect;