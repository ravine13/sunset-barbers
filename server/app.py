from flask import Flask
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL
import os
from dotenv import load_dotenv  


load_dotenv()

jwt = JWTManager()
bcrypt = Bcrypt()
ma = Marshmallow()

def create_app():
    app = Flask(__name__)    

    app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
    app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
    app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
    app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')


    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)
    migrate = Migrate(app, db)
    mysql = MySQL(app)
    CORS(app, resources={r"*": {"origins": "*"}})

    app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(serializer_bp)
    app.register_blueprint(task_bp)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5555)
