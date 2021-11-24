import React from 'react';

export type ProfileProp = {
    name: string
}

function Profile({ name }: ProfileProp) {
    return (
        <div>
            <h4>Welcome user {name}</h4>
        </div>
    );
}

export default Profile;