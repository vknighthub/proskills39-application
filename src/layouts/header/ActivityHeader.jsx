import React from 'react'
import CartButton from './CartButton';
import NotificationsButton from './NotificationsButton';

const ActivityHeader = () => {
    return (
        <div className="user-activity-buttons">
            <CartButton />
            <NotificationsButton />
        </div>
    )
}
export default ActivityHeader
