import css from './Friends.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const classNames = [css.containerList__onlineStatus];
    const statusText = isOnline ? 'Online' : 'Offline';
    isOnline ? classNames.push(css.online) : classNames.push(css.offline);

    return (
        <div className={css.containerList}>
            <img className={css.containerList__avatar} src={avatar} alt={name} width="102" height="72" />
            <p className={css.containerList__name}>{name}</p>
            <p className={classNames.join(' ')}>{statusText}</p>
        </div>
    )
}

FriendListItem.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem