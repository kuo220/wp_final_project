import { useParams } from 'react-router-dom'

function CafeInfo() {
    const { id } = useParams()
	return(
        <h1>
            cafe {`${id}`}
        </h1>
    )
}

export default CafeInfo;