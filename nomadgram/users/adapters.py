from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter


class AccountAdapter(DefaultAccountAdapter):
    def is_open_for_signup(self, request):
        return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)

    def save_user(self, request, user, form):
        if len(user.socialaccount_set.all()) == 0:
            name = request.data.get('name', None)
            email = request.data.get('email', None)
            username = request.data.get('username', None)
            password1 = request.data.get('password1', None)
            password2 = request.data.get('password2', None)
            user.name = name
            user.email = email
            user.username = username
            if(password1 == password2):
                user.set_password(password1)
            user.save()


class SocialAccountAdapter(DefaultSocialAccountAdapter):
    def is_open_for_signup(self, request, sociallogin):
        return getattr(settings, 'ACCOUNT_ALLOW_REGISTRATION', True)
