import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import * as fs from 'fs';

const initialValue = 6  // Initial value for infinteScroll
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count,setCount] = useState(initialValue);

  const fetchData = async () => {
    const value = 3; // No. of blog wants be to update in every scroll
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+value}`)
    setCount(count+value)
    let data = await d.json()
    setBlogs(data);
  };

  return (
    <main className={styles.main}>
      
  <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={props.allCount !== blogs.length}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
  <div className={styles.grid}>
  {blogs.map((blogitem)=>{
          {/* <a href="#" className={`${styles.card} ${styles.blogitems}`}> */}
          return <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug}><a href="#" className={styles.card}>
            <h2>{blogitem.title} &rarr;</h2>
            <p>{blogitem.metadesc.substr(0,100)}...</p>
          </a></Link>
        })
        }
</div>
</InfiniteScroll>
          {/* <a href="#" className={`${styles.card} ${styles.blogitems}`}>
          <Link href={"/blogpost/How to learn javascript"}><a href="#" className={styles.card}>
            <h2>How to learn javascript in 2022 &rarr;</h2>
            <p>Javascript is a language used to design logic for a web.</p>
          </a></Link>

          <Link href={"/blogpost/How to learn javascript"}><a href="#" className={styles.card}>
          <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a></Link>
          */}
        </main>
  )
};
export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata');
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
     for (let index = 0; index < initialValue; index++) {
         const element = data[index];
         myfile = await fs.promises.readFile(('blogdata/'+ element),'utf-8')
         allBlogs.push(JSON.parse(myfile))

     }
     return { props: { allBlogs , allCount} }
}

// SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const res = await fetch('http://localhost:3000/api/blogs')
//   const allBlogs = await res.json()

//   // Pass data to the page via props
//   return { props: { allBlogs } }
// }

export default Blog;