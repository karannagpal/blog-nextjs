import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ title, subtitle, date, blogImage, author, slug, mode = 'normal' }) => {
  // TODO: optimise conditional rendering using 'mode'
  return (
    <Card className={`fj-card ${mode}`}>
      <div className={`card-body-wrapper ${!blogImage ? 'no-image' : ''}`}>
        <Card.Header className='d-flex flex-row'>
          <img
            src={author?.avatar || `https://via.placeholder.com/150`}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            {mode === 'placeholder' ? (
              <>
                <Card.Title className='font-weight-bold mb-1'>Author Name</Card.Title>
                <Card.Text className='card-date'>published date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className='font-weight-bold mb-1'>
                  {author?.name || 'Anonymous'}
                </Card.Title>
                <Card.Text className='card-date'>{date}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className='view overlay'>
          {mode === 'placeholder' ? (
            <div className='image-placeholder' />
          ) : (
            blogImage && <Card.Img src={urlFor(blogImage).height(300).url()} alt='Card image cap' />
          )}
        </div>
        <Card.Body>
          {mode === 'placeholder' ? (
            <>
              <Card.Title className='card-main-title'>Blog title</Card.Title>
              <Card.Text>Subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className='card-main-title'>
                {title.length > 40 ? title.substr(0, 40) + '...' : title}
              </Card.Title>
              <Card.Text>
                {subtitle.length > 40 ? subtitle.substr(0, 40) + '...' : subtitle}
              </Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      <Link href={`/blogs/${slug}`}>
        <a className='card-button'>Read More</a>
      </Link>
    </Card>
  );
};

export default CardItem;
