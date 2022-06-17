import { useState } from 'react';
import { Row } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import { getAllBlogs } from 'lib/api';
import { useGetBlogPages } from 'actions/pagination';

export default function Home({ blogs }) {
  // change this state name to renderList and type boolean
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogPages({ blogs, filter });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className='mb-5'>{pages}</Row>
    </PageLayout>
  );
}

/**
 * This function is called during the build time
 * This function is called only on server-side (not client-side)
 * This creates a static page (server-side rendered page)
 * */
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 });
  return {
    props: {
      blogs,
    },
  };
}
