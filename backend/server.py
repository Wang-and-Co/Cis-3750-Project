from flask import Flask, request
from flask_cors import CORS 
import comboSql as comboSql 
import json
app = Flask(__name__)
CORS(app)

db = comboSql.Database(reset=True)

#Intializing certain values into the database:
db['Accounts'] = (None, "dwang@gmail.com","securePassword","Daniel","Wang")
db['Accounts'] = (None, "ksuthan@gmail.com","notPassword","Kirisan","Suthanthireswaran")
db['Accounts'] = (None, "bryanWang@gmail.com","password","Bryan","Wang")






# API Routes
@app.route('/events', methods=['GET', 'POST'])
def events():
    if request.method == 'GET':
        eventValues = db.get_events()
        eventInfo = []
        
        locationValues = locationValues.split("--")


        for i in range(0, len(eventValues)):
            eventInfo.append({
                "id": eventValues[i][0], 
                "title": eventValues[i][1], 
                "startTime": eventValues[i][2], 
                "endTime": eventValues[i][3], 
                "location": eventValues[i][4],
                "description": eventValues[i][5], 
                "attendees": {'current': eventValues[i][6], 'max': eventValues[i][8]},
                "volunteers":{'current': eventValues[i][7], 'max': eventValues[i][9]},
                "wellnessType": eventValues[i][10],
                "isOnline": eventValues[i][11],
                "organizer_id": eventValues[i][12],
                "cost": eventValues[i][13],
                "imageUri": eventValues[i][14]
            })
             
        return json.dumps(eventInfo) 
    else:
        eventInfo = request.get_json()
        eventID = db.add_event(eventInfo)
        
        idInfo = {'id': eventID}
        return json.dumps(idInfo)


@app.route('/eventBooking', methods=['POST','GET'])
def booking():

    # Retrieve all events that the user is assosiated with.
    if request.method == "GET":

        # db['EventBookings'] = (5, 1, "Volunteer")
        # db['EventBookings'] = (4, 1, "Volunteer")
        # db['EventBookings'] = (3, 1, "Organizer")
        # db['EventBookings'] = (2, 2, "Attendee")


        userID = request.args.get('id')
        table = db.select_booking(userID)
        eventBookings = []

        for i in range(0, len(table)):
            eventBookings.append({
                'event_id': table[i][0],
                'user_id': table[i][1],
                'type': table[i][2]
            })

        

        return (json.dumps(eventBookings))
    
    else:

        bookingInfo = request.get_json()
        db.add_booking(bookingInfo)
        #db['EventBookings'] = (bookingInfo['event_id'], bookingInfo['user_id'],
        #                                                bookingInfo['type'])
        return json.dumps(True)

@app.route('/createAccount', methods=['POST'])
def createAccount():
    if request.method == 'POST':
        accountInfo = request.get_json()
        db['Accounts'] = (None, accountInfo['email'], accountInfo['password'],
                                accountInfo['fname'], accountInfo['lname'])
        
        #For sake of minimum viable product, just returning one here to signify succesfull account registration
        userCredentials = db.select_account({'email': accountInfo['email'], 'password': accountInfo['password']})

        loginInfo = {
                'id' : userCredentials[0],
                'fname' : userCredentials[1],
                'lname' : userCredentials[2],
        }

        return json.dumps(loginInfo)
        # Return same as login for auto signing them in once account created 

@app.route('/login', methods=['POST'])
def login():

    if request.method == 'POST':

        #Hardcoded Testing info: Kept for future testing
        #db['Accounts'] = (None, "sussy@gmail.com","HiAll","Daniel","Wang")

        userCredentials = request.get_json()
        table = db.select_account(userCredentials)

        loginInfo = {
                'id' : table[0],
                'fname' : table[1],
                'lname' : table[2],
        }

        return json.dumps(loginInfo)