import { observer } from "mobx-react-lite";
import Logo from "../components/files/logo.png"
import { Container, ButtonToolbar, Button, Navbar, ButtonGroup } from "react-bootstrap";

const Header = observer(() =>
{
    return (
        <Navbar style={{ height: '100px', backgroundColor: '#999999'}} fixed='top'>
            <Container>
                <img src={Logo} style={{height: '90px', marginTop: "3px", marginLeft:"20px"}} />
            </Container>
        </Navbar>
    )
})

export default Header;