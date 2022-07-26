// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
 let data = await fs.promises.readdir('blogdata')
 data = data.slice(0, req.query.count)
 let myfile;
 let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        myfile = await fs.promises.readFile(('blogdata/'+ element),'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allBlogs)
}
