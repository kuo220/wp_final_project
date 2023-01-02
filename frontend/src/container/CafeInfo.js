import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../component/NavBar';

const ContentBox = styled.div`
    background-color: white;
    border: 2px solid MediumPurple;
    width: 60%;
    font-size: 25px;
    padding: 20px;
    margin: 20px;
    float: ${props => props.float};
    @media (max-width: 500px) {
        float: none;
        margin: 20px auto;
    }
`;

function CafeInfo() {
    const { id } = useParams()
	return(
        <div>
            <Navbar id = { id }/>
            <ContentBox float="left">
                name: cafe {`${id}`}
            </ContentBox>
            <ContentBox float="right">
                address: sdfghashsghgfgyuygfdghjekeudyu2wagwsxwjhssdjhfgvewghejudjehwb3jdkkj
            </ContentBox>
            <ContentBox float="left">
                number: 0912345678
            </ContentBox>
      </div>
    )
}

export default CafeInfo;




