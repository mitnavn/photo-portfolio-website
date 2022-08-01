import { Button, Row, Col } from 'react-bootstrap';
import { FiMail, FiInstagram } from 'react-icons/fi';

function  About() {
    return (
        <div className="About">
            <div className="About-div-text">
                <p className="About-text">
                    Anna Sokur is a photographer based in Copenhagen.
                </p>
                <p className="About-text">Selected clients and publications:
                    Maja Brix, Lunar, American Dreams, Soundvenue, Nordic Style Magazine, Volant Magazine, Pap Magazine, PhotoVogue Italia.
                </p>
                <p className="About-text">Her work was exhibited at the 'Tell Me a Story' exhibition at Galerie Joseph in Paris.</p>
            </div>
            <div className="About-div-contact">
                <Row>
                <p className="About-text-contact">Contact:</p>
                <Col>
                    <span><FiMail className="About-icon"/></span>
                    <Button variant="link" className="FooterLinks" onClick={() => window.location = 'mailto:sokuranna@outlook.com'}>Send an e-mail</Button>
                </Col>
                <Col>
                    <span><FiInstagram className="About-icon" /></span>
                    <a href="https://www.instagram.com/sokuranna/" target="_blank" rel="noreferrer" className="Contact-link">Instagram</a>
                </Col>
                </Row>
            </div>
        </div>
    );
}
export default About;