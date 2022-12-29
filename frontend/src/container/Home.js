import { Typography } from 'antd';
import Titlebar from './Titlebar'

function Home() {
	return(
        <>
            <Titlebar/>
            <Typography.Title
                italic
            >
                Café Finder
            </Typography.Title>
        </>
    )
}

export default Home;