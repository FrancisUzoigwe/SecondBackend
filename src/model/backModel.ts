import mongoose from "mongoose";

interface iBack {
  name?: string;
  userName?: string;
  email?: string;
  password?: string;
}

interface iBackend extends iBack, mongoose.Schema {}

const iBack = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide a name"] },
    email: {
      type: String,
      required: [true, "Please provide a valid email address"],
    },
    userName: { type: String, required: [true, "Please provide a user name"] },
    password: { type: String, required: [true, "Please provide a password"] },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iBack>("Backend", iBack);