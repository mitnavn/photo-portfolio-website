import Button from 'react-bootstrap/Button';
import { CgMail, CgInstagram } from 'react-icons/cg';

function Contact() {
    return (
        <div className="About">
            <div>
                <p className="About-text">
                    Contact:
                </p>
            </div>
            <div>
                <span><CgMail/></span>
                <Button variant="link" className="FooterLinks" onClick={() => window.location = 'mailto:yourmail@gmail.com'}>Send an e-mail</Button>
            </div>
            <div>
                <span><CgInstagram /></span>
                <a href="https://www.instagram.com/sokuranna/" target="_blank" rel="noreferrer" className="Contact-link">Instagram</a>
            </div>
        </div>
    );
}
export default Contact;