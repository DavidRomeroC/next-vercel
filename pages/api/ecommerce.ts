import { NextApiRequest, NextApiResponse } from "next";
import { ecommerceData } from "../../src";



export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return res.status(200).send(ecommerceData)

}
