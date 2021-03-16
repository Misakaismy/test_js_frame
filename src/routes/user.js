import {Router} from 'express';
// import {controller} from '../controllers/user.js'

const router = Router();

router.use('/', (req,res)=>{
    res.status(200).json({message:'Hi'});
});

// router.get('/', controller.getuser);
// router.post('/', controller.postuser);

export default router;