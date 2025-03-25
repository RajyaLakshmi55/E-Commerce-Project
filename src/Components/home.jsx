import "../Styles/user/home.css"

const Home = () => {
    return ( 
        <div className="home">
            {/* <div className="home_img">
                <img src="https://www.greenwichlibrary.org/wp-content/uploads/2021/06/IMG_5534-1024x604.jpg" alt="" />
            </div> */}
            <div className="box">
                <h1>Digital Library</h1>
                <hr />
                <p>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more</p>
                <button>Learn More</button>
            </div>

            <div className="image">
                <div className="image_1">
                    <h3>ABOUT</h3>
                    <h1>Cos Cob Library Renovation</h1>
                    <hr />
                    <p>Greenwich Library recently announced a new plan for the much-anticipated Cos Cob Branch Library renovation. The revised plan considers ideas raised by the community to expand the community room for greater program capacity, increase space dedicated to children’s services, and enhance the collections to make it a go-to destination. 
                    </p>
                    <button>Learn More</button>
                </div>
            </div>

            <div className="book1">
                <div className="book_1">
                    <h1>January Events</h1>
                    <p>These printable one-page calendars for each Greenwich Library branch are fridge-ready.</p>
                    <button>Get Printable Calenders</button>
                </div>
            </div>
            <div className="store">
                <div className="store_1">
                    <h3>EXPLORE</h3>
                    <h1>Peterson Business Collection</h1>
                    <hr />
                    <p>Our Peterson Business Collection offers support for job seekers, entrepreneurs, small businesses, and nonprofits. The Library also provides financial literacy resources for individuals of all skill levels. Access our business databases to get started. Make sure to check out our business workshops too!</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;