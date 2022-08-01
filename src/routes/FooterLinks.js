import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import images from '../img/index1.js';

function FooterLinks({photoId}) {
  let navigate = useNavigate();

  // function toCategory() {
  //   !photoId
  //   ? navigate('/works/art')
  //   : photoId.includes('art')
  //   ? navigate('/works/art')
  //   : photoId.includes('portraits')
  //   ? navigate('/works/portraits')
  //   : photoId.includes('street-style')
  //   ? navigate('/works/street-style')
  //   : photoId.includes('weddings')
  //   ? navigate('/works/weddings')
  //   : navigate('/')
  // }

  function toCategory() {
    !photoId
    ? navigate('/works/art')
    : images[photoId].name.includes('art')
    ? navigate('/works/art')
    : images[photoId].name.includes('editorials')
    ? navigate('/works/editorials')
    : images[photoId].name.includes('film')
    ? navigate('/works/film')
    : images[photoId].name.includes('portraits')
    ? navigate('/works/portraits')
    : images[photoId].name.includes('street-style-1')
    ? navigate('/works/street-style-i')
    : images[photoId].name.includes('street-style-2')
    ? navigate('/works/street-style-ii')
    : images[photoId].name.includes('wedding-1')
    ? navigate('/works/wedding-i')
    : images[photoId].name.includes('wedding-2')
    ? navigate('/works/wedding-ii')
    : navigate('/')
  }

    return (
        <div className="Footer-div">
          <Row>
            <Col>
              <Button variant="link" onClick={toCategory} className="FooterLinks">Gallery</Button>
            </Col>
            <Col>
              <Button variant="link" onClick={() => {navigate("/about")}} className="FooterLinks">About</Button>
            </Col>
          </Row>
      </div>
    )
}

export default FooterLinks;