
import { Notifications, Permissions } from 'expo';
import StorageService from './StorageService';

class NotificationService {

    static _instance = null;

    constructor() {
    }

    static getInstance() {
        if (this._instance == null) {
            this._instance = new NotificationService();
        }
        return this._instance;
    }

    getNotification(title, body) {
        return {
            title,
            body,
            ios: {
                sound: true,
            },
            android: {
                sound: true,
                priority: 'high',
                sticky: false,
                vibrate: true,
            }
        }
    }

    rescheduleLocalNotification() {
        return new Promise((resolve, reject) => {

            //get the already stored info
            StorageService.getInstance().getLocalNotification()
                .then(notification => {

                    //if empty object means no notification enabled
                    if (Object.keys(notification).length > 0) {
                        const { title, body, hours, minutes } = notification;

                        //setting as new notification, delays the current notification for a new date
                        this.setLocalNotification(title, body, hours, minutes)
                            .then(() => {
                                resolve();
                            }).catch(err => {
                                reject(err)
                            });
                    } else {
                        resolve();
                    }

                }).catch(err => {
                    reject(err)
                });
        });

    }

    setLocalNotification(title, body, hours, minutes) {
        return new Promise((resolve, reject) => {
            //ask for permissions
            Permissions.askAsync(Permissions.NOTIFICATIONS)
                .then(({ status }) => {

                    //workaround for simulator
                    //https://github.com/expo/expo/issues/516
                    if (status === 'granted' || status === 'undetermined') {

                        //Remove previous scheduled
                        Notifications.cancelAllScheduledNotificationsAsync().then(() => {

                            //Create date
                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(hours);
                            tomorrow.setMinutes(minutes);

                            //Set the notification
                            Notifications.scheduleLocalNotificationAsync(
                                this.getNotification(title, body),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            )
                                .then(() => {

                                    let notification = {
                                        title,
                                        body,
                                        hours,
                                        minutes,
                                    };

                                    //Once schedule, stored
                                    StorageService.getInstance().setLocalNotification(notification)
                                        .then(() => {
                                            return resolve(notification);
                                        }).catch(err => {
                                            console.warn(err);
                                            return reject(err);
                                        });

                                })
                                .catch(err => {
                                    console.warn(err);
                                    return reject(err);
                                });
                        }).catch(err => {
                            console.warn(err);
                            return reject(err);
                        });
                    }
                })
                .catch(err => {
                    console.warn(err);
                    return reject(err);
                });
        });
    }

    clearLocalNotification() {
        return new Promise((resolve, reject) => {
            //delete from storage
            StorageService.getInstance().clearLocalNotification()
                .then(() => {

                    //delete from schedule
                    Notifications.cancelAllScheduledNotificationsAsync()
                        .then(() => {

                            //TODO: delete form storage
                            StorageService.getInstance().clearLocalNotification()
                                .then(() => {
                                    return resolve({});
                                })
                                .catch(err => {
                                    console.warn(err);
                                    return reject(err);
                                });

                        })
                        .catch(err => {
                            console.warn(err);
                            return reject(err);
                        });
                })
                .catch(err => {
                    console.warn(err);
                    return reject(err);
                });
        });
    }

}
export default NotificationService;