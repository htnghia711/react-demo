import React, { useState, Fragment } from "react";
import "../../Css/user.css";
import "../../Css/modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.js.map";
import data from "../../DataBinding/mock-data.json";
import { nanoid } from "nanoid";
import ReadOnly from "./ReadOnly";
import Edit from "./Edit";

function IndexUser() {
  const [contacts, setContact] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContact(newContacts);
  };

  const handleButtonEdit = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;
    setContact(newContacts);
    setEditContactId(null);
  };

  const handleButtonCancel = () => {
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleButtonDelete = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContact(newContacts);
  };

  return (
    <div>
      <div>
        <div className="wrapper">
          {/* Page Content Holder */}
          <div id="content">
            <div className="container">
              <div id="card" className="card text-center">
                {/* Header */}
                <div className="card-header myCardHeader">
                  <div className="row">
                    <div className="col-md-10">
                      <h3 className="text-left text-primary font-weight-bold">
                        Người dùng
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="card-body">
                  <form
                    action=""
                    className="card-body"
                    onSubmit={handleEditFormSubmit}
                  >
                    <table className="table table-bordered table-hover myTable">
                      <thead className="text-primary">
                        <tr>
                          <th className="nowrap">
                            <span className="mr-1">Name</span>
                            <i className="fa fa-arrow-up" id="SapXepTang" />
                            <i className="fa fa-arrow-down" id="SapXepGiam" />
                          </th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((contact) => (
                          <Fragment>
                            {editContactId === contact.id ? (
                              <Edit
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleButtonCancel={handleButtonCancel}
                              />
                            ) : (
                              <ReadOnly
                                contact={contact}
                                handleButtonEdit={handleButtonEdit}
                                handleButtonDelete={handleButtonDelete}
                              />
                            )}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="col-6">
                    <h3 className="text-left text-primary font-weight-bold">
                      Thêm User
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <label htmlfor="fullname">Name:</label>
                      <br />
                      <input
                        type="text"
                        id="fullname"
                        name="fullName"
                        onChange={handleAddFormChange}
                      />
                      <br />
                      <label htmlfor="phoneNumber">Address:</label>
                      <br />
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={handleAddFormChange}
                      />
                      <br />
                      <label htmlfor="address">Phone Number:</label>
                      <br />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={handleAddFormChange}
                      />
                      <br />
                      <label htmlfor="email">Email:</label>
                      <br />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleAddFormChange}
                      />
                      <br />
                      <button className="button add-button" type="submit">
                        ADD
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexUser;
