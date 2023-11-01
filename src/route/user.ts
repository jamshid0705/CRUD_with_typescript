import {Router} from 'express'
const router:Router=Router()
import {addUser,getAllUser,getOneUser,deleteUser,updateUser} from '../controller/user'

router.route('/').post(addUser).get(getAllUser)
router.route('/:id').get(getOneUser).delete(deleteUser).patch(updateUser)


export default router