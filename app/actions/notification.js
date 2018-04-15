import ServiceFacade from "../services/ServiceFacade";

export const NOTIFICATION_SET  = 'NOTIFICATION_SET';
export const notificationSet = (title, body, hours, minutes) => dispatch => {

    ServiceFacade.setLocalNotification(title, body, hours, minutes)
    .then(notification => {
        dispatch(notificationSetSync(notification));
    });

};

function notificationSetSync(notification) {
    return {
        type: NOTIFICATION_SET,
        notification,
    }
}

export const NOTIFICATION_CLEAR  = 'NOTIFICATION_CLEAR';
export const notificationClear = () => dispatch => {

    ServiceFacade.clearLocalNotification()
    .then(notification => {
        dispatch(notificationClearSync(notification));
    });

};

function notificationClearSync(notification) {
    return {
        type: NOTIFICATION_CLEAR,
        notification,
    }
}
