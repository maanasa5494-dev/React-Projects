import { useEffect, useState } from "react";
import {fetchPosts} from "../services/posts.services";
import {useNavigate} from "react-router";


export default function PostsListing() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchPosts().then((result) => {
            setPosts(result);
        });
    }, []);
    return <div className="posts">
        {posts.map((post) => <div key={post.id} className="post-item" onClick={() => {navigate(`/post/detail/${post.id}`)}}>
            {post.title}
        </div>)}
    </div>;
}