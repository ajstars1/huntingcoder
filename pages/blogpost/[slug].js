import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)
  function createMarkup(c) {
    return {__html: c};
  }
    
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <h1>{blog.title}</h1>
      <hr/>
      <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
      </div>
      </div>
  )
}
export async function getStaticPaths() {
  let allBlogs = await fs.promises.readdir('blogdata')
  allBlogs = allBlogs.map((items)=>{
    return{params:{slug: items.split(".")[0]}}
  })
  return {
    paths: allBlogs,
    fallback: false, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context) {
  const {slug}= context.params;
  const myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
  return { 
    props: { myBlog: JSON.parse(myBlog) } 
  }
}


// export async function getServerSideProps(context) {
//   const {slug} = context.query
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   const myBlog = await res.json()

//   // Pass data to the page via props
//   return { props: { myBlog } }
// }
export default Slug