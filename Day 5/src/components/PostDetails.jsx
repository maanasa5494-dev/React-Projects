import { useEffect, useState } from "react";
import {useParams} from "react-router";
import {fetchPostDetails} from "../services/posts.services";

export default function PostDetails() {
    let params = useParams();
    const postId = params.postId;
    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        fetchPostDetails(postId).then((result) => {
            setPostDetails(result);
        })
    }, []);

    return <>
    Post Details
    <div>
        <span>
            {postDetails.title}
        </span>
        <span>
            {postDetails.body}
        </span>
    </div>
    </>
}