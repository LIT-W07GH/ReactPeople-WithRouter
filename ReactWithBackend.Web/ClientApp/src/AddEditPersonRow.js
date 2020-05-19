import React from 'react';

function AddEditPersonRow(props) {
    const { isEditMode, onTextChange, onAddClick, onUpdateClick, onCancelClick } = props;
    const { firstName, lastName, age } = props.person;
    return (
        <div className="row" style={{ marginBottom: 20 }}>
            <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={onTextChange}
                    name="firstName" />
            </div>
            <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={onTextChange}
                    name="lastName" />
            </div>
            <div className="col-md-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    value={age}
                    onChange={onTextChange}
                    name="age" />
            </div>
            <div className="col-md-3">
                {!isEditMode && <button className="btn btn-primary btn-block" onClick={onAddClick}>Add</button>}
                {!!isEditMode &&
                    <div>
                        <button className="btn btn-warning btn-block" onClick={onUpdateClick}>Update</button>
                        <button className="btn btn-info btn-block" onClick={onCancelClick}>Cancel</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default AddEditPersonRow;