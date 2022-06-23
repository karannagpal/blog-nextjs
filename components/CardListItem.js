import { Card } from 'react-bootstrap';
import Link from 'next/link';

const CardListItem = ({ title, subtitle, date, author, link, mode = 'normal' }) => {
  const prettifiedDate = new Date(date);
  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img
            src={author?.avatar || `https://via.placeholder.com/150`}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          {mode === 'placeholder' ? (
            <div>
              <Card.Title className='font-weight-bold mb-1'>Author Name</Card.Title>
              <Card.Text className='card-date'>published date</Card.Text>
            </div>
          ) : (
            <div>
              <Card.Title className='font-weight-bold mb-1'>{author?.name}</Card.Title>
              <Card.Text className='card-date'>{prettifiedDate.toDateString()}</Card.Text>
            </div>
          )}
        </Card.Header>
        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className='card-main-title'>Blog title</Card.Title>
              <Card.Text>Subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className='card-main-title'>{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardListItem;
