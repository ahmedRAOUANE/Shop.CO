import { Comment } from '@/utils/types';

import Comments from './Comments';
import { getComments } from '@/utils/getData';

const HappyUsersComments = async () => {
    const comments: Comment[] = await getComments();

    return (
        <section className='happy-custommers box column container '>
            <Comments comments={comments} title='our happy custommers' />
        </section>
    )
}

export default HappyUsersComments

