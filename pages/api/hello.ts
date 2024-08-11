// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  message?: any;
};

export default function Handler(req: NextApiRequest, res: NextApiResponse<Data>){

  if(req.method !== 'post'){
    res.status(404).json({message: req.query.age})
  
  }else {
    res.status(200).json({ name: "John Doe" });
  }

}
