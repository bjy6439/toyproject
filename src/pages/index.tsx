import HeadInfo from "@/components/HeadInfo";

export default function Home({ posts }: { posts: any }) {
  return (
    <div>
      <HeadInfo title="My Blogs" />
      <h1>Welcome to my blog</h1>
      <ul>
        {posts.map((post: any) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:8080/api/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/api/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
