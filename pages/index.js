import { useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';
import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogsPages } from 'actions/pagination';

export default function Home({ blogs, preview }) {
  // change this state name to renderList and type boolean
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  // isLoadingMore (boolean): swr is loading more data
  // isReachingEnd (boolean): no more data
  // loadMore (callback function): ask for more data
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({ blogs, filter });

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
      <Row className='mb-5'>{pages}</Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={loadMore}
          size='lg'
          disabled={isReachingEnd || isLoadingMore}
          variant={isReachingEnd ? 'outline-secondary' : 'outline-info'}
        >
          {isLoadingMore ? 'Loading...' : isReachingEnd ? 'No more blogs' : 'Load more blogs'}
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
