import React from 'react'
import Deepa from './../Dept_faculties/Deepa.jpg'
import Thenmozhi from './../Dept_faculties/Thenmozhi mam.jpeg'
import Yogesh from './../Dept_faculties/Yogesh sir.jpeg'
export default function CSE() {
    return (
        <div className="First">
            <div className="row">
                <div className="col-sm-3">
                    <img src={Deepa}  title="Deepa"alt="Not available"></img>
                </div>
                <div className="col-sm-9">
                    <h5>I'm Deepa from CSE department. I am working here since past 3 years. I completed by schoolings in Coimbatore.
                        I completed my higher education in PSG college. I'm working as Assistant Professor.Currently I'm handling
                        all the work for CSE department
                    </h5>

                </div>
            </div>
            <hr className="Bgco" />
            <div className="row">
                <div className="col-sm-9">
                <h5>I'm Thenmozhi from CSE department. I am working here since past 2 years. I completed by schoolings in Coimbatore.
                        I completed my higher education in REC college. I'm working as Assistant Professor.Currently I'm handling
                        all the work for CSE department
                    </h5>
                </div>
                <div className="col-sm-3">
                <img src={Thenmozhi} title="Thenmozhi" width="200px"alt="Not available"></img>
                   

                </div>
            </div>
            <hr className="Bgco" />
            <div className="row">
                <div className="col-sm-3">
                    <img src={Yogesh} title="Yogesh" width="200px"alt="Not available"></img>
                </div>
                <div className="col-sm-9">
                    <h5>I'm Yogesh from CSE department. I am working here since past 7 years. I completed by schoolings in Coimbatore.
                        I completed my higher education in KCT college. I'm working as Assistant Professor.Currently I'm handling
                        all the work for CSE department
                    </h5>

                </div>
            </div>
            <hr className="Bgco" />
        </div>
    )
}
