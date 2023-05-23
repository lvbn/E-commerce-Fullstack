import { User } from "../models/user-model"


export const signup = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar
    })

    await user.save()

    if (user) {
      res.status(200)
      res.json(user)
    }
  } catch (error) {
    res.status(404)
    res.json(error)
  }
}