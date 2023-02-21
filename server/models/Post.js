import mongoose from "mongoose";

const PostSchema = new mongoose.Scheema(
  {
    username: { type: String },
    title: { type: String, required },
    text: { type: String, required: true },
    imgUrl: { typeL: String, default: "" },
    views: { type: Number, default: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
