import {Router} from 'express';
import {getuser} from '../controllers/user.js'

const router = Router();

router.get('/', getuser.getuser);
router.post('/', getuser.postuser);

export default router;