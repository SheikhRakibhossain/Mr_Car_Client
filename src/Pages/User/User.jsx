import { useLoaderData } from "react-router-dom";
import UserView from "./UserView";

const User = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>User: {users.length}</h2>
            {/* <h2>User: {users.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table table-zebra table-md w-3/6 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserView key={user._id} user={user} index={index + 1}></UserView>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;