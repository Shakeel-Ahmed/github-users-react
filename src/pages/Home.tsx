import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import config from "../modules/config";
import UsersRows from "../components/UsersRows";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../store";
import { searchInitState, APIUsersRes } from "../interfaces/";
import LoadSpinner from "../components/LoadSpinner";
import ConxError from "../components/ConxError";
import next from '../images/go.svg';
import back from '../images/back.svg';

document.title ='GitHub Users Search';

function Home() {
    // Redux
    const dispatch = useDispatch();
    const searchParam = useSelector(
        (state: { search: searchInitState }) => state.search.searchParameter
    );
    const pageIndex = useSelector(
        (state: { search: searchInitState }) => state.search.page
    );

    // Initial values
    const usersInitVals = { total_count: 0, incomplete_results: true, items: [] };

    // State variables
    const [users, setUsers] = useState<APIUsersRes>(usersInitVals);
    const [spinner, setSpinner] = useState<boolean>(false);
    const [conx, setConx] = useState<boolean>(true);

    // Pagination handler
    const paginationHandler = (search: string, page: number) => {
        onSearch(search, page).then();
    }

    useEffect(() => {
        // Perform search when searchParam changes
        if (searchParam !== "") {
            onSearch(searchParam, pageIndex).then();
        }
    }, [searchParam]);

    const onSearch = async (user: string, page: number) => {
        // Resetting the existing search
        setUsers(usersInitVals);
        setSpinner(true);
        const qStr = config.apiURL.concat(
            config.userSearch,"?q=",encodeURI(user),"&per_page=",config.perPage.toString(),"&page=",page.toString()
        );
        try {
            const response = await fetch(qStr);
            if (response.ok) {
                const usersRes = await response.json();
                dispatch(searchAction.setSearch(user));
                dispatch(searchAction.setPage(page));
                if(!usersRes.total_count) usersRes.items[0] = false;
                setUsers(usersRes);
                setSpinner(false);
                setConx(true);
                document.title = 'Results for ' + searchParam;
            }
        } catch (e) {
            setConx(false);
            setSpinner(false);
        }
    }
    return (<>
        <SearchBar onSearch={onSearch}/>
        { !conx ? ( <ConxError /> ) : '' }
        { spinner ? (<LoadSpinner />) : ''}
        {users.total_count > 0 ? (<UsersRows users={users}/>) : ''}
        {users.items[0] === false ?
            (
            <div className="row">
                <div className="col-12 pt-5">
                    <h4 className="text-center">No GitHub user is found with this search criteria</h4>
                </div>
            </div>
            ) : ''}
        {!users.incomplete_results && users.items[0] !== false ? (
            <div className="row">
                <div className="col-12 fw-bold text-end">
                    Results: <span className="accent-text">{users.total_count}</span>
                </div>
                <div className="col-12 text-center py-5">
                    {pageIndex > 1 ? (
                        <img src={back}
                             alt="back page"
                             style={{cursor: 'pointer',width:'48px'}}
                             onClick={paginationHandler.bind(null, searchParam, pageIndex - 1)}
                        />
                    ) : (<img src={back} alt="back" style={{opacity: '.4',width:'48px'}}/>)}
                    <span className="fw-bolder mx-4" style={{fontSize: '20px'}}>{pageIndex}</span>
                    <img src={next}
                         alt="next page"
                         style={{cursor: 'pointer',width:'48px'}}
                         onClick={paginationHandler.bind(null, searchParam, pageIndex + 1)}
                    />
                </div>
            </div>
        ) : ''}
    </>);
}

export default Home;