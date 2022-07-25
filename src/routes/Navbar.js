import { useState } from 'react';
import { Nav, Container, Offcanvas, CloseButton } from 'react-bootstrap';
import { CgMenu } from 'react-icons/cg';
// import { fadeIn, fadeOutLeft } from 'react-animations';
// import styled, { keyframes } from 'styled-components';

// const Fade = styled.div`animation: 1s ${keyframes`${fadeIn}`}`;

function Navigbar() {
    const [displayMenu, setDisplayMenu] = useState(false);

    function showMenu() {
        setDisplayMenu(true);
    }
    function closeMenu() {
        setDisplayMenu(false);
    }

    return (
        // <Container>
        //     <span onClick={showMenu} className="Menu" ><CgMenu className="Menu-icon"/></span>
        //     {displayMenu &&
        //         <div className="Fade-menu">
        //             <Fade>
        //                 <Nav defaultActiveKey="/" className="flex-column">
        //                     <Nav.Link href="/">Home</Nav.Link>
        //                     <Nav.Link href="/works/art">Art</Nav.Link>
        //                     <Nav.Link href="/works/editorials">Editorials</Nav.Link>
        //                     <Nav.Link href="/works/portraits">Portraits</Nav.Link>
        //                     <Nav.Link href="/works/street-style">Street Style</Nav.Link>
        //                     <Nav.Link href="/works/wedding-i">Wedding I</Nav.Link>
        //                     <Nav.Link href="/works/wedding-ii">Wedding II</Nav.Link>
        //                     <Nav.Link href="/about">About</Nav.Link>
        //                 </Nav>
        //         </Fade>
        //       </div>
        //     }
        // </Container>

        <Container>
            <span onClick={showMenu} className="Menu" ><CgMenu className="Menu-icon"/></span>

            <Offcanvas show={displayMenu} onHide={closeMenu} className="Offcanvas-menu">
                <Offcanvas.Header>
                    <CloseButton onClick={closeMenu} variant="white"/>
                </Offcanvas.Header>
                <Offcanvas.Body className="Fade-menu">
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/works/art">Art</Nav.Link>
                        <Nav.Link href="/works/editorials">Editorials</Nav.Link>
                        <Nav.Link href="/works/portraits">Portraits</Nav.Link>
                        <Nav.Link href="/works/street-style">Street Style</Nav.Link>
                        <Nav.Link href="/works/wedding-i">Wedding I</Nav.Link>
                        <Nav.Link href="/works/wedding-ii">Wedding II</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                   </Nav>
                </Offcanvas.Body>
            </Offcanvas>

        </Container>
    )
}

export default Navigbar;