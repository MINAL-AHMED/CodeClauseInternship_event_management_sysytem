import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: "string", require: true, unique: true },
  email: { type: "string", require: true, unique: true },
  username: { type: "string", require: true },
  lastname: { type: "string", require: true },
  photo: { type: "string", require: true },
});

const User = models.User || model("User", UserSchema);

export default User;
