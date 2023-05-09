from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from config import db, bcrypt

class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    serialize_rules = ('-user.id', '-client.id',)

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Float)
    pay_method = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))
    order_date = db.Column(db.DateTime, server_default = db.func.now())
    

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-orders',)

    id = db.Column(db.Integer, primary_key=True)
    f_name = db.Column(db.String, nullable=False)
    l_name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    password_confirmation = db.Column(db.String, nullable=False)

    orders = db.relationship('Order', backref='user')
    clients = association_proxy('orders', 'client')

    @validates('email')
    def validate_email(self, key, email):
        if '@' not in email:
            raise ValueError('Please enter full email')
        return email

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self.password_hash, password.encode('utf-8'))
    
    @staticmethod
    def simple_hash(input):
        return sum(bytearray(input, encoding='utf-8'))

class Client(db.Model, SerializerMixin):
    __tablename__ = 'clients'

    serialize_rules = ('-orders',)

    id = db.Column(db.Integer, primary_key=True)
    company = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)

    orders = db.relationship('Order', backref='client')
    users = association_proxy('orders', 'user')

class API(db.Model, SerializerMixin):
    __tablename__ = 'apis'

    id = db.Column(db.Integer, primary_key=True)
    chemical = db.Column(db.String, nullable=False)
    quantity = db.Column(db.String)
    price = db.Column(db.Float)

class CalendarEvent(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    date = db.Column(db.DateTime, server_default = db.func.now())
    time = db.Column(db.Time, nullable=False)
    notes = db.Column(db.String(250))
    
