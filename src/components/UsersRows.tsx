import React from "react";
import { APIUsersRes } from "../interfaces/";
import UserRow from "./UserRow";


const UsersRows: React.FC<{ users: APIUsersRes }> = ({users}) => {
    return <div className="row pb-5">
        { users.items.map((user: any) => <UserRow data={user} key={user.id} />) }
    </div>;
}

export default UsersRows;