import { NextResponse } from "next/server";
import connectToDB from "@/lib/mongodb";
import Post from "@/models/Posts";

export async function GET() {
  try {
    await connectToDB();

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDB();

    const body = await request.json(); // expects JSON
    const newPost = await Post.create({
      title: body.title,
      content: body.content,
      author: body.author || {
        name: "Demo User",
        id: "demo-user-001",
        imgurl: "https://i.pravatar.cc/150?img=3",
      },
      media: body.media || [],
    });

    console.log("✅ New post created:", newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating post:", error);
    return NextResponse.json({ message: "Error creating post" }, { status: 500 });
  }
}
