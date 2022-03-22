import React from 'react'

export default function Location() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5">
                    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=coimbatore institute of engineering and technology&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fnfgo.com/">FNF Mods</a></div></div>
                </div>
                <div className="col-sm-5">
                    <div className="form-group">
                        <div className="card">
                            <div className="card-header">Contact Details
                                <div className="card-body">
                                    <div className="form-group row"><label for="email" className="col-sm-4 mt-1">Email<span className="text-danger">*</span></label>
                                        <div className="col-sm-5">
                                            <input type="email" className="form-control" placeholder="Enter mail id" required />
                                        </div>
                                    </div><br></br>
                                    <div className="form-group row"><label for="password" className="col-sm-4 ">Password</label>
                                   
                                        <div className="col-sm-5"><input type="password" className="form-control" placeholder="Enter password"
                                             />
                                        </div>
                                    </div><br></br>
                                    <div className="btn-group">
                                        <button type="submit" className="btn btn-success btn-block">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
