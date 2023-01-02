import { useParams } from 'react-router-dom'
import ScoreIndicator from '../component/ScoreIndicator'
import NavBar from '../component/NavBar';


const ScoreStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
};


function ReviewScore(){
    const { id } = useParams()
    const name = 'cafe name'

    return(
        <>
            <NavBar id = {id} name = {name}></NavBar>
            <div style = {ScoreStyles}><ScoreIndicator value={0} maxValue = {10}></ScoreIndicator></div>
        </>
    )
}

export default ReviewScore