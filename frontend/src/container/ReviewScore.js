import { useParams } from 'react-router-dom'
import ScoreIndicator from '../component/ScoreIndicator'
import Navbar from '../component/NavBar';

const ScoreStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
};

function ReviewScore(){
    const { id } = useParams()
    return(
        <>
            <Navbar id = { id }/>
            <div style = {ScoreStyles}><ScoreIndicator value={5.2} maxValue = {10}></ScoreIndicator></div>
        </>
    )
}

export default ReviewScore