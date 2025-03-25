import { useEffect,useState } from "react";
import "../Styles/user/books.css";
import { useNavigate,useLocation} from "react-router-dom";


const Books = () => {
    let location=useLocation()
    let path=location.pathname.startsWith('/adminPortal')

    let navigate =useNavigate()

    let [books,setBooks]=useState([])
    
        useEffect(()=>{
            let fetchData=async()=>{
            let response = await fetch("http://localhost:4500/books")
            let data = await response.json()
            setBooks(data)
            }
            fetchData()
        },[books])

        let readBook =(id)=>{
            if (path){
                navigate(`/adminPortal/books/${id}`)
            }
            else{
                navigate(`/userPortal/books/${id}`)
            }
        }

        let handleDelete =(id,title)=>{
            // ()=>handleDelete(info.id,info.title)
            fetch(`http://localhost:4500/books/${id}`,{
                method:"DELETE"
            })
            alert(`${title} got deleted`)
        }
    
    return ( 
        <div className="books">
            <h1>Books collection</h1>
            <div className="books_list">
                {
                    books.map((info)=>{
                        return <div className="bookdata">
                            <div className="booking">
                                <img src={info.thumbnailUrl} alt="" />
                            </div>
                            <div className="databook">
                                <h2>{info.title}</h2>
                                <h4>{info.authors}</h4>
                                <h4>{info.categories}</h4>
                                <h4>{info.pageCount}</h4>
                                <button onClick={()=>readBook(info.id)}>Read book</button>
                                {path && <button onClick={()=>handleDelete(info.id,info.title)}>Delete Book</button>}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
     );
}
 
export default Books;