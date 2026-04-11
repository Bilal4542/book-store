import userSchema from "../models/user.model.js";
import bycryptjs from 'bcryptjs'
export const signUp = async (req,res) => {
  try {
    const {fullName,email,password} =  req.body
    const user = await userSchema.findOne({email})
    if(user){
      return res.status(200).json({message:"user already existed"})
    }

    const hashPassword = await bycryptjs.hash(password, 10)

    const createUser = new userSchema({
      fullName : fullName,
      email : email,
      password: hashPassword,
    })
    await createUser.save()
    return res.status(200).json({message:"user created successfully"})
  } catch (error) {
    return res.status(500).json(error.message)
    console.log('user registeration failed', error.message)
  }
}

export const login = async (req,res) => {
  try {
    const {email,password} = req.body
    const user = await userSchema.findOne({email})
    const isMatch = bycryptjs.compare(password, user.password)
    if(!user || !isMatch){
      return res.status(400).json({message:"invalid username or password"})
    }else{
      res.status(200).json({message:"user login successfull", user:{
        _id:user._id,
        email:user.email,
        password:user.password
      }})
    }
  } catch (error) {
    res.status(500).json({message:'internal server error', error})
    console.log(error.message)
  }
}
