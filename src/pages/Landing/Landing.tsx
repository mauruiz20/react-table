import ClientTable from '../../components/ClientTable/ClientTable'
import TechTable from '../../components/TechTable/TechTable'
import './Landing.css'

const Landing: React.FC = () => {
  return (
    <div className='landing-container'>
      <ClientTable />
      <TechTable />
    </div>
  )
}

export default Landing
