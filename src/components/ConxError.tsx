import React from "react";
import {Link} from "react-router-dom";

const ConxError = () => {
    return (<>
        <div className="row">
            <div className="col-12">
                <h5 className="text-center text-danger mt-5">
                    Unable to communicate with backend server. <br/> Please make sure you are connected to internet.
                </h5>
            </div>
            <div className="col-12 text-center mt-5">
                <Link to="/"><button className="btn btn-lg text-light fw-bolder p-3 accent-bg">RELOAD</button></Link>
                <p className="mt-5 fw-bold">Please click reload button after reconnecting with the internet</p>
            </div>
        </div>

        </>)
}


export default ConxError;