import client from './sanity';
import imageURLBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
`;

export const getAllBlogs = async ({ offset } = { offset: 0 }) => {
  const results = await client.fetch(
    `*[_type == "blog"]{${blogFields}}[${offset}...${offset + 3}]`
  );
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

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
