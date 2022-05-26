import client from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'coverImage': coverImage.asset->url,
  author
`;

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
};
