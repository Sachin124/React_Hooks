import React, { useContext } from 'react'
import { ChannelContext, UserContext } from '../../../App'
import { Component_F } from './Component_F'

export const Component_E = () => {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>{user} - {channel}</div>
    )
}
