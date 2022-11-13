import React from 'react';
import { ChannelContext, UserContext } from '../../../App';

export const Component_F = () => {
    return (
        <div>
            <UserContext.Consumer>

                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    chann => {
                                        return <div> User Context value {user} {chann}</div>
                                    }

                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }

            </UserContext.Consumer >
        </div >
    )
}
