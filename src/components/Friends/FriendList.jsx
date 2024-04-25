import css from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
    return (
        <>
            <ul className={css.list}>
                {friends.map((friend) => {
                    return (
                        < li className={css.listItem} key={friend.id} >
                            <FriendListItem friend={friend} />
                        </li>
                    )
                })}
            </ul >
        </>
    );
}

FriendList.propType = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default FriendList