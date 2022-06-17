import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => {
  return (
    <Row>
      <Col md='8'>
        {/* AUTHOR INTRO STARTS */}
        <Media className='mb-4 admin-intro'>
          <Image
            roundedCircle
            width={64}
            height={64}
            className='mr-3'
            src='https://cdn.sanity.io/images/5b3bmo85/production/5da5f685464ec795c7b42211273d8536a8a4ceb6-557x558.jpg'
            alt='Generic placeholder'
          />
          <Media.Body>
            <h5 className='font-weight-bold mb-0'>Hi there!</h5>
            <p className='welcome-text'>
              My name is Karan and I am a web developer with 3y of experience. Apart from making
              software, I like photography, science &amp; cooking. This is my blog.
            </p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
  );
};

export default AuthorIntro;
