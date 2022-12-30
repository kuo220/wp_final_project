import { useParams } from 'react-router-dom'

function Cafe() {
    const { id } = useParams()
	return(
        <h1>
            cafe {`${id}`}
        </h1>
    )
}

export default Cafe;