import { Link, useLocation } from "react-router-dom";

const Favourite = ({cart,setCart}) => {
    let location=useLocation()
    let path = location.pathname.startsWith("/userPortal")
    return ( 
        <div className="favourite">
           
            <h1>Favourite Book</h1>
            {((cart.length === 0) ? <h2>There are no favourite books</h2>:" ")}
            <div className="books_list">
                {
                    cart.map((info)=>{
                        return <div className="bookdata">
                            <div className="booking">
                                <img src={info.thumbnailUrl} alt="" />
                            </div>
                            <div className="databook">
                                <h2>{info.title}</h2>
                                <h4>{info.authors}</h4>
                                <h4>{info.categories}</h4>
                                <h4>{info.pageCount}</h4>
                                {path ?<Link to="/userPortal/books"><button>Back</button></Link>:<Link to="/adminPortal/books"><button>Back</button></Link>}

                            </div>
                        </div>
                    })
                }

            </div>

            {/* {
                cart.map((data)=>(
                    <div className="fav_book">
                        <h1>Title : {data.title }</h1>
                    </div>
                ))
            } */}
             
        </div>
     );
}
 
export default Favourite;