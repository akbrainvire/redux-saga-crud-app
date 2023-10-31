import React from "react";

const UserTable = ({ users, onEdit, onDelete }: any) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Serial No.</th>
          <th scope="col">Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any, id: number) => (
          <tr key={user.id}>
            <td>{id + 1}</td>
            <td>{user.name}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => onEdit(user.id)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Username</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {users.map((user: any) => (
    //       <tr key={user.id}>
    //         <td>{user.name}</td>
    //         <td>
    //           <button onClick={() => onEdit(user.id)}>Edit</button>
    //           <button onClick={() => onDelete(user.id)}>Delete</button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default UserTable;
