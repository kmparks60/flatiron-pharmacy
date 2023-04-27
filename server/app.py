from flask import Flask, request, make_response, jsonify, session, flash
from flask_restful import Resource 
from sqlalchemy.exc import IntegrityError

from config import app, db, api, bcrypt
from models import Order, User, Client

class Home(Resource):
    def get(self):
        return 'HomePage'
        
api.add_resource(Home, '/')

class Orders(Resource):
    def get(self):
        o_list = []
        for o in Order.query.all():
            o_dict = {
                'id': o.id,
                'price': o.price,
                'user_id': o.user_id,
                'client_id': o.client_id,
                'order_date': o.order_date
            }
            o_list.append(o_dict)
        return make_response(o_list, 200) 

api.add_resource(Orders, '/orders')   

class GetOrdersById(Resource):
    def get(self, id):
        o_instace = Order.query.filter_by(id=id).first()
        if o_instace == None:
            return make_response({'Error': 'Order Not Found'}, 404)
        return make_response(o_instace.to_dict(), 200)

api.add_resource(GetOrdersById, '/orders/<int:id>')
class Users(Resource):
    def get(self):
        u_list = []
        for u in User.query.all():
            u_dict = {
                'id': u.id,
                'f_name': u.f_name,
                'l_name': u.l_name
            }
            u_list.append(u_dict)
        return make_response(u_list, 200)
    
api.add_resource(Users, '/users')    

class SignUp(Resource):
    def post(self):
        f_name = request.json['f_name']
        l_name = request.json['l_name']
        email = request.json['email']
        password = request.json['password']
        password_confirmation = request.json['password_confirmation']

        user_exists = User.query.filter(User.email == email).first() is not None

        if user_exists:
            return jsonify({'Error': 'User Already Exixts'}, 409)
        
        hashed_password = bcrypt.generate_passsword_hash(password)
        hashed_password_confirmed= bcrypt.generate_password_hash(password_confirmation)
        new_user = User(
            email=email,
            _password_hash_=hashed_password,
            password_confirmation=hashed_password_confirmed,
            f_name=f_name,
            l_name=l_name
        ) 
        db.session.add(new_user)
        db.session.commit()
        return jsonify({
            'id': new_user.id,
            'email': new_user.email
        })

class Login(Resource):
    def post(self):
        email = request.get_json().get('email')
        password = request.get_json().get('password')
        user = User.query.filter(User.email == email).first()

        if user == None:
            return make_response({'Error': "Invalid email or password"}, 401)
        if not bcrypt.check_password_hash(user._password_hash, password):
            return make_response({"Error": "Invalid email or password"}, 401)
        
        flash('Login Successful!')
        session.permanent = True
        session['fan_id'] = user.id
        return jsonify({
            'id': user.id,
            'email': user.email,
            'f_name': user.f_name
        })

class LogOut(Resource):
    def delete(self):
        session.pop('user_id', None)
        return make_response({}, 204)
    
class CheckSession(Resource):
    def get(self):
        user_id = session['user_id']
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return make_response(user.to_dict(), 200)
        return make_response({}, 401)    
    
class ClearSession(Resource):
    def delete(self):
        session['page_views']=None
        session['user_id']=None

        return make_response({}, 204)

class GetUsersById(Resource):
    def get(self, id):
        u_instace = User.query.filter_by(id=id).first()
        if u_instace == None:
            return make_response({'Error': 'User Not Found'}, 404)
        return make_response(u_instace.to_dict(), 200)

api.add_resource(GetUsersById, '/users/<int:id>')

class Clients(Resource):
    def get(self):
        c_list = []
        for c in User.query.all():
            c_dict = {
                'id': c.id,
                'f_name': c.f_name,
                'l_name': c.l_name
            }
            c_list.append(c_dict)
        return make_response(c_list, 200)
    
api.add_resource(Clients, '/clients')

class GetClientsById(Resource):
    def get(self, id):
        c_instace = Client.query.filter_by(id=id).first()
        if c_instace == None:
            return make_response({'Error': 'Client Not Found'}, 404)
        return make_response(c_instace.to_dict(), 200)

api.add_resource(GetClientsById, '/clients/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)