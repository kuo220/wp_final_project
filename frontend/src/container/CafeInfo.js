import { useParams } from 'react-router-dom'
import ResponsiveMenu from '../component/TitleBar';
import styled from 'styled-components';

const Menu = styled.div`
    border-bottom: 2px solid MediumPurple;
    ul {
        padding: 0;
    }
    li {
        display: inline;
        font-size: 13px;
        list-style-type: none;
        margin-left: 30px;
    }
    a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 20px;
        color: MediumPurple;
        &:hover {
        color: black;
        }
    }
    @media (max-width: 500px) {
        padding: 10px 0;
        li {
        padding: 10px 0;
        display: block;
        margin-left: 0;
        }
    }
`;

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
            <ResponsiveMenu
                changeMenuOn="500px"
                largeMenuClassName="large-menu"
                smallMenuClassName="small-menu"
                menu={
                    <Menu>
                    <ul>
                        <li>
                            <a href = {`/search/cafe/${id}`}>About</a>
                        </li>
                        <li>
                            <a href = {`/search/cafe/${id}/review`}>Review</a>
                        </li>
                        <li>
                            <a href = {`/search/cafe/${id}/comments`}>Comments</a>
                        </li>
                        <li>
                            <a href = {`/search/cafe/${id}/plane`}>Plane Figure</a>
                        </li>
                        <li>
                            <a href="/search">Back to Search</a>
                        </li>
                    </ul>
                    </Menu>
                }
            />
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




