import ResponsiveMenu from './ResponsiveMenu';
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

export default function NavBar({id}){
    return(
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
    )
}

