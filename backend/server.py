from flask import Flask, request
import EventSQL 
import json
app = Flask(__name__)

db = EventSQL.Database(reset=True)

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
