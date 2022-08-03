import { Col } from 'react-bootstrap';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import moment from 'moment';

const BlogList = ({ data, filter }) => {
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <Col key={`${blog.slug}-list`} md='10'>
          <CardListItem
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LLL')}
            author={blog.author}
            link={{
              href: `/blogs/[slug]`,
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={blog.slug} md='6' lg='4'>
          <CardItem
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LLL')}
            blogImage={blog.coverImage}
            author={blog.author}
            slug={blog.slug}
          />
        </Col>
      )
    )
  );
};

export default BlogList;
