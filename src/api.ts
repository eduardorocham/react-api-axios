import axios from "axios";

export const api = {
    getAllPosts: async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, userId});
        return response.data;
    }
}