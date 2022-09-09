import {Carousel} from 'react-bootstrap';
import cinemaGoersCoupleImg from '../../assets/cinema-people-couple.jpg';
// import popcornImg from '../../assets/popcorn.jpg';
import movieSeatsImg from '../../assets/movie-seats-pics-homepage.jpg';
import cinemaGoersFriendsImg from '../../assets/cinema-people-friends.jpg'
import './Carousel.css';

function HomeCarousel () {

    return(
        <Carousel slide={false}>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={cinemaGoersCoupleImg}
                    alt="People in cinema"
                />
                <Carousel.Caption>
                    <h3 className="caption-text">Weekend date? Sorted</h3>
                    <p>Your favourite movies with your favourite people!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={movieSeatsImg}
                    alt="Popcorn"
                />
        
                <Carousel.Caption>
                    <h3 className="caption-text">Premium seats and Premium screens</h3>
                    <p>What will you gunna watch today?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-img"
                    src={cinemaGoersFriendsImg}
                    alt="Third slide"
                />
        
                <Carousel.Caption>
                    <h3 className="caption-text">Don't know what to watch?</h3>
                    <p>
                    We've got you covered with a wide variety of new releases and classics
                    <br />
                    There's something for everyone
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
    );
}

export default HomeCarousel;
