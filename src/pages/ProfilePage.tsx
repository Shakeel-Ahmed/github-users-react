import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ConxError from "../components/ConxError";
import config from "../modules/config";
import go from '../images/go.svg';
import goback from '../images/back.svg';
import open from '../images/open.png';
import proPH from '../images/profile.jpg';

function ProfilePage() {
    // State to manage the connectivity status
    const [conx, setConx] = useState<boolean>(true);

    // Accessing the "login" parameter from the route
    const { login } = useParams();

    // Initial state for user data
    const initState = {
        name: 'Loading',
        login: 'Loading',
        id: 0,
        html_url: '',
        avatar_url: '',
        url: '',
        score: 0,
        type: '',
        site_admin: false,
        hireable: false,
        public_repos: 0,
        followers: 0,
        company: 'Loading',
        created_at: '2000-02-02'
    };

    // Type declaration for a generic object
    // Used to handle the response from the API
    // Since it's a third-party API, using "any" type
    // allows flexibility in case of extra fields
    type GenericObject = {
        [key: string]: any;
    };

    // State to hold user data fetched from the API
    const [userData, setUserData] = useState<GenericObject>(initState);

    useEffect(() => {
        // Fetch GitHub user data based on the provided login parameter
        const getGitHubUser = async (login: string) => {
            // Construct the query string for the API request
            const qStr = config.apiURL.concat(config.userSingle, encodeURI(login));
            try {
                const response = await fetch(qStr);
                if (response.ok) {
                    // Parse the response and update the user data state
                    const usersRes = await response.json();
                    setUserData(usersRes);
                    setConx(true);
                    document.title = usersRes.name + ' Profile';
                }
            } catch (e) {
                // Handle errors in case of a failed API request
                setConx(false);
            }
        };

        // Call the function to fetch GitHub user data
        getGitHubUser(login!).then(() => false);
    }, [login]);

    // Parse the "created_at" date from the human readability
    const date = new Date(userData.created_at);
    const fDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


    return (<>
        { conx ? (
            <div className="row pt-4">
                <div className="col-md-5 col-lg-3">
                    <div style={{backgroundImage:`url(${proPH})`}} className="picture-container profile-picture w-100">
                        <img src={userData.avatar_url ? userData.avatar_url : proPH } className="profile-picture w-100" alt="profile"/>
                    </div>
                    <p className="accent-text text-uppercase text-center text-xl-start fw-bolder pt-3 px-5 px-xl-0">{userData.bio ? userData.bio : ''}</p>
                </div>
                <div className="col-md-7 col-lg-9 py-3 pt-md-0">
                    <div className="card">
                        <div className="card-body shadow">
                            <h3 className="text-uppercase fw-bolder">{userData.name ? userData.name : userData.login}</h3>
                            <hr/>
                            <table className="text-uppercase profile-table">
                                <tbody>
                                <tr>
                                    <td><span className="fw-bold">GitHub Login</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{userData.login}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">GitHub ID</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{userData.id}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Member Since</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{fDate}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Company</span></td>
                                    <td>
                                    <span className="accent-text fw-bold ms-xl-5">
                                        {userData.company ? userData.company : 'N/A'}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Type</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{userData.type}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Ready for Hire</span></td>
                                    <td>
                                    <span className="accent-text fw-bold ms-xl-5">
                                        {userData.hireable ? 'Yes' : 'No'}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Public Repositories</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{userData.public_repos}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Public Gists</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{userData.public_gists}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Followers</span></td>
                                    <td><span className="accent-text fw-bold ms-lg-5">{userData.followers}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Followings</span></td>
                                    <td><span className="accent-text fw-bold ms-xl-5">{userData.following}</span></td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Location</span></td>
                                    <td>
                                    <span className="accent-text fw-bold ms-xl-5">
                                        {userData.location ? userData.location : 'N/A'}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Blog Page</span></td>
                                    <td>
                                    <span className="accent-text fw-bold ms-xl-5">
                                    { userData.blog ? (
                                        <a href={ userData.blog } target="_blank">
                                            Open
                                            <img src={open} alt="open" style={{width:'20px',paddingBottom:'3px', marginLeft:'5px'}}/>
                                        </a>
                                    ) : 'N/A'}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Twitter Account</span></td>
                                    <td>
                                    <span className="accent-text fw-bold ms-xl-5">
                                    { userData.twitter_username ? (
                                        <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank">
                                            Open
                                            <img src={open} alt="open" style={{width:'20px',paddingBottom:'3px', marginLeft:'5px'}}/>
                                        </a>
                                    ) : 'N/A'}
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span className="fw-bold">Email</span></td>
                                    <td>
                                    <span className="accent-text fw-bold ms-xl-5">
                                        {userData.email ? userData.email : 'N/A'}
                                    </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="w-100 mt-5">
                                <tbody>
                                <tr>
                                    <td className="text-start text-uppercase">
                                        <Link to="/"><img src={goback} alt="next"/></Link> Back
                                    </td>
                                    <td className="text-end text-uppercase">
                                        Open in GitHub <a href={userData.html_url} target="_blank" rel="noreferrer">
                                        <img src={go} alt="next"/>
                                    </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        ) : ( <ConxError />) }
    </>);
}

export default ProfilePage;