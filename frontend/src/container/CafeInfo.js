import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../component/NavBar';
import InfoCard from '../component/InfoCard'
import { height } from '@mui/system';


function CafeInfo() {
    const { id } = useParams()
	return(
        <div>
            <Navbar id = { id }/>
            <div style = {{ height: '10vh' }}/>
            <InfoCard name = 'Name' information={`Cafe ${id}`}></InfoCard>
        </div>
    )
}

export default CafeInfo;




