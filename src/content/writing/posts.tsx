import type { WritingPost } from "./types";

// Add a post by:
// 1. Creating a component for its body, e.g. src/content/writing/my-post.tsx:
//
//    const MyPost = () => (
//      <>
//        <p>Plain text and paragraphs go here.</p>
//        <img src="/lovable-uploads/some-image.png" alt="" />
//        <p>More text.</p>
//      </>
//    );
//    export default MyPost;
//
// 2. Registering it below:
//
//    import MyPost from "./my-post";
//    { slug: "my-post", title: "My Post", date: "2026-03-14", summary: "...", Body: MyPost }

export const posts: WritingPost[] = [];
