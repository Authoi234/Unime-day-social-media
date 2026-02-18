import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            imgurl: {
                type: String,
            },
            name: {
                type: String,
                required: true,
            },
            id: {
                type: String,
                required: true,
            },
        },

        media: [
            {
                url: {
                    type: String,
                },
                type: {
                    type: String,
                    enum: ["image", "video"],
                },
            },
        ],
    },
    { timestamps: true }
);


const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;