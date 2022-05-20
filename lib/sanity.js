import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  // if useCdn is true, response time will be fast, but will give cached result
  // for development, we need actual data, not cached (slow but latest responses)
};

export default sanityClient(options);
