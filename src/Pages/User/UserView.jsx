
const UserView = ({user, index}) => {

    console.log(index)
    const {name, email } = user;
    return (
       <>
       <tr>
        <th>{index}</th>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
       </>
               
    );
};

export default UserView;