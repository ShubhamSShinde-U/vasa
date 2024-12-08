import { useParams } from 'react-router-dom';
function DetailedService() {
const { id } = useParams();

console.log(id);

  return (
    <div>services</div>
  )
}

export default DetailedService;