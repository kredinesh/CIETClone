import React from 'react';
import './../App.css'
import Civil from  './../Image component/civil.jpg';
import CSE from './../Image component/cse.jpg';
import EEE from './../Image component/EEE.jpg'
import ECE from './../Image component/ECE.jpg'
import MECH from './../Image component/Mech.jpg'
import MCT from './../Image component/MCT.jpg';
import IT from './../Image component/it.png'
const Department=()=>{
    return(
    <div className="Bgco">

        <div className="container">
            <div className="row">
                <div className="col-sm-4 mt-3">
                    <img src={Civil} width="200px"/>
                    <h5><a href="/civil">CIVIL ENGINEERING</a></h5>
                </div>
                <div className="col-sm-4  mt-3">
                <img src={CSE} width="200px"/>
                    <h5><a href="/cse">COMPUTER SCIENCE AND ENGINEERING</a></h5>
                </div>
                <div className="col-sm-4  mt-3">
                <img src={EEE} width="200px"/>
                    <h5><a href="">ELECTRICAL AND ELECTRONICS ENGINEERING</a></h5>
                </div>
                <div className="col-sm-4  mt-3">
                <img src={ECE} width="200px"/>
                    <h5><a href="">ELECTRONICS AND COMMUNICATION ENGINEERING</a></h5>
                </div>
                <div className="col-sm-4  mt-3">
                <img src={MECH} width="200px"/>
                    <h5><a href="/mech">MECHANICAL ENGINEERING</a></h5>
                </div>
                <div className="col-sm-4 mt-3">
                <img src={MCT} width="200px"/>
                    <h5><a href="">MECHATRONICS ENGINEERING</a></h5>
                </div>
                <div className="col-sm-4 mt-3">
                <img src={IT} width="200px"/>
                    <h5><a href="">INFORMATION TECHNOLOGY</a></h5>
                </div>
            </div>
        </div>

    </div>
    )}
export default Department;