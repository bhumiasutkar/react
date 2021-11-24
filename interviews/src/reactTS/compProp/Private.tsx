import Login from './Login';
import React from 'react';
import { ProfileProp } from './Profile';

type PrivateProp = {
    isLoggin: boolean
    component: React.ComponentType<ProfileProp>
}

const Private = ({ isLoggin, component: Component }: PrivateProp) => {
    if (isLoggin) {
        return <Component name="Bhumi" />
    } else {
        return <Login />
    }
}

export default Private;