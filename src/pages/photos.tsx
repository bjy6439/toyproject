import React from "react";
import HeadInfo from "@/components/HeadInfo";
import Image from "next/image";
import PhotosStyles from "../styles/Photos.module.css";
import Link from "next/link";

const photos = ({ photos }: { photos: any }) => {
  return (
    <>
      <HeadInfo title="My Blog Photos" />
      <div>
        <h1>My Photos</h1>
        <ul className={PhotosStyles.photos}>
          {photos?.map((photos: any) => {
            return (
              <li key={photos.id}>
                <Link href={`/photos/${photos.id}`}>
                  <Image
                    src={photos.thumbnailUrl}
                    width={150}
                    height={150}
                    alt={photos.title}
                  ></Image>
                  <span>{photos.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default photos;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
//   );
// };
