import requests
import json
import time
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(to=user)

        serializer = serializers.NotificationSerializer(
            notifications, many=True, context={'request': request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)


def create_notification(creator, to, notification_type, image=None, comment=None):

    notification = models.Notification.objects.create(
        creator=creator,
        to=to,
        notification_type=notification_type,
        image=image,
        comment=comment
    )

    time.sleep(10)

    notification.save()

    action = ''

    if notification_type == 'like':

        action = 'liked your photo'
    
    elif notification_type == 'comment':

        action = 'commented on your photo'
    
    elif notification_type == 'follow':

        action = 'followed you'
        

    url = "https://exp.host/--/api/v2/push/send"
    data = {
        "to": creator.push_token,
        "sound": "default",
        "body": f'Somebody {action}',
        "badge": 1
    }
    headers = {'Content-type': 'application/json',
               'Accept': 'application/json', 'Accept-Encoding': 'gzip, deflate'}

    request = requests.post(url, data=json.dumps(data), headers=headers)

    print(request.json())
