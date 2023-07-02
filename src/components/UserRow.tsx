import React from "react";
import { Link } from "react-router-dom";
import { UserData } from "../interfaces/";
import go from "../images/go.svg";
import proPH from "../images/profile.jpg";
import spinSvg from "../images/spinner.svg";

const UserRow: React.FC<{ data: UserData, key: number }> = ({ data, key } ) => {
    return (<>
        <div id={ key.toString() } className="col-6 col-lg-4 col-xl-3 pt-3">
            <div className="card">
                <div className="card-body shadow">
                    <div className="text-center">
                        <Link to={ 'profile/'.concat(data.login, '/') }>
                            <div className="picture-container" style={{ backgroundImage:`url(${ spinSvg }),url(${ proPH })`}}>
                                <img src={ data.avatar_url } alt={ data.login + " profile image" } className="profile-picture profile-picture-xs"/>
                            </div>
                        </Link>
                    </div>
                    <p className="profile-search-name text-center fw-bold pt-3">{ data.name ? data.name : data.login }</p>
                    <div className="text-center text-xl-end">
                        <span className="d-none d-xl-inline">Details</span> <Link to={ 'profile/'.concat(data.login, '/') }><img src={ go } alt="next"/></Link>
                    </div>
                </div>
            </div>
        </div>
        </>);
}

export default UserRow;