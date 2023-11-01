import {Router} from 'express'
const router:Router=Router()
import {addUser} from '../controller/user'

router.route('/').post(addUser)


export default router