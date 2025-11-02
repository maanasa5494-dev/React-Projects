import apiClient from "./api.services";

export async function fetchPosts() {
    const response = await apiClient.get("posts");
    const posts = response.data;

    return posts;
}

export async function fetchPostDetails(postId) {
    const response = await apiClient.get(`posts/${postId}`);
    const post = response.data;

    return post;
}

