import { useEffect } from "react";
import { fetchPosts } from "../services/posts.services";

export default function AutoSuggest() {
    useEffect(() => {
        fetchPosts().then((resp) => {
            console.log(resp);
        })
    }, []);
    return <div> Hi</div>
}