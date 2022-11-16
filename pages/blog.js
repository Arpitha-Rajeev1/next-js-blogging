import Link from 'next/link'
import * as fs from 'fs';
import React, { useState } from 'react'

const blog = (props) => {
  
  const [blogs, setblogs] = useState(props.allBlogs)
  // client-side rendering as we do in React
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs')
  //     .then((a) => a.json())
  //     .then((data) => {
  //       setblogs(data)
  //     })
  // }, [])

  return (
    
      <div className="items">
        
        {blogs.map((ele) => {
          return <Link key={ele.url} href={ele.url}>
            <h1>{ele.title}</h1>
            <p>{ele.content}</p>
          </Link>
        })}
      </div>
    
  )
}

export async function getStaticProps() {
  let data = await fs.promises.readdir('blogdata');
    let myfile;
    let allBlogs = [];
    for(let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

// SSR
// export async function getServerSideProps() {

//   let data = await fetch('http://localhost:3000/api/blogs')
//   let myprops = await data.json()

//   return {
//     props: {myprops}, // will be passed to the page component as props
//   }
// }

export default blog