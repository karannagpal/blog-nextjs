import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';
import BlogNavbar from '../components/Navbar';

export default function Home() {
  return (
    <Container>
      <BlogNavbar />
      <div className='blog-detail-page'>
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
                  My name is Karan and I am a software engineer with 3y of experience. I like
                  photography, science &amp; cooking too.
                </p>
              </Media.Body>
            </Media>
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr />
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className='mb-5'>
            <Col md='10'>
              {/* CardListItem STARTS */}
              <Card className={`fj-card fj-card-list`}>
                <div className='card-body-wrapper'>
                  <Card.Header className='d-flex flex-row'>
                    <img
                      src={'https://via.placeholder.com/150'}
                      className='rounded-circle mr-3'
                      height='50px'
                      width='50px'
                      alt='avatar'
                    />
                    <div>
                      <Card.Title className='font-weight-bold mb-1'>Placeholder Author</Card.Title>
                      <Card.Text className='card-date'>Placeholder Date</Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className='card-main-title'>Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a href='#' className='card-button'>
                  Read More
                </a>
              </Card>
              {/* CardListItem ENDS */}
            </Col>

            <Col md='4'>
              <Card className={`fj-card`}>
                <div className='card-body-wrapper'>
                  <Card.Header className='d-flex flex-row'>
                    <img
                      src={'https://via.placeholder.com/150'}
                      className='rounded-circle mr-3'
                      height='50px'
                      width='50px'
                      alt='avatar'
                    />
                    <div>
                      <Card.Title className='font-weight-bold mb-1'>Placeholder Author</Card.Title>
                      <Card.Text className='card-date'>Placeholder Date</Card.Text>
                    </div>
                  </Card.Header>
                  <div className='view overlay'>
                    <Card.Img src='https://via.placeholder.com/250' alt='Card image cap' />
                  </div>
                  <Card.Body>
                    <Card.Title className='card-main-title'>Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a className='card-button'>Read More</a>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className='page-footer'>
        <div>
          <a href='#'>courses</a>
          {' | '}
          <a href='https://github.com/karannagpal'>github</a>
          {' | '}
          <a href='#'>facebook</a>
        </div>
      </footer>
    </Container>
  );
}
