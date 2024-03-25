import css from './Profile.module.css'
import PropTypes from 'prop-types';

function Profile({ name, tag, location, avatar, stats }) {
    return (
        <>
            <div className={css.container}>
                <div className={css.infoContainer}>
                    <img
                        className={css.infoContainer__profilePic}
                        src={avatar}
                        alt="User avatar"
                        width={200}
                        height={200}
                    />
                    <p className={css.infoContainer__item}>{name}</p>
                    <p className={css.infoContainer__item}>{tag}</p>
                    <p className={css.infoContainer__item}>{location}</p>
                </div>

                <ul className={css.statsList}>
                    <li className={css.statsList__item}>
                        <span className={css.statsList__txt}>Followers</span>
                        <span className={css.statsList__txt}>{stats.followers}</span>
                    </li>
                    <li className={css.statsList__item}>
                        <span className={css.statsList__txt}>Views</span>
                        <span className={css.statsList__txt}>{stats.views}</span>
                    </li>
                    <li className={css.statsList__item}>
                        <span className={css.statsList__txt}>Likes</span>
                        <span className={css.statsList__txt}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

Profile.propType = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.string,
        views: PropTypes.string,
        likes: PropTypes.string
    })
}

export default Profile