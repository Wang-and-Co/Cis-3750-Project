from flask import Flask, request
import EventSQL 
import json
app = Flask(__name__)

db = EventSQL.Database(reset=True) 

# API Routes
@app.route('/events', methods=['GET', 'POST'])
def events():
    if request.method == 'GET':
        eventDictionary = db.get_events()
        return json.dumps(eventDictionary)
    else:
        eventInfo = request.get_json()
        db.add_event(eventInfo)
        return eventInfo



#connect.close()

    
