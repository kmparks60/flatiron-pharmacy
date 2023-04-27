from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, Order, User, Client


db.session.add_all(Orders)
db.session.add_all(Users)
db.session.add_all(Clients)
db.session.commit()

print('Seeding Successful!')