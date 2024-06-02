import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser= useLoaderData()
    return (
        <div>
            <h2>Number of users: {loadedUser.length}</h2>
        </div>
    );
};

export default Users;