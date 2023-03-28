import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Index = ({ photos }: { photos: any }) => {
  const { title, url } = photos;

  return (
    <div>
      <h2>image{title}</h2>
      <Image src={url} width={500} height={500} alt={title} />
      <Link href="/photos">go to photos</Link>
    </div>
  );
};
export const getStaticProps = async (context: any) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();
  const ids = photos.map((photo: any) => photo.id);
  const paths = ids.map((id: number) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Index;
