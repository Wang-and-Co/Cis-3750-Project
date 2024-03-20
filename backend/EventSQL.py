import sqlite3;
import os;

class Database(): 

    def __init__(self, reset=False): 
        if(reset == True):
            os.remove('database.db')
        self.create_tables()

    def create_tables(self): 
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()
        # If we can figure out a method to use the schema.sql, we can replace it here, otherwise we will follow previous style
        cursor.execute(""" CREATE TABLE IF NOT EXISTS Events (
                      ID                INTEGER     PRIMARY KEY     AUTOINCREMENT,
                      CREATED           TIMESTAMP   NOT NULL        DEFAULT CURRENT_TIMESTAMP,
                      TITLE             TEXT        NOT NULL,
                      START_TIME        TEXT        NOT NULL,
                      END_TIME          TEXT        NOT NULL,
                      LOCATION          TEXT        NOT NULL,
                      DESCRIPTION       TEXT        NOT NULL,
                      MAX_ATTENDEES     INTEGER     NOT NULL,
                      MAX_VOLUNTEERS    INTEGER,
                      COST              INTEGER,
                      IMAGE             BLOB );""")
        
        connect.commit()
        connect.close()
        
    def get_events(self):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        cursor.execute(""" SELECT * FROM Events;""")
        eventData = cursor.fetchall() # this is a python dictionary, need to convert it to JSON in the server.py file

        connect.close()
        return eventData
    
    def add_event(self, eventInfo):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        if eventInfo['image'] == None:
            cursor.execute(""" INSERT INTO Events (TITLE, START_TIME, END_TIME, LOCATION, DESCRIPTION, MAX_ATTENDEES, MAX_VOLUNTEERS, COST) 
                                VALUES('%s', '%s', '%s', '%s', '%s', '%s','%s', '%s');""" % (eventInfo['title'], eventInfo['startTime'], eventInfo['endTime'], eventInfo['location'], eventInfo['description'], eventInfo['maxAttendees'], eventInfo['maxVolunteers'], eventInfo['cost']))
        else:
            cursor.execute(""" INSERT INTO Events (TITLE, START_TIME, END_TIME, LOCATION, DESCRIPTION, MAX_ATTENDEES, MAX_VOLUNTEERS, COST, IMAGE) 
                                VALUES('%s', '%s', '%s', '%s', '%s', '%s','%s', '%s');""" % (eventInfo['title'], eventInfo['startTime'], eventInfo['endTime'], eventInfo['location'], eventInfo['description'], eventInfo['maxAttendees'], eventInfo['maxVolunteers'], eventInfo['cost'], eventInfo['image']))
    
        connect.commit()
        connect.close()
        
    


        
        



