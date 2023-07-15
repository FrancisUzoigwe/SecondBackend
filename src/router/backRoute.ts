import express, {Router} from "express"
import { createUser, deleteUser, updateUser, viewUser } from "../controller/backController"

const router = Router()

router.route("/view").get(viewUser)
router.route("/create").post(createUser)
router.route("/update/:id").patch(updateUser)
router.route("/delete/:id").delete(deleteUser)

export default router