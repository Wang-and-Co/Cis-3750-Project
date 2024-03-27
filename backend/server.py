from flask import Flask, request, abort
from flask_cors import CORS 
import comboSql as comboSql 
import json
app = Flask(__name__)
CORS(app)

db = comboSql.Database(reset=True)
db.__setitem__("EventBookings", (1, 2, "Attendee"))
db.__setitem__("EventBookings", (4, 2, "Volunteer"))
db.__setitem__("EventBookings", (2, 3, "Volunteer"))

db.add_event({'title': "Jackbox Gaming Night", 'startTime': 1711823400000, 'endTime': 1711827000000, 'location': "24 Kortright Rd E--Guelph--Ontario--N1G 4C9--odo", 'description': "Come join us for a fun and interactive game of Jackbox. We hope to provide a safe and social enviroment for you to make new friends and have some laughs!", 'maxAttendees': 10, 'maxVolunteers': 0, 'wellnessType': "social", 'isOnline': True, 'organizer_id': 2, 'cost': 0, 'image': "jackbox.png"})
db.add_event({'title': "Among Us Philosophical Discussion", 'startTime': 1711846800000, 'endTime': 1711854000000, 'location': "25 Island of Greece St W--Toronto--Ontario--N6B 3S1--odo", 'description': "Join us in a heated discussion on the hit game AmongUs. We wish to delve into the intricies of the game and want you to help us.", 'maxAttendees': 50, 'maxVolunteers': 2, 'wellnessType': "social", 'isOnline': True, 'organizer_id': 2, 'cost': 2, 'image': "amongUsFungle.png"})
db.add_event({'title': "Learning Programming: Scratch", 'startTime': 1713189600000, 'endTime': 1713236400000, 'location': "45 Trent Ln Rd N--Guelph--Ontario--N6B 3S1--odo", 'description': "Excited to enter the field of Computer Science? Come join us at Johnston Hall for your first ever coding lesson in Scratch!", 'maxAttendees': 30, 'maxVolunteers': 10, 'wellnessType': "intellectual", 'isOnline': True, 'organizer_id': 2, 'cost': 15, 'image': "scratch.png"})
db.add_event({'title': "Dodgeball Intramurals", 'startTime': 1712165400000, 'endTime': 1712172600000, 'location': "50 E Ring Rd--Guelph--Ontario--N6B 3S1--odo", 'description': "Want a way to get active while also having fun? Come down to the Athletics Center and join us for some all ages DodgeBall! Everyone is welcome, let's see who's the best!", 'maxAttendees': 50, 'maxVolunteers': 5, 'wellnessType': "intellectual", 'isOnline': True, 'organizer_id': 2, 'cost': 0, 'image': "dodgeball.jpg"})
db.add_event({
    "title": "Guelph Grotto Dyno Competition",
    "description": "Experience the adrenaline rush at the Guelph Grotto Dyno Competition! Held at The Grotto, climbers of all levels compete in leaping from hold to hold, showcasing agility and strength. Set against thrilling routes, it's a must-see event in Guelph's climbing scene, promising excitement and camaraderie.",
    "wellnessType": "physical",
    "maxAttendees": "100",
    "maxVolunteers": "5",
    "startTime": 1713016800000,
    "endTime": 1713038400000,
    "isOnline": False,
    "location": "199 Victoria Rd S--Guelph--ON--N1E 6T9--",
    "cost": 4000,
    "image": "https://cdn.walltopia.com/wp-content/uploads/20231027210617/IMG_1770-11-500x280.jpg",
    "organizer_id": 1
})
db.add_event({
    "title": "Mindfulness Meditation Workshop",
    "description": "Dive into the practice of mindfulness with our immersive workshop. Learn techniques to cultivate present-moment awareness and foster a sense of inner calm. Led by seasoned meditation teachers, this workshop offers practical tools for reducing stress and enhancing mental clarity.",
    "wellnessType": "mental",
    "maxAttendees": "30",
    "maxVolunteers": "2",
    "startTime": 1760544000000,
    "endTime": 1760558400000,
    "isOnline": False,
    "location": "University Center--Guelph--ON--N1G 1Y4--UC225",
    "cost": 30,
    "image": "https://www.vmcdn.ca/f/files/villagelife/images/health-and-wellness/meditating/adobestock_178183149.jpeg;w=960",
    "organizer_id": 1
})

#Intializing certain values into the database:
db['Accounts'] = (None, "dwang@gmail.com","securePassword","Daniel","Wang")
db['Accounts'] = (None, "ksuthan@gmail.com","notPassword","Kirisan","Suthanthireswaran")
db['Accounts'] = (None, "bryanWang@gmail.com","password","Bryan","Wang")






# API Routes
@app.route('/events', methods=['GET', 'POST', 'DELETE'])
def events():
    if request.method == 'GET':
        userBookings = None
        userID = request.args.get('id')
        check = 0

        #print(userID)
        if(userID != None):
            userBookings = db.select_booking(userID)
        else:
            check = 1

        if len(request.args) == 1:
            keyword = request.args.get('name')
            if userID == None and keyword:
                eventValues = db.search_events(keyword)
            elif keyword == None and userID:
                eventValues = db.get_events()
        elif len(request.args) == 2:
            keyword = request.args.get('name')
            if keyword and keyword != '':
                eventValues = db.search_events(keyword)
            else:
                eventValues = db.get_events()
        else:
            eventValues = db.get_events()
        eventInfo = []
        registrationValue = None

        for i in range(0, len(eventValues)):
            if check == 0:
                for bookings in userBookings:
                    if bookings[0] == eventValues[i][0]:
                        registrationValue = bookings[2]

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
                "imageUri": eventValues[i][14],
                "registrationType": registrationValue
            })
            registrationValue = None
        
        return json.dumps(eventInfo)
    elif request.method == 'DELETE':
        eventID = request.args.get('id')
        deleteCheck = db.delete_event(eventID)
        
        if deleteCheck:
            return json.dumps(True)
        else:
            abort(404)
    else:
        eventInfo = request.get_json()
        eventID = db.add_event(eventInfo)
        
        idInfo = {'id': eventID}
        return json.dumps(idInfo)


@app.route('/eventBooking', methods=['GET', 'POST', 'DELETE'])
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
    
    elif request.method == "DELETE":

        userID = request.args.get('userID')
        eventID = request.args.get('eventID')
        print("userID", userID)
        print("eventID", eventID)
        checkDelete = db.delete_booking(userID, eventID)

        if checkDelete:
            return json.dumps(True)
        else:
            abort(404)
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
        print("Is this getting run")
        db['Accounts'] = (None, accountInfo['email'], accountInfo['password'],
                                accountInfo['fname'], accountInfo['lname'])
        
        userCredentials = db.select_account({'email': accountInfo['email'], 'password': accountInfo['password']})

        loginInfo = {
                'id' : userCredentials[0],
                'fname' : userCredentials[1],
                'lname' : userCredentials[2],
        }

        print(loginInfo)

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