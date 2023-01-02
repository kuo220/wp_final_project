import FeaturedPost from '../component/FeaturedPost';


function InfoCard({ name, information }){

    return(
        <FeaturedPost 
            title = { name } 
            description = { information }
            image = 'https://source.unsplash.com/random'
            imageLabel = 'Image Text'
        />
    )
}

export default InfoCard;