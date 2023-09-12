import { useLoaderData } from "react-router-dom";

const User = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>User: {users.length}</h2>
            {/* <h2>User: {users.length}</h2> */}
            {
                users.map(user =><p key={user._id}>{user.name}</p>)
            }
        </div>
    );
};

export default User;