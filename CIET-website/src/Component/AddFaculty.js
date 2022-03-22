import { useState } from 'react';
import FacultyService from './Service Components/FacultyService';
import '../../src/App.css';
export default function AddFaculty(props) {
    const [staff, setFac] = useState({ id: '', name: '', designation: ''});
    const addi = () => {
        console.log(staff)
        FacultyService.saveEmployee(staff);

        props.history.push("/faculty");
    }

    
    return (
        <div className="container">
            <form className="form-group row">
                <div className="row mt-1">
                    <label className="col-sm-2 form label" for="id">Id</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="Enter Id" onChange={(e)=>setFac({...staff,id:e.target.value})}></input>
                    </div>
                </div>
                <div className="row mt-1">
                    <label className="col-sm-2 form label" for="Name">Name</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="Enter Name " onChange={(e)=>setFac({...staff,name:e.target.value})}></input>
                    </div>
                </div>
                <div className="row mt-1">
                    <label className="col-sm-2" for="designation">Designation</label>
                    <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Enter Desgination" onChange={(e)=>setFac({...staff,designation:e.target.value})}></input>
                    </div>
                    
                </div>
                
                <div className="row mt-1">
                    <div className="col-sm-8">
                    <button className="btn btn-primary" onClick={addi}>Sumbit</button>
                    
                    </div>
                </div>
                </form>
        </div >
    )
}
