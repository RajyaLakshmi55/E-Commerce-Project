import { useRef } from "react";
import "../../Styles/admin/addBooks.css"


const AddUsers = () => {
    let firstName=useRef()
    let lastName=useRef()
    let email=useRef()
    let about=useRef()
    let mobile=useRef()
    let image=useRef()

    let addUser=(e)=>{
        e.preventDefault()

        let user={
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value,
            mobile:mobile.current.value,
            about:about.current.value,
            image:image.current.value,
        
        }
        fetch(" http://localhost:4500/users",{
            method : "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        alert("User Added Successfully...!")
    }

    return ( 
        <div className="addUser">
            <h1>Add Users</h1>
            <form onSubmit={addUser}>
               <div>
                    <label>First Name :</label>
                    <input ref={firstName} type="text" placeholder="Enter First Name"/>
               </div>
                <div>
                    <label >Last Name  :</label>
                    <input ref={lastName} type="text" placeholder="Enter Last Name" />
                </div>
                <div>
                    <label >Email :</label>
                    <input ref={email} type="text" placeholder="Enter Email"/>
                </div>
                <div>
                    <label >Image :</label>
                    <input ref={image} type="url" placeholder="Enter image Address"/>
                </div>
                <div>
                    <label >Mobile Name:</label>
                    <input ref={mobile} type="text" placeholder="Enter mobile number" />
                </div>
                <div>
                    <label >About:</label>
                    <input ref={about} type="text" placeholder="Enter about actor" />
                </div>
               
                <button>Add User Details</button>

            </form>

        </div>
     );
}
 
export default AddUsers;

// import { useRef } from "react";
// import "../../Styles/admin/addBooks.css"

// const AddBooks = () => {
//     let title=useRef()
//     let thumbnailUrl=useRef()
//     let author=useRef()
//     let pageCount=useRef()
//     let categories=useRef()

//     let submit=(e)=>{
//         e.preventDefault()

//         let user={
//             title:title.current.value,
//             thumbnailUrl:thumbnailUrl.current.value,
//             authors:author.current.value,
//             pageCount:pageCount.current.value,
//             categories:categories.current.value
        
//         }
//         fetch(" http://localhost:4000/books",{
//             method : "POST",
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(user)
//         })
//         alert("Book Added Successfully...!")
//     }
//     return ( 
//         <div className="addBooks">
//             <h1>Add Books</h1>
//             <form onSubmit={submit}>
//                 <label>Title :</label>
//                 <input ref={title} type="text" placeholder="Enter Title of Book"/><br />
//                 <label >ThumbnailUrl :</label>
//                <input ref={thumbnailUrl} type="url" placeholder="Enter thumbnail Url" /><br />
//                 <label >Author :</label>
//                <input ref={author} type="text" placeholder="Enter author name"/><br />
//                 <label >PageCount :</label>
//               <input ref={pageCount} type="text" placeholder="Enter pages count"/><br />
//                 <label >Categories:</label>
//                 <input ref={categories} type="text" placeholder="Enter categories" /><br />
//                 <br />
//                 <button>Add Book</button>

//             </form>
//         </div>
//      );
// }
 
// export default AddBooks;



