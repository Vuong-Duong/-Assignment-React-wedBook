import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [currentUserPassword, setCurrentUserPassword] = useState("");
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();




    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        if (userId) {
            axios.get(`http://localhost:9999/users/${userId}`)
                .then(response => setUser(response.data))
                .catch(error => console.error(error));
        }
    }, []);

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    const handlePasswordChange = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSavePassword = () => {
        if (currentUserPassword !== user.password) {
            alert("Current password does not match.");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New Password and Confirm Password do not match.");
            return;
        }

        if (newPassword.length < 6) {
            alert("New Password must be at least 6 characters.");
            return;
        }

        axios.put(`http://localhost:9999/users/${user.id}`, {
            id: user.id,
            number: user.number,
            username: user.username,
            email: user.email,
            password: newPassword,
            role: user.role
        })
            .then(response => {

                setShowModal(false);
                alert("Password updated successfully.");
            })
            .catch((error) => console.error("Change failed:", error));
    };

    return (
        <Container className="rounded bg-white mt-5 mb-5">
            <Row>
                <Col md={3} className="border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img
                            className="rounded-circle mt-5"
                            width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            alt="Profile"
                        />
                        <span className="font-weight-bold">Edogaru</span>
                        <span className="text-black-50">{user.email}</span>
                    </div>
                </Col>
                <Col md={5} className="border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile</h4>
                        </div>
                        <Form>
                            <Row className="mt-2">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Name"
                                            value={user.username}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>


                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="mobileNumber"
                                            value={user.number}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            readOnly
                                        />
                                    </Form.Group>
                                </Col>



                            </Row>
                            <div className="mt-5 text-center">
                                <Button className="profile-button" type="button" onClick={handlePasswordChange}>
                                    Change Password
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCurrentPassword">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter current password"
                                value={currentUserPassword}
                                onChange={(e) => setCurrentUserPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formNewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSavePassword}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}
