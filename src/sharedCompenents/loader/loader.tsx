import './loader.scss'
function Loader() {
  return (
    <div className='loader-wrapper'>
        <div className='loader-item'></div>
    </div>
  )
}

function SearchLoader (){
    return (
      <div className="search-loader-wrapper">
        <div className="search-loader-item"></div>
      </div>
    );
}

export  {Loader,SearchLoader}