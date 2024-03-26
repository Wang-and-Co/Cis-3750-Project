from flask import Flask, request
from flask_cors import CORS 
import comboSql as comboSql 
import json
app = Flask(__name__)
CORS(app)

db = comboSql.Database(reset=True)
db.__setitem__("EventBookings", (1, 2, "Attendee"))
db.__setitem__("EventBookings", (4, 2, "Volunteer"))
db.__setitem__("EventBookings", (2, 3, "Volunteer"))

db.add_event({'title': "Jackbox Gaming Night", 'startTime': 1711823400000, 'endTime': 1711827000000, 'location': "24 Kortright Rd E--Guelph--Ontario--N1G 4C9--odo", 'description': "Come join us for a fun and interactive game of Jackbox. We hope to provide a safe and social enviroment for you to make new friends and have some laughs!", 'maxAttendees': 10, 'maxVolunteers': 1, 'wellnessType': "social", 'isOnline': True, 'organizer_id': 5, 'cost': 0, 'image': "https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1"})
#db.add_event({'title': "Among Us Mondays (Sus Version)", 'startTime': 1711823400000, 'endTime': 1711827000000, 'location': "24 Kortright Rd E--Guelph--Ontario--N1G 4C9--odo", 'description': "Come join us for a fun and interactive game of Jackbox. We hope to provide a safe and social enviroment for you to make new friends and have some laughs!", 'maxAttendees': 10, 'maxVolunteers': 1, 'wellnessType': "social", 'isOnline': True, 'organizer_id': 5, 'cost': 0, 'image': "https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1"})



# API Routes
@app.route('/events', methods=['GET', 'POST'])
def events():
    if request.method == 'GET':

        userBookings = None
        userID = request.args.get('id')

        #print(userID)
        if(userID != None):
            userBookings = db.select_booking(userID)
        else:
            userBookings = (2000000, 200000000, "invalidValue")

        eventValues = db.get_events()
        eventInfo = []
        
        registrationValue = None


        for i in range(0, len(eventValues)):
            for j in range(0, len(userBookings)-1):
                if userBookings[j][0] == eventValues[j][0]:
                    registrationValue =  userBookings[i][2]

            eventInfo.append({
                "id": eventValues[i][0], 
                "title": eventValues[i][1], 
                "startTime": eventValues[i][2], 
                "endTime": eventValues[i][3], 
                "location": eventValues[i][4], 
                "description": eventValues[i][5], 
                "maxAttendees": eventValues[i][6],
                "maxVolunteers": eventValues[i][7],
                "wellnessType": eventValues[i][8],
                "isOnline": eventValues[i][9],
                "organizer_id": eventValues[i][10],
                "cost": eventValues[i][11],
                "image": eventValues[i][12],
                "registrationType": registrationValue
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
        db['EventBookings'] = (bookingInfo['event_id'], bookingInfo['user_id'],
                                                        bookingInfo['type'])
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