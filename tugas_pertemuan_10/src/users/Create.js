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

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value // Dynamically update the correct field
        });
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Fix typo (was preventdDefault)

        try {
            const response = await axios.post("https://reqres.in/api/users", user);
            alert(`${response.data.first_name} berhasil ditambahkan`);
            console.log(response.data.first_name);
            navigate("/users/show");
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <h2>Halaman Form Create Users</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={user.first_name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={user.last_name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Create;
