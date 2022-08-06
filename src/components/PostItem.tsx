import { Posts } from '../types/posts';

type Props = {
    data: Posts;
}

export const PostItem = ({ data }: Props) => {
    return (
        <div>
            <h3>{data.title}</h3>
            <small>#{data.id} User:{data.userId}</small>
            <p>{data.body}</p>
            <hr />
        </div>
    )
}