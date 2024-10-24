import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`https://reqres.in/api/users/${id}`);
                const { data } = res.data;
                setUser({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email
                });
            } catch (error) {
                alert(error);
            }  
        };
        getUser();
    }, [id]);

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
            const res = await axios.put(`https://reqres.in/api/users/${id}`, user);
            alert(res.data.first_name + " berhasil diupdate");
            console.log(res.data.first_name);
            navigate("/users/show");
        } catch (error) {
            alert("Network Error");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Update User Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={user.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={user.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default Update;
