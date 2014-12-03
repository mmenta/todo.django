from django.contrib.auth.models import User
from tastypie import fields
from tastypie.authorization import DjangoAuthorization
from tastypie.authentication import BasicAuthentication
from tastypie.resources import ModelResource
from tastypie.constants import ALL

from todo.models import Todo


class TodoResource(ModelResource):
    class Meta:
        queryset = Todo.objects.all()
        resource_name = 'todo'
        filtering = { "title" : ALL }
        authentication = BasicAuthentication()
        authorization = DjangoAuthorization()