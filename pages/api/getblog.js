import * as fs from 'fs';
// localhost:3000/api/getblog?slug=how-to-learn-python
export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
        if (err){
            res.status(500).json({"error":"Blog not found"})
        }
        res.status(200).json(JSON.parse(data))
    })
  }
  