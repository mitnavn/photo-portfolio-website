import { Button, Row, Col } from 'react-bootstrap';
import { FiMail, FiInstagram } from 'react-icons/fi';
import './About.styles.css';

export function handleClick() {
    return window.location = "mailto:sokuranna@outlook.com" as string & Location;
}

function About() {
    return (
        <div className="About">
            <div className="About-div-text">
                <img className='About-portrait' src='https://media-exp1.licdn.com/dms/image/C5603AQGuHp1tkzZCqw/profile-displayphoto-shrink_800_800/0/1578659883568?e=1672876800&v=beta&t=TdAlvL0rQksT850xU6vknAGKFlOK6suCL7Tsfwb77U8' alt="portrait"></img>
                <p className="About-text">
                    Anna Sokur is a photographer based in Copenhagen.
                </p>
                <p className="About-text">Selected clients and publications:
                    Maja Brix, Lunar, American Dreams, Soundvenue, Nordic Style Magazine, Volant Magazine, Pap Magazine and Moda Operandi.
                </p>
                <p className="About-text">Her work was exhibited at the 'Tell Me a Story' exhibition at Galerie Joseph in Paris.</p>
            </div>
            <div className="About-div-contact">
                <Row>
                <p className="About-text-contact">Contact:</p>
                <Col>
                    <span><FiMail className="About-icon"/></span>
                    <Button variant="link" className="Links" onClick={handleClick} data-testid="email-button">Send an e-mail</Button>
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