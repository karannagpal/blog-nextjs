import { getBlogBySlug } from 'lib/api';

export default async function enablePreview(req, res) {
  if (req.query.secret !== process.env.SANITY_STUDIO_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Unauthorised: Invalid token' });
  }

  const blog = await getBlogBySlug(req.query.slug);

  if (!blog) {
    return res.status(404).json({ message: 'Invalid Slug' });
  }

  // __prerender_bypass & __next_preview_data are two cookies in nextJS app
  // here we will set those cookies
  res.setPreviewData({});

  // this redirects user to the location provided
  res.writeHead(307, { Location: `/blogs/${blog.slug}` });

  res.end();
}
