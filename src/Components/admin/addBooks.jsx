import { useRef } from "react";
import "../../Styles/admin/addBooks.css"

const AddBooks = () => {
    let title=useRef()
    let thumbnailUrl=useRef()
    let author=useRef()
    let pageCount=useRef()
    let categories=useRef()

    let submit=(e)=>{
        e.preventDefault()

        let user={
            title:title.current.value,
            thumbnailUrl:thumbnailUrl.current.value,
            authors:author.current.value,
            pageCount:pageCount.current.value,
            categories:categories.current.value
        
        }
        fetch(" http://localhost:4500/books",{
            method : "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        alert("Book Added Successfully...!")
    }
    return ( 
        <div className="addBooks">
            <h1>Add Books</h1>
            <form onSubmit={submit}>
                <div>
                    <label>Title :</label>
                    <input ref={title} type="text" placeholder="Enter Title of Book"/>
                </div>
                <div>
                    <label >ThumbnailUrl :</label>
                    <input ref={thumbnailUrl} type="url" placeholder="Enter thumbnail Url" />
                </div>
                <div>
                    <label >Author :</label>
                    <input ref={author} type="text" placeholder="Enter author name"/>
                </div>
                <div>
                    <label >PageCount :</label>
                    <input ref={pageCount} type="text" placeholder="Enter pages count"/>
                </div>
                <div>
                    <label >Categories:</label>
                    <input ref={categories} type="text" placeholder="Enter categories" />
                </div>
                <button>Add Book</button>

            </form>
        </div>
     );
}
 
export default AddBooks;



// import { useRef } from "react";
// // import { useRef } from "react";

// import "../styles/Addvideo.css"
// const AddVideo = () => {
//     let thumbnail=useRef()
//     let channelitem=useRef()
//     let title=useRef()
//     let channelname=useRef()
//     let views=useRef()

//     let submit=(e)=>{
//         e.preventDefault()

//         let user={
//             thumbnail:thumbnail.current.value,
//             channelitem:channelitem.current.value,
//             title:title.current.value,
//             channelname:channelname.current.value,
//             views:views.current.value

//         }
//         fetch(" http://localhost:5000/video",{
//             method : "POST",
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(user)
//         })
//     }



//     return ( 
//         <div className="addvideo">
//             <h1>Add Video</h1>
//             <form onSubmit={submit}>
//                 <label>Thumbnail  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    :</label>
//                 &nbsp;&nbsp;&nbsp;<input ref={thumbnail} type="url" placeholder="Enter thumbnail"/><br />
//                 <label >Channel item  &nbsp;&nbsp;:</label>
//                 &nbsp;&nbsp;&nbsp;<input ref={channelitem} type="url" placeholder="Enter Channel Item" /><br />
//                 <label >Title   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
//                 &nbsp;&nbsp;&nbsp;<input ref={title} type="text" placeholder="Enter Title"/><br />
//                 <label >Channel name  :</label>
//                 &nbsp;&nbsp;&nbsp;<input ref={channelname} type="text" placeholder="Enter ChannelName"/><br />
//                 <label >Views &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
//                 &nbsp;&nbsp;&nbsp;<input ref={views} type="text" placeholder="Enter views" /><br />
//                 <br />
//                 <button>Add Video</button>

//             </form>
//         </div>
//      );
// }
 
// export default AddVideo;