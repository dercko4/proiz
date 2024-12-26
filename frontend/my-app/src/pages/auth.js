import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { REGISTRATION_ROUTE, REQUEST_ROUTE } from "../utils/consts";
import { Button, Card, Container, Form } from "react-bootstrap"





const Auth = observer(() => {
    document.body.style.backgroundColor = "#faeedd"
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const submit = async () => {
        try {
            const response = await auth(login, password)
            if (!response) return
            user.setUser()
            user.setIsAuth(true)
            navigate(REQUEST_ROUTE)
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    return (
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
            <Card style={{ backgroundColor: "blue", height: 750, width: 1200, border: "3px solid black", borderRadius: "25px" }}>
                <Form style={{ display: "flex",justifyContent: "center", alignItems: "center" }}>
                    <Form.Control
                        style={{
                            fontFamily: "Abhaya Libre",
                            backgroundColor: "#f5e3d7", height: "50px", width:"300px",
                            marginLeft: "7%", border: "2px solid #854f46",
                            borderRadius: "30px", paddingLeft: "15px", marginTop: "4%",
                            display:"block"
                        }}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Ваш логин..."
                    />
                    <Form.Control
                        style={{    
                            fontFamily: "Abhaya Libre",
                            backgroundColor: "#f5e3d7", height: "50px", width:"300px",
                            marginLeft: "7%", border: "2px solid #854f46",
                            borderRadius: "30px", paddingLeft: "15px", marginTop: "4%",
                            display:"block"
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ваш пароль..."
                    />
                </Form>
            </Card>
        </Container>
    );
})

export default Auth;