from flask import Blueprint, current_app, make_response, jsonify
from flask_marshmallow import Marshmallow
from flask_restful import Resource, Api, reqparse, abort
from flask_bcrypt import Bcrypt
from models import User,Message,Task,ErrandBoy,Payment,Rating,Category,Notification, Availability,History
from marshmallow_sqlalchemy import auto_field, SQLAlchemyAutoSchema, SQLAlchemySchema, fields
from marshmallow.fields import Nested