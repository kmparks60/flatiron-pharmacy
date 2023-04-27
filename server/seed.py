from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, Order, User, Client

with app.app_context():

    print('Creating User...')

    u1 = User(f_name='Julianne', l_name='Ilaria-Parks')

    users = [u1]

    print('Creating Client...')

    c1 = Client(f_name='Ken', l_name='Parks',
                city='Boonton', state='New Jersey')
    
    clients = [c1]

    print('Creating Orders...')

    o1 = Order(price=1014.89, user_id=1, client_id=1)

    orders = [o1]
    db.session.add_all(orders)
    db.session.add_all(users)
    db.session.add_all(clients)
    db.session.commit()

    print('Seeding Successful!')