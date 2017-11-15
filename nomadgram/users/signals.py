from allauth.socialaccount.signals import pre_social_login
from django.dispatch import receiver
from io import BytesIO
from urllib.request import urlopen
from django.core.files import File




@receiver(pre_social_login)
def pre_social_login(request, sociallogin, **kwargs):
    user = sociallogin.user
    social_account = user.socialaccount_set.all()[0]
    uid = social_account.uid
    gender = social_account.extra_data.get('gender', None)
    user.gender = gender
    user.name = user.get_full_name()
    avatar = social_account.get_avatar_url()
    avatar_image = urlopen(avatar)
    io = BytesIO(avatar_image.read())
    user.profile_image.save('{}.jpg'.format(uid), File(io))
    user.save()
