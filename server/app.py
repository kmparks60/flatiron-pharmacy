from flask import Flask, request, make_response, jsonify, session, flash
from flask_restful import Resource 

from config import app, db, api, bcrypt
from models import Order, User, Client, API, CalendarEvent

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
                'pay_method': o.pay_method,
                'user_id': o.user_id,
                'client_id': o.client_id,
                'order_date': o.order_date
            }
            o_list.append(o_dict)
        return make_response(o_list, 200) 
    
    def post(self):
        data = request.get_json()
        order = Order(price = data['price'],
                    pay_method = data['pay_method'],
                    user_id = data['user_id'],
                    client_id = data['client_id']
                    )
        db.session.add(order)
        db.session.commit()
        return make_response(order.to_dict(), 201)

api.add_resource(Orders, '/orders')   

class GetOrdersById(Resource):
    def get(self, id):
        o_instace = Order.query.filter_by(id=id).first()
        if o_instace == None:
            return make_response({'Error': 'Order Not Found'}, 404)
        return make_response(o_instace.to_dict(), 200)
    
    def delete(self, id):
        o_instance = Order.query.filter_by(id=id).first()
        if o_instance == None:
            return make_response({'Error': 'Order not found'}, 404)
        db.session.delete(o_instance)
        db.session.commit()
        return make_response({}, 204)

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
        email = request.json['email']
        password = request.json['password']
        password_confirmation = request.json['password_confirmation']
        firstname = request.json['f_name']
        lastname = request.json['l_name']

        user_exists = User.query.filter(User.email == email).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password)
        hashed_password_confirmation = bcrypt.generate_password_hash(password_confirmation)
        new_user = User(
            email=email,
            _password_hash=hashed_password,
            password_confirmation = hashed_password_confirmation,
            f_name=firstname,
            l_name=lastname
            )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({
            "id": new_user.id,
            "email": new_user.email
        })
    
api.add_resource(SignUp, '/signup', endpoint='signup')

class Login(Resource):
    def post(self):
        email = request.get_json().get('email')
        password = request.get_json().get('password')
        user = User.query.filter(User.email == email).first()

        if user is None:
            return {'error': 'Invalid email or password'}, 401
        if not bcrypt.check_password_hash(user._password_hash, password):
            return {'error': 'Invalid email or password'}, 401

        flash("Login Successful!")
        session.permanent = True
        session['user_id'] = user.id
        return jsonify({
            "id": user.id,
            "email": user.email,
            "f_name": user.f_name
        })

api.add_resource(Login, '/login', endpoint='login')

class Logout(Resource):
    def delete(self):
        session.pop('user_id', None)

        return make_response({}, 204)
    
api.add_resource(Logout, '/logout', endpoint='logout')

class CheckSession(Resource):

    def get(self):

        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict(), 200

        return make_response({}, 401)
    
api.add_resource(CheckSession, '/checksession', endpoint='checksession')
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
        for c in Client.query.all():
            c_dict = {
                'id': c.id,
                'company': c.company,
                'address': c.address,
                'city': c.city,
                'state': c.state,
                'zipcode': c.zipcode,
                'country': c.country
            }
            c_list.append(c_dict)
        return make_response(c_list, 200)

    def post(self):
        data = request.get_json()
        client = Client(company = data['company'],
                        address = data['address'],
                        city = data['city'],
                        state = data['state'],
                        zipcode = data['zipcode'],
                        country = data['country']
                        )
        db.session.add(client)
        db.session.commit()
        return make_response(client.to_dict(), 201)
    
api.add_resource(Clients, '/clients')

class GetClientsById(Resource):
    def get(self, id):
        c_instace = Client.query.filter_by(id=id).first()
        if c_instace == None:
            return make_response({'Error': 'Client Not Found'}, 404)
        return make_response(c_instace.to_dict(), 200)
    
    def patch(self, id):
        c = Client.query.filter_by(id=id).first()
        if c == None:
            return make_response({'error': 'Client not found'}, 404)
        data = request.get_json()
        for key in data.keys():
            setattr(c, key, data[key])
        db.session.add(c)
        db.session.commit()
        return make_response(c.to_dict(), 200)
    
    def delete(self, id):
        c_instance = Client.query.filter_by(id=id).first()
        if c_instance == None:
            return make_response({'Error': 'Client not found'}, 404)
        db.session.delete(c_instance)
        db.session.commit()
        return make_response({}, 204)

api.add_resource(GetClientsById, '/clients/<int:id>')

class APIS(Resource):
    def get(self):
        a_list = []
        for a in API.query.all():
            a_dict = {
                'id': a.id,
                'chemical': a.chemical,
                'quantity': a.quantity,
                'price': a.price
            }
            a_list.append(a_dict)
        return make_response(a_list, 200)
    
    def post(self):
        data = request.get_json()
        api = API(chemical = data['chemical'],
                quantity = data['quantity'],
                price = data['price']
                )
        db.session.add(api)
        db.session.commit()
        return make_response(api.to_dict(), 201)
    
api.add_resource(APIS, '/apis')

class GetApisById(Resource):
    def get(self, id):
        a_instace = API.query.filter_by(id=id).first()
        if a_instace == None:
            return make_response({'Error': 'API Not Found'}, 404)
        return make_response(a_instace.to_dict(), 200)
    
    def delete(self, id):
        a_instance = API.query.filter_by(id=id).first()
        if a_instance == None:
            return make_response({'Error': 'API not found'}, 404)
        db.session.delete(a_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(GetApisById, '/apis/<int:id>')

class CalendarEvents(Resource):
    def get(self):
        e_list = []
        for e in CalendarEvent.query.all():
            e_dict = {
                'id': e.id,
                'title': e.title,
                'date': e.date,
                'time': e.time,
                'notes': e.notes                
            }
            e_list.append(e_dict)
        return make_response(e_list, 200)
    
    def post(self):
        data = request.get_json()
        event = CalendarEvent(title = data['title'],
                            date = data['date'],
                            time = data['time'],
                            notes = data['notes']
                            )
        db.session.add(event)
        db.session.commit()
        return make_response(event.to_dict(), 201)
    
api.add_resource(CalendarEvents, '/events')

class GetCalenderEventsById(Resource):
    def get(self, id):
        e_instace = CalendarEvent.query.filter_by(id=id).first()
        if e_instace == None:
            return make_response({'Error': 'Event Not Found'}, 404)
        return make_response(e_instace.to_dict(), 200)
    
    def delete(self, id):
        e_instance = CalendarEvent.query.filter_by(id=id).first()
        if e_instance == None:
            return make_response({'Error': 'Event not found'}, 404)
        db.session.delete(e_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(GetCalenderEventsById, '/events/<int:id>')



if __name__ == '__main__':
    app.run(port=5555, debug=True)