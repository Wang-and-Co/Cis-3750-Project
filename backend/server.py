from flask import Flask, request
import EventSQL 
app = Flask(__name__)

db = EventSQL.Database(reset=True) 

# API Routes
@app.route('/events', methods=['GET', 'POST'])
def get_events():
    someData = request.get_json()
    return {'Hello' : 5}




#connect.close()

    
