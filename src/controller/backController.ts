import express, { Request, Response } from "express";
import backModel from "../model/backModel";
import bcrypt, { genSalt } from "bcrypt"

export const viewUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const view = await backModel.find();
    return res.status(200).json({
      message: "Viewing all users...",
      data: view,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unable to view all users",
      error,
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password, name } = req.body;
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await backModel.create({ userName, email, password: hash, name });
    return res.status(201).json({
      message: `${user.userName} your account has been created successfully`,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occurred while creating user",
      error,
    });
  }
};


export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {id} = req.params
        const user = await backModel.findByIdAndUpdate(id)
        return res.status(200).json({
            message : `${user?.userName} updated successfully`,
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error occurred while updating user",
            error,
          }); 
    }
}


export const deleteUser = async (req: Request, res: Response):Promise<Response> => {
  try {
    const {id} = req.params
    const user = await backModel.findByIdAndDelete(id) 
    return res.status(200).json({
      message : "Account deleted sucessfully",
      data : user
    })
  } catch (error) {
    return res.status(400).json({
      message: "Error occurred while deleting user",
      error,
    }); 
  }
} 