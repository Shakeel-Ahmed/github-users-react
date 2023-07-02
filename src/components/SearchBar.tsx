import React from "react";
import {useRef} from "react";
import go from "../images/go.svg";
import {useSelector} from "react-redux";
import {searchInitState} from "../interfaces/";

const SearchBar: React.FC<{onSearch: (user: string, page: number) => void }> = ( props ) => {

    const searchParam =  useSelector( (state: { search: searchInitState }) => state.search.searchParameter );
    const user = useRef<HTMLInputElement>(null);

    const searchFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredUser = user.current!.value;
        props.onSearch( enteredUser, 1);
    }

    return (
        <>
            <div className="pt-3">
                <form onSubmit={ searchFormHandler }>
                <div className="container mt-3">
                    <div className="row align-items-center">
                        <div className="col-10 ms-auto">
                            <div className="d-flex align-items-center mb-2">
                                <input ref={ user }
                                       name="user"
                                       type="text"
                                       className="form-control fw-bolder"
                                       id="user"
                                       placeholder="Search GitHub User"
                                       defaultValue={ searchParam }
                                       required
                                />
                            </div>
                        </div>
                         <div className="col-2 col-xl-1 text-end">
                            <input type="image" alt="submit" name="submit" src={ go } style={{width:'40px'}} className="ms-auto"/>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </>
    )
}

export default SearchBar;