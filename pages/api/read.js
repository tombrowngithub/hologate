// import {Users} from '@/pages/[users]'
//
// export default async function read(req, res) {
//     const q = req.query.q
//
//     const KEYS = ["first_name"]
//
//     function search(data) {
//         return data.filter((item) => KEYS.some((key) => item[key]
//             .toLowerCase().includes(q)))
//     }
//
//
//     //using mongoDb
//     ///const user = Users.find({$regex: q})
//     res.json(search(Users))
// }