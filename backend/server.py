from flask import Flask, request
from flask_cors import CORS 
import comboSql as comboSql 
import json
app = Flask(__name__)
CORS(app)

db = comboSql.Database(reset=True)

# API Routes
@app.route('/events', methods=['GET', 'POST'])
def events():
    if request.method == 'GET':
        eventValues = db.get_events()
        eventInfo = []

        for i in range(0, len(eventValues)):
            eventInfo.append({
                "id": eventValues[i][0], 
                "createdAt": eventValues[i][1], 
                "title": eventValues[i][2], 
                "startTime": eventValues[i][3], 
                "endTime": eventValues[i][4], 
                "location": eventValues[i][5], 
                "description": eventValues[i][6], 
                "maxAttendees": eventValues[i][7],
                "maxVolunteers": eventValues[i][8],
                "cost": eventValues[i][9],
                "image": eventValues[i][10]
            })
             
        return json.dumps(eventInfo)
    else:
        eventInfo = request.get_json()
        db.add_event(eventInfo)
        return eventInfo



@app.route('/eventBooking', methods=['POST','GET'])
def booking():

    if request.method == "GET":

        userID = request.args.get('id')

        #db['EventBookings'] = (1, 2, "Volunteers")

        table = db.select_booking(userID)
        return (json.dumps(table))
    
    else:
        print("Not implement yet")


@app.route('/createAccount', methods=['POST'])
def createAccount():
    if request.method == 'POST':
        accountInfo = request.get_json()
        db['Accounts'] = (None, accountInfo['email'], accountInfo['password'],
                                accountInfo['fname'], accountInfo['lname'])
        
        #For sake of minimum viable product, just returning one here to signify succesfull account registration
        return json.dumps(1)
    

@app.route('/login', methods=['POST'])
def login():

    if request.method == 'POST':

        #Hardcoded Testing info: Kept for future testing
        #db['Accounts'] = (None, "sussy@gmail.com","HiAll","Daniel","Wang")

        #need userid, fname, lastname
        userCredentials = request.get_json()
        table = db.select_account(userCredentials)

        return json.dumps(table)

        #mockLoginInfo = {"id": 123123, "email": "sus@balls.ca", "password": "among us"}
        #return json.dumps(mockLoginInfo)