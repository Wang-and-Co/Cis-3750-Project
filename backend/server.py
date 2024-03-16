from flask import Flask, request
import sqlite3

app = Flask(__name__)

connect = sqlite3.connect('database.db')

with open('schema.sql') as f:
    connect.executescript(f.read())

cur = connect.cursor()

# API Routes
@app.route('/events', methods=['GET'])
def get_events():
    cur.execute("SELECT * FROM Events").fetchall()



connect.close()

    
