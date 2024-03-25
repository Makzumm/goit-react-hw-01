import css from './Friends.module.css';
import PropTypes from 'prop-types';

function Friends({ friends }) {
    return (
        <>
            <ul className={css.list}>
                {friends.map(({ avatar, name, isOnline, id }) => {

                    const classNames = [css.containerList__onlineStatus];
                    const statusText = isOnline ? 'Online' : 'Offline';
                    isOnline ? classNames.push(css.online) : classNames.push(css.offline);

                    return (
                        <li className={css.listItem} key={id}>
                            <div className={css.containerList}>
                                <img className={css.containerList__avatar} src={avatar} alt={name} width="102" height="72" />
                                <p className={css.containerList__name}>{name}</p>
                                <p className={classNames.join(' ')}>{statusText}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

Friends.propType = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired),
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}

export default Friends