import React, { useEffect, useState } from 'react';
import FacultyService from './Service Components/FacultyService';
//import { BiEdit } from "react-icons/bi";
//import { FaRegEdit } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BiReset } from "react-icons/bi";

import axios from 'axios';
const Faculty = (props) => {

    const [staff, setFac] = useState([]);
    const [filterText,setFilterText] = useState();

    useEffect(() => {
        FacultyService.getEmployee().then((response) => {
            setFac(response.data);
        });
    }, [staff])

    const filteredStaff = staff.filter( s =>
        s.name.includes(filterText) ||
        //s.name.includes(filterText) ||
        s.designation.includes(filterText)
        )
    const staffToDisplay = filterText ? filteredStaff : staff;




    // useEffect(() => {
    //     axios.get("http://localhost:3030/api/employees/all")
    //     // .then(res => console.log(res.data))
    //     .then(res => setFac(res.data))
    //     .catch(err => console.log(err))
    //     // setFac(FacultyService.getEmployee());
    // }, [])


    const one = () => {
        props.history.push("/add-faculty");
    }
    const edit = (id) => {
        localStorage.setItem("id", id);
        props.history.push(`/edit-faculty/${id}`);
    }

    const del = (id) => {
        FacultyService.delFaculty(id);
        props.history.push('/faculty')
    }
    return (

        <div className="First"> 
            <div className="row">
                <div className="col-sm-2"><input type="text" placeholder="Search" className="form-control"
                onChange={(e)=>setFilterText(e.target.value)}
                /></div>
            </div>
            <div align="right" className="container mt-6">
                <button className="btn btn-primary" onClick={one} align="right m-5">Add  employee</button>
            </div>
            
            <table className="table table-striped">
                <thead>

                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Edit or Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staffToDisplay.length == 0 ?
                            <tr>
                                <td>No data found</td>
                            </tr>
                            :


                            staffToDisplay.map((facu, index) => {
                                return (
                                    <tr>
                                        <td>{facu.id}</td>
                                        <td>{facu.name}</td>
                                        <td>{facu.designation}</td>
                                        <td><span style={{ color: "blue"  }}> <AiOutlineEdit onClick={() => edit(facu.id) } size={20} /> </span>   <span style={{ color: "red" }}><BiReset onClick={() => del(facu.id)}  size={20}/></span></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>



            </table>
            </div>


    )
}
export default Faculty;