import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// create an index file for components
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';
import BlogList from 'components/BlogList';
import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'actions/pagination';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';

export default function Home({ blogs, preview }) {
  // change this state name to renderList and type boolean
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  // data (array of arrays): paginated data
  // size (number): value of current page
  // setSize (function): change value of current page
  // isValidating (boolean): tells if data fetching is in progress
  // hitEnd (boolean): true when no more data
  const { data, size, setSize, isValidating, hitEnd } = useGetBlogsPages({ blogs, filter });

  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className='mb-5'>
        <BlogList data={data || [blogs]} filter={filter} />
        {isValidating &&
          Array(3)
            .fill(0)
            .map((_, i) =>
              filter.view.list ? (
                <Col key={`placeholder-listItem-${i}`} md='10'>
                  <CardListItemBlank />
                </Col>
              ) : (
                <Col key={`placeholder-item-${i}`} md='6' lg='4'>
                  <CardItemBlank />
                </Col>
              )
            )}
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={() => setSize(size + 1)}
          size='lg'
          disabled={hitEnd}
          variant={hitEnd ? 'outline-secondary' : 'outline-info'}
        >
          {hitEnd ? 'No more blogs' : 'Load more blogs'}
        </Button>
      </div>
    </PageLayout>
  );
}

/**
 * This function is called during the build time
 * This function is called only on server-side (not client-side)
 * This creates a static page (server-side rendered page)
 * */
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  return {
    props: {
      blogs,
      preview,
    },
    unstable_revalidate: 1,
  };
}
