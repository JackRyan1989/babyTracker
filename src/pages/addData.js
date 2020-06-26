import React from 'react';
import MiniDrawer from '../components/sidebar';

export default function AddData(props) {
    const app = props.location.app;
    
    return (
        <>
            <MiniDrawer {...props} app={app}></MiniDrawer>
        </>
    )

};
