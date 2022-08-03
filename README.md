# Karan's NextJS blog

- Udemy's NextJS & sanity CMS course

## Getting Started

- after cloning the repository on your machine, follow the steps
- create `.env.local` file in the root folder with the values

```javascript
SANITY_DATASET_NAME = YOUR_DATASET_NAME; // from sanity dashboard
SANITY_PROJECT_ID = YOUR_PROJECT_ID; // from sanity dashboard
SANITY_STUDIO_PREVIEW_SECRET = YOUR_PREVIEW_SECRET; // unique string
SANITY_API_TOKEN = YOUR_API_TOKEN; // from sanity dashboard
```

## Run development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
