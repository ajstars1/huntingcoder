import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';


const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  return (
    <main className={styles.main}>
    <div className={styles.grid}>
        {blogs.map((blogitem)=>{
          {/* <a href="#" className={`${styles.card} ${styles.blogitems}`}> */}
          return <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug}><a href="#" className={styles.card}>
            <h2>{blogitem.title} &rarr;</h2>
            <p>{blogitem.metadesc.substr(0,100)}...</p>
          </a></Link>
        })}
          {/* <a href="#" className={`${styles.card} ${styles.blogitems}`}> */}
          <Link href={"/blogpost/How to learn javascript"}><a href="#" className={styles.card}>
            <h2>How to learn javascript in 2022 &rarr;</h2>
            <p>Javascript is a language used to design logic for a web.</p>
          </a></Link>

          <Link href={"/blogpost/How to learn javascript"}><a href="#" className={styles.card}>
          <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a></Link>
         
        </div>
        </main>
  )
};
export async function getStaticProps(context) {
  let files = await fs.promises.readdir('blogdata')
  let data;
  let allBlogs = [];
     for (let index = 0; index < files.length; index++) {
         const element = files[index];
         data = await fs.promises.readFile(('blogdata/'+ element),'utf-8')
         allBlogs.push(JSON.parse(data))
         console.log(data)
     }
     return { props: { allBlogs } }
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