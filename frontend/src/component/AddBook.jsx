import React,{useState,useEffect} from "react";
import { useAddBookMutation } from "../features/book/bookApi";
import { Departments } from "../constants/department";
import { Genres } from "../constants/genre";
import {Semesters} from "../constants/semester";
import {Dropdown } from "../elements"
import { useNavigate } from "react-router-dom";


const AddBook = () => {
  const navigate = useNavigate();
      const [addBook] = useAddBookMutation()
      const [book,setBook]=useState({
        name:"",
        rent_price:"",
        selling_price:"",
        semester:"",
        department:"",
        description:"",
      })
      const [bookImage,setBookImage]=useState("")

      // for dropdown
      const [genre,setGenre]=useState("")
      const [department, setDepartment]=useState("");
      const [semester,setSemester]=useState("") ;
      const [clicked,setClicked]=useState(false)


      const handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setBook({...book,[name]:value})
      }
      const formdata = new FormData();

      const handleClick=()=>{
        formdata.append('name',book.name)
        formdata.append("genre", genre);
        formdata.append("rent_price", book.rent_price);
        formdata.append("selling_price", book.selling_price);
        formdata.append("semester", semester);
        formdata.append("department", department);
        formdata.append("description", book.description);
        formdata.append('bookImage',bookImage)
        setClicked(true)
        addBook(formdata).then((datas)=>{
          if (datas.error){
            alert(datas.error.message)
          }
          else{
            navigate('/dashboard')
          }
        })
        setBook({
          name: "",
          genre: "",
          rent_price: "",
          selling_price: "",
          semester: "",
          department: "",
          description: "",
        });
      }

      useEffect(()=>{
        setClicked(false)
      },[genre,department,semester])


  return (
    <div className="mb-10 flex flex-col place-items-center gap-4">
      <h1 className="font-bold text-2xl">ADD BOOK</h1>
      <div className=" rounded-3xl ring-2 ring-slate-50 bg-box-bg-color h-2/5 w-9/12 p-4 space-y-4 py-8">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex">
            <div className="basis-1/2 text-start pl-4 space-y-6 font-semibold text-lg">
              <h1>Name</h1>
              <h1>Genre</h1>
              <h1>Rent_Price</h1>
              <h1>Selling_Price</h1>
              <h1>Semester</h1>
              <h1>Department</h1>
              <h1>Photo</h1>
              <h1>Description</h1>
            </div>
            <div className=" text-end pr-4 font-semibold text-lg space-y-4">
              <input
                type="text"
                name="name"
                value={book.name}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              />
              <Dropdown
                title={"Genre"}
                contents={Genres}
                setValue={setGenre}
                clicked={clicked}
              />
              {/* <input
                type="text"
                name="genre"
                value={book.genre}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              /> */}
              <input
                type="number"
                name="rent_price"
                value={book.rent_price}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              />
              <input
                type="number"
                name="selling_price"
                value={book.selling_price}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              />
              <Dropdown
                title={"Semester"}
                contents={Semesters}
                setValue={setSemester}
                clicked={clicked}
              />
              {/* <input
                type="text"
                name="semester"
                value={book.semester}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              /> */}
              <Dropdown
                title={"Department"}
                contents={Departments}
                setValue={setDepartment}
                clicked={clicked}
              />
              {/* <input
                type="text"
                name="department"
                value={book.department}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              /> */}
              <input
                type="file"
                defaultValue={bookImage}
                name="bookImage"
                onChange={(e) => setBookImage(e.target.files[0])}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              />
              <textarea
                name="description"
                value={book.description}
                onChange={handleChange}
                className="bg-inputBox p-1 px-3 rounded-md ring-2 w-7/12 ring-slate-50"
              />
            </div>
          </div>
          <button
            className="bg-buyButton p-2 w-28 rounded-full"
            onClick={handleClick}
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
