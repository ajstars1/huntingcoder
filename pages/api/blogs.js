// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
 let files = await fs.promises.readdir('blogdata')
 let data;
 let allBlogs = [];
    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        data = await fs.promises.readFile(('blogdata/'+ element),'utf-8')
        allBlogs.push(JSON.parse(data))
        console.log(data)
    }
    res.status(200).json(allBlogs)
}
