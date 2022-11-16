import * as fs from 'fs';
import React, { useState } from 'react'

const Slug = (props) => {
    function createMarkup(c) {
        return {__html: c};
      }
    const [blogs, setblogs] = useState(props.myBlog)
    
    // client-side rendering as we do in React
    // useEffect(() => {
    //     if(!router.isReady) return;
    //     const { slug } = router.query
        
    //     fetch(`http://localhost:3000/api/getblog?slug=how-to-${slug}`).then((a) => {
    //         return a.json()
    //     })
    //     .then((data) => {
    //         setblogs(data)
    //         })
    // }, [router.isReady])

    return (
        <div>
            <h1>{blogs && blogs.title}</h1>
            <hr />
            {blogs && <div dangerouslySetInnerHTML={createMarkup(blogs.content)}></div>}
        </div>
    )
}

// this is for static site generation
// `getStaticPaths` requires using `getStaticProps` as we cannot access API during the build
export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { slug: 'how-to-learn-javascript' }},
            { params: { slug: 'how-to-learn-web3' }},
            { params: { slug: 'how-to-learn-python' }}
        ],
        fallback: true 
    }
  }
  
export async function getStaticProps(context) {
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  
    return {
      props: { myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
    }
}

// SSR
// export async function getServerSideProps(context) {
//     const {slug} = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=how-to-${slug}`)
//     let myprops = await data.json()
  
//     return {
//       props: {myprops}, // will be passed to the page component as props
//     }
//   }

export default Slug