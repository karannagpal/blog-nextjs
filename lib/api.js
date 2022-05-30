import client from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url,
`;

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
};

export const getBlogBySlug = async (slug) => {
  const results = await client.fetch(
    `*[_type == "blog" && slug.current == $slug]{${blogFields} content[]{..., 'asset': asset->}}`,
    {
      slug,
    }
  );
  return results[0];
};
