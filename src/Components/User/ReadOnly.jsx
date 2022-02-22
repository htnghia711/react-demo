import React from "react";

function ReadOnly({ contact, handleButtonEdit, handleButtonDelete }) {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          className="button add-button"
          type="button"
          onClick={(e) => handleButtonEdit(e, contact)}
        >
          Edit
        </button>
        <button
          className="add-button"
          onClick={() => handleButtonDelete(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ReadOnly;
