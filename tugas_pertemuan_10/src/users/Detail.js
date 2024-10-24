import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [users, setUsers] = useState({
        first_name: "",
        last_name: "",
        email: "",
        avatar: ""
    });

    useEffect(() => {
        const getUser = async () => {
            try {
                await axios.get(`https://reqres.in/api/users/${id}`)
                    .then((res) => {
                        const { data } = res;
                        setUsers({
                            first_name: data.data.first_name,
                            last_name: data.data.last_name,
                            email: data.data.email,
                            avatar: data.data.avatar
                        });
                    });
            } catch (error) {
                alert(error);
            }
        };
        getUser();
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="card shadow-sm" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="card-body text-center">
                    <h2 className="card-title mb-4">User Details</h2>
                    <img 
                        src={users.avatar} 
                        alt={`${users.first_name} ${users.last_name}`} 
                        className="rounded-circle mb-4" 
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                    />
                    <div className="mb-3">
                        <strong>First Name:</strong> {users.first_name}
                    </div>
                    <div className="mb-3">
                        <strong>Last Name:</strong> {users.last_name}
                    </div>
                    <div className="mb-3">
                        <strong>Email:</strong> {users.email}
                    </div>
                    <button 
                        className="btn btn-primary mt-3" 
                        onClick={() => navigate("/")}
                    >
                        Back to Users List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Detail;
