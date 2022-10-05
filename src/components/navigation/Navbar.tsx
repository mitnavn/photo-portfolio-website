import { useState } from 'react';
import { Nav, Container, Offcanvas, CloseButton } from 'react-bootstrap';
import { CgMenu } from 'react-icons/cg';

function Navigbar() {
    const [displayMenu, setDisplayMenu] = useState(false);

    function showMenu() {
        setDisplayMenu(true);
    }
    function closeMenu() {
        setDisplayMenu(false);
    }

    return (
        <Container>
            <span onClick={showMenu} className="Menu" ><CgMenu className="Menu-icon"/></span>
            <Offcanvas show={displayMenu} onHide={closeMenu} className="Offcanvas-menu">
                <Offcanvas.Header>
                    <CloseButton onClick={closeMenu} variant="white"/>
                </Offcanvas.Header>
                <Offcanvas.Body className="Fade-menu">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <br/>
                        <Nav.Link href="/works/art">Art</Nav.Link>
                        <Nav.Link href="/works/editorial-i">Editorial I</Nav.Link>
                        <Nav.Link href="/works/editorial-ii">Editorial II</Nav.Link>
                        <Nav.Link href="/works/editorial-iii">Editorial III</Nav.Link>
                        <Nav.Link href="/works/editorial-iv">Editorial IV</Nav.Link>
                        <Nav.Link href="/works/editorial-v">Editorial V</Nav.Link>
                        <Nav.Link href="/works/film">Film</Nav.Link>
                        <Nav.Link href="/works/portraits">Portraits</Nav.Link>
                        <Nav.Link href="/works/street-style-i">Street style I</Nav.Link>
                        <Nav.Link href="/works/wedding-i">Wedding I</Nav.Link>
                        <Nav.Link href="/works/wedding-ii">Wedding II</Nav.Link>
                   </Nav>
                </Offcanvas.Body>
            </Offcanvas>

        </Container>
    )
}

export default Navigbar;