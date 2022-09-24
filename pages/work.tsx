import Work from '../containers/Work/Work';

const WorkPage = () => {
  return <Work />;
};

export default WorkPage;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements`
  );
  const ads = await res.json();
  console.log(ads);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ads,
    },
  };
}
