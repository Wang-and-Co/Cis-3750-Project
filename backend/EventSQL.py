import sqlite3;
import os;

class Database(): 

    def __init__(self, reset=False): 
        if(reset == True):
            os.remove('database.db')
        self.data = sqlite3.connect('database.db')

    def create_tables(self): 
        # If we can figure out a method to use the schema.sql, we can replace it here, otherwise we will follow previous style

        self.data.execute(""" CREATE TABLE IF NOT EXISTS Events 
                    ( ID                INTEGER     AUTOINCREMENT,
                      CREATED           TIMESTAMP   NOT NULL        DEFAULT CURRENT_TIMESTAMP,
                      TITLE             TEXT        NOT NULL,
                      START_TIME        INTEGER     NOT NULL,
                      END_TIME          INTEGER     NOT_NULL,
                      EVENT_LOCATION    TEXT        NOT NULL,
                      EVENT_DESCRIPTION TEXT        NOT NULL,
                      MAX_ATTENDEES     INTEGER     NOT NULL,
                      MAX_VOLUNTEERS    INTEGER,
                      COST              INTEGER
                      PRIMARY KEY       (ID) );""")
