import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated && (
                <article className='user-profile'>
                    <h1>Profile</h1>
                    <div className='profile-info-container'>
                        <div className='profile-info-content'>
                            <img src={user.picture} alt={user.name}/>
                            <h3>First name: {user.given_name} </h3>
                            <h3>Surname : {user.family_name} </h3>
                            <h3>Email : {user.email}</h3>
                        </div>
                    </div>
                </article>
            )}
        </>
    );
}

export default Profile;
