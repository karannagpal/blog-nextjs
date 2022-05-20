import client from './sanity';

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{title, slug, subtitle}`);
  return results;
};
