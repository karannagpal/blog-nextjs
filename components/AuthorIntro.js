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
            src='https://scontent.fixc9-1.fna.fbcdn.net/v/t1.6435-9/61852240_1204582956389807_3983661190143279104_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=uwFtukCH7TsAX8ICm54&_nc_ht=scontent.fixc9-1.fna&oh=00_AT9WdaJ36tDgB8zowNQEz2BxFrkJS7W7qsTLCxbE-tlfOg&oe=62A80EC0'
            alt='Generic placeholder'
          />
          <Media.Body>
            <h5 className='font-weight-bold mb-0'>Hi there!</h5>
            <p className='welcome-text'>
              My name is Karan and I am a web developer with 3y of experience. I like photography,
              science &amp; cooking too.
            </p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
  );
};

export default AuthorIntro;
