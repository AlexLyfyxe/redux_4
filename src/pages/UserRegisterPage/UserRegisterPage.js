import React, { useState } from "react";
import { Row, Col, Form, Button, Container, Spinner, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../redux/action";
import "./userRegisterPage.css"

function UserRegisterPage() {

    const dispatch = useDispatch()
    const { preloader } = useSelector(state => state.formReducer)
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }


    const regName = /^[A-Za-zА-яа-я]+$/

    const regEmail = /^\w[\w.-]*@[\w.-]+\.\w{2,3}$/

    const regPassword = /^([A-Za-z]+|\d+)$/i

    const addUser = (event) => {
        event.preventDefault()


        if (!user.name || !user.username || !user.email || !user.password) {
            alert('Заполни все поля!')
            return
        }
        if (!regName.test(user.name)) {
            alert('В имени должны быть только буквы!')
            return
        }
        if (!regEmail.test(user.email)) {
            alert('Запиши email/gmail правильно!')
            return
        }
        if (!regPassword.test(user.password)) {
            alert('Непонятные символы использовать нельзя!')
            return
        }


        dispatch(addUserAction(user))
    }


    return (
        <Container>
            <h1 className="topText">Register User</h1>
            {
                preloader
                    ?
                    <Spinner animation="border" variant="success" />
                    :
                    <Form onSubmit={addUser}>
                        <Row className="allBlock">
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className="labelForm">Name</Form.Label>
                                    <InputGroup hasValidation>

                                        <Form.Control
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            onChange={formValue}
                                            isInvalid={user.name && !regName.test(user.name)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a name.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>

                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label className="labelForm">Username</Form.Label>
                                    <InputGroup hasValidation>

                                        <Form.Control
                                            type="text"
                                            placeholder="username"
                                            name="username"
                                            onChange={formValue}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label className="labelForm">Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>

                                        <Form.Control
                                            aria-describedby="inputGroupPrepend"
                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            onChange={formValue}
                                            isInvalid={user.email && !regEmail.test(user.email)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a email.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>

                            <Col lg={3}>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="labelForm">Passvord</Form.Label>
                                    <InputGroup hasValidation>

                                        <Form.Control
                                            type="password"
                                            placeholder="password"
                                            name="password"
                                            onChange={formValue}
                                            isInvalid={user.password && !regPassword.test(user.password)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a passvord.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>


                            <Col lg={3} className="registerButton">
                                <Button type="submit" style={{ background: '#dc8bc8', fontSize: '18px', padding: '10px 15px', fontWeight: '800', fontFamily: 'Cursive' }} className="w-100">
                                    register user
                                </Button>
                            </Col>
                        </Row>
                    </Form>
            }
        </Container >
    )
}

export default UserRegisterPage