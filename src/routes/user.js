import {Router} from 'express';
// import {controller} from '../controllers/user.js'

class UserController{
    getuser = (req, res)=>{
        const name = "Jack";
        const {token} = req.query;
        res.status(200).json({message:`${token}.${name}`});
    }

    postuser = (req, res)=>{
        const {body} = req;
        const {name, phone} = body;
        const profile = {
            name,
            phone,
        }
        res.status(200).json({profile});
        console.log(body);
        console.log(req);
    } 
}

const controller = new UserController;

const router = Router();

// router.use('/', (req,res)=>{
//     res.status(200).json({message:'Hi'});
// });

router.get('/GET', controller.getuser);
router.post('/POST', controller.postuser);

export default router;

