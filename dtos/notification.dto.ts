export type NotificationType = 'info' | 'error' | 'success' | 'warning';

export interface NotificationDTO {
    id: string;
    accountId: string | null;
    videoId: string | null;
    videoVerId: string | null;
    type: NotificationType;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

export type AccountNotificationDTO = NotificationDTO;
