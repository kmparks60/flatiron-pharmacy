from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, Order, Client, API

with app.app_context():

    

    print('Creating Clients...')

    c1 = Client(company='NJ Compounding', address='1 Avalon Way', 
                city='Boonton', state='New Jersey', 
                zipcode='07005', country='United States')
    
    c2 = Client(company="Chaney's Pharmacy", address='500 Bramlett Dr', 
                city='Oxford', state='Mississippi', 
                zipcode='38655', country='United States')
    
    c3 = Client(company="Rockaway Pharmacy & Compounding Center", address='760 US-46',
               city='Kenvil', state='New Jersey',
               zipcode='07847', country='United States')
    
    c4 = Client(company="Lakeside Speciality Pharmacy", address='480 River Hwy E',
               city='Mooresville', state='North Carolina',
               zipcode='28117', country='United States')
    
    c5 = Client(company="Professional Arts Pharmacy", address='3138 Rogers Ave',
               city='Ellicott City', state='Maryland',
               zipcode='21043', country='United States')
    
    c6 = Client(company="Lionville Natural Pharmacy", address='200 E Uwchlan Ave',
               city='Exton', state='Pennsylvania',
               zipcode='19341', country='United States')
    
    c7 = Client(company="Pavilion Compounding Pharmacy", address='3200 Downwood Cir NW',
               city='Atlanta', state='Georgia',
               zipcode='30327', country='United States')
    
    c8 = Client(company="Gary Drug Company", address='59 Charles St',
               city='Boston', state='Massachusetts',
               zipcode='02114', country='United States')
    
    c9 = Client(company="Consult Rx Pharmacy", address='1119 E Sunrise Blvd',
               city='Fort Lauderdale', state='Florida',
               zipcode='33304', country='United States')
    
    c10 = Client(company="New Drug Loft", address='1410 2nd Ave',
               city='New York', state='New York',
               zipcode='10021', country='United States')
    
    clients = [c1, c2, c3, c4, c5,
               c6, c7, c8, c9, c10]

    print('Creating Orders...')

    o1 = Order(price=1014.89, pay_method='VISA ....6189', user_id=1, client_id=1)
    o2 = Order(price=1942.56, pay_method='MC ....5828', user_id=1, client_id=3)
    o3 = Order(price=2573.89, pay_method='AMEX ....1008', user_id=1, client_id=5)
    o4 = Order(price=987.63, pay_method='VISA ....4513', user_id=1, client_id=9)
    o5 = Order(price=2223.89, pay_method='AMEX ....8972', user_id=1, client_id=10)
    o6 = Order(price=1013.46, pay_method='AMEX ....8972', user_id=1, client_id=10)
    o7 = Order(price=1978.56, pay_method='MC ....6298', user_id=1, client_id=2)
    o8 = Order(price=2001.23, pay_method='DC ....5543', user_id=1, client_id=8)
    o9 = Order(price=1789.65, pay_method='MC ....6617', user_id=1, client_id=4)
    o10 = Order(price=1874.25, pay_method='AMEX ....8891', user_id=1, client_id=6)
    o11 = Order(price=888.68, pay_method='VISA ....2698', user_id=1, client_id=7)
    o12 = Order(price=1390.00, pay_method='AMEX ....8972', user_id=1, client_id=10)
    o13 = Order(price=750.45, pay_method='VISA ....4513', user_id=1, client_id=9)
    o14 = Order(price=500.75, pay_method='MC ....6298', user_id=1, client_id=2)
    o15 = Order(price=3250.78, pay_method='MC ....5828', user_id=1, client_id=3)

    orders = [o1, o2, o3, o4, o5,
              o6, o7, o8, o9, o10,
              o11, o12, o13, o14, o15]

    print("Creating API's...")

    a1 = API(chemical='Methylene Blue', quantity='25g', price=363.02)
    a2 = API(chemical='Progesterone USP', quantity='25g', price=21.29)
    a3 = API(chemical='MicroCrystalline Cellulose NF', quantity='500g', price=26.28)
    a4 = API(chemical='Estriol USP', quantity='1g', price=17.65)
    a5 = API(chemical='Neltrexone Hydrochloride', quantity='1g', price=19.77)
    a6 = API(chemical='Clomiphene Citrate USP', quantity='25g', price=36.62)
    a7 = API(chemical='Thyroid USP Powder(Porcine)', quantity='5g', price=18.17)
    a8 = API(chemical='Potassium Bromide USP', quantity='500g', price=73.57)
    a9 = API(chemical='Cantharidin', quantity='100mg', price=37.62)
    a10 = API(chemical='Topiramate', quantity='25g', price=23.93)
    a11 = API(chemical='Podophyllum Resin USP', quantity='10g', price=56.23)
    a12 = API(chemical='Gabapentin', quantity='25g', price=11.57)
    a13 = API(chemical='Belladonna Extract USP Leaf Powder', quantity='25g', price=176.23)
    a14 = API(chemical='Cisapride Monohydrate USP', quantity='5g', price=32.68)
    a15 = API(chemical='Dehydroepiandrosterone Micronized (DHEA)', quantity='5mg', price=13.21)
    a16 = API(chemical='Liothyronine Sodium USP (T3)', quantity='250mg', price=29.00)
    a17 = API(chemical='Estradiol USP Micronized', quantity='1g', price=15.35)
    a18 = API(chemical='Oxytocin USP Powder', quantity='50mg', price=44.70)
    a19 = API(chemical='Ivermectin USP For Human Use', quantity='5mg', price=35.08)
    a20 = API(chemical='Papaverin Hydrochlroide USP', quantity='5g', price=14.58)
    a21 = API(chemical='Lidocaine USP', quantity='25g', price=9.68)
    a22 = API(chemical='Azelaic Acid', quantity='100g', price=70.70)
    a23 = API(chemical='Levothyroxine Sodium USP', quantity='250mg', price=22.88)
    a24 = API(chemical='Divutyl Squarate Liquid', quantity='1g', price=17.98)
    a25 = API(chemical='Tranexamic Acid', quantity='25g', price=15.72)
    a26 = API(chemical='Methylcobalamin', quantity='1g', price=23.20)
    a27 = API(chemical='Sodium Hyaluronate (Cosmetic Grade)', quantity='5g', price=23.04)
    a28 = API(chemical='Tetracaine USP', quantity='25g', price=20.33)
    a29 = API(chemical='Promethazine Hydrochlroide', quantity='25g', price=31.73)
    a30 = API(chemical='Calcium Carbonate USP Precipitated Light', quantity='500g', price=25.07)
    a31 = API(chemical='Alprostadil USP (Prostaglandin E1)', quantity='25mg', price=21.36)
    a32 = API(chemical='Amphotericin B USP (Oral Grade)', quantity='1g', price=11.39)
    a33 = API(chemical='Betahistine Dihydrochloride USP', quantity='5mg', price=15.72)
    a34 = API(chemical='Lovastatin USP', quantity='25g', price=35.86)
    a35 = API(chemical='Sertraline HCL USP', quantity='1g', price=21.79)
    a36 = API(chemical='Levocarnitine USP', quantity='25g', price=61.56)
    a37 = API(chemical='Estrone USP (E1)', quantity='1g', price=22.87)
    a38 = API(chemical='Benzocaine USP (Ethyl Amino Benzoate)', quantity='100g', price=23.57)
    a39 = API(chemical='Cyanocobalamin USP (Vitamin B12)', quantity='1g', price=15.60)
    a40 = API(chemical='Glycerin USP (Natural)', quantity='480mL', price=15.77)
    a41 = API(chemical='Nystatin USP', quantity='150mU', price=40.59)
    a42 = API(chemical='Omeprazole', quantity='5g', price=10.98)
    a43 = API(chemical='Azelastine Hydrochlroide', quantity='1g', price=41.63)

    apis = [a1, a2, a3, a4, a5, a6, a7,
            a8, a9, a10, a11, a12, a13,
            a14, a15, a16, a17, a18, a19,
            a20, a21, a22, a23, a24, a25,
            a26, a27, a28, a29, a30, a31,
            a32, a33, a34, a35, a36, a37,
            a38, a39, a40, a41, a42, a43]
    
    db.session.add_all(orders)
    db.session.add_all(clients)
    db.session.add_all(apis)
    db.session.commit()

    print('Seeding Successful!')