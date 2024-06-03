from flask import Flask, Blueprint
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager 
from flask_bcrypt import Bcrypt  
import os
from models import db
from mpesa import mpesa_bp
from Auth import auth_bp
from routes.users import user_bp
from serializer import serializer_bp
from routes.task_bp import task_bp
from routes.payment_bp import payment_bp
from routes.ErrandBoy_bp import errand_boy_bp
from routes.message import message_bp
from routes.category import category_bp
from routes.notification import notification_bp
from routes.rating import rating_bp
from routes.availability import availability_bp
from routes.history import history_bp

jwt = JWTManager()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)    
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@hostname/sunset_barbers'
    app.config['SECRET_KEY'] = b"\x06F\x14\x91\xba\xdc\x9a\x96g'\xc7\xb0"
    
    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    migrate = Migrate(app, db)

    app.register_blueprint(auth_bp)
    app.register_blueprint(mpesa_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(serializer_bp)
    app.register_blueprint(task_bp)
    app.register_blueprint(payment_bp)
    app.register_blueprint(errand_boy_bp)
    app.register_blueprint(message_bp)
    app.register_blueprint(category_bp)
    app.register_blueprint(notification_bp)
    app.register_blueprint(rating_bp)
    app.register_blueprint(availability_bp)
    app.register_blueprint(history_bp)
    CORS(app, resources={r"*": {"origins": "*"}})
    
    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5555)