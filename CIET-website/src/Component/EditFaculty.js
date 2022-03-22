import React, { useState, useEffect } from 'react'
import FacultyService from './Service Components/FacultyService'

function Editstaff(props) {
    const [staff, setStaff] = useState({ id: '', name: '', salary: '' });
    useEffect(() => {
        const id = parseInt(localStorage.getItem("id"));
        setStaff(FacultyService.selectEmployee(id));
    }, [])
    const update = () => {
        FacultyService.updateEmployee(staff);
        alert(" Updated");
        props.history.push('/faculty');
    }
    return (
        <div className="container">

            <form className="form-group">
                <div className="row">
                    <label className="col-sm-2 mt-3">ID</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control mt-3" disabled value={staff.id} onChange={
                            (e) => {
                                setStaff({ ...staff, id: e.target.value })
                            }
                        }></input></div>
                </div>
                <div className="row">
                    <label className="col-sm-2 mt-3">Name</label>
                    <div className="col-sm-10"><input type="text" className="form-control mt-3" value={staff.name} onChange={
                        (e) => {
                            setStaff({ ...staff, name: e.target.value })
                        }
                    }></input></div>
                </div>
                <div className="row">
                    <label className="col-sm-2 mt-3">Designation</label>
                    <div className="col-sm-10"><input type="text" className="form-control mt-3" value={staff.designation} onChange={
                        (e) => {
                            setStaff({ ...staff, designation: e.target.value })
                        }
                    }></input></div>
                </div>
                <div className="row">
                    <div className="col-sm-10">
                        <button className="btn btn-info" onClick={update}>Update</button></div>
                </div>
            </form>

        </div>
    )
}
export default Editstaff;