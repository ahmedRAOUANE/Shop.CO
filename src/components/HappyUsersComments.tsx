import { Comment } from '@/utils/types';

import Comments from './Comments';

const HappyUsersComments = async () => {
    // dummy comments from jsonplaceholder api
    const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
    const comments: Comment[] = await res.json();

    return (
        <section className='happy-custommers box column container '>
            <Comments comments={comments} />
        </section>
    )
}

export default HappyUsersComments

