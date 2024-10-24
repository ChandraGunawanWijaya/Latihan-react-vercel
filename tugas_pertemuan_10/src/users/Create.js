import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://reqres.in/api/users", user);
            alert(`${response.data.first_name} berhasil ditambahkan`);
            navigate("/");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Create New User</h2>
                    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
                        <div className="form-group mb-3">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder="Enter First Name"
                                value={user.first_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Enter Last Name"
                                value={user.last_name}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Email"
                                value={user.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;
