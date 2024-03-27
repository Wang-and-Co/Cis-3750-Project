import sqlite3;
import os;

class Database(): 

    def __init__(self, reset=False): 
        if(reset == True and os.path.exists('database.db')):
            os.remove('database.db')
        self.create_tables()

    def __setitem__(self, table, values):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()
        tempString = "( " + "?, "* (len(values)-1) + "?)"

        cursor.execute(f"""INSERT
                           INTO     {table}
                           VALUES   {tempString} ;""", values)

        connect.commit()
        connect.close()

    def create_tables(self): 
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()
        # If we can figure out a method to use the schema.sql, we can replace it here, otherwise we will follow previous style
        cursor.execute(""" CREATE TABLE IF NOT EXISTS Events (
                      EVENT_ID          INTEGER     PRIMARY KEY     AUTOINCREMENT,
                      TITLE             TEXT        NOT NULL,
                      START_TIME        INTEGER     NOT NULL,
                      END_TIME          INTEGER     NOT NULL,
                      LOCATION          TEXT        NOT NULL,
                      DESCRIPTION       TEXT        NOT NULL,
                      CURR_ATTENDEES    INTEGER     NOT NULL,
                      CURR_VOLUNTEERS   INTEGER     NOT NULL,
                      MAX_ATTENDEES     INTEGER     NOT NULL,
                      MAX_VOLUNTEERS    INTEGER,
                      WELLNESS_TYPE     TEXT,
                      ISONLINE          BOOLEAN     NOT NULL,
                      ORGANIZER_ID      INTEGER     NOT NULL,
                      COST              INTEGER,
                      IMAGE             TEXT );""")
        

        cursor.execute(""" CREATE TABLE IF NOT EXISTS EventBookings (
                       EVENT_ID         INTEGER    NOT NULL,
                       USER_ID          INTEGER    NOT NULL,
                       TYPE             TEXT );""")


        cursor.execute(""" CREATE TABLE IF NOT EXISTS Accounts (
                       USER_ID          INTEGER     PRIMARY KEY    AUTOINCREMENT,
                       EMAIL            BLOB        NOT NULL,
                       PASSWORD         TEXT        NOT NULL, 
                       FNAME            TEXT        NOT NULL,
                       LNAME            TEXT        NOT NULL );""")

        connect.commit()
        connect.close()
        
    def get_events(self):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        eventData = cursor.execute(""" SELECT * FROM Events;""").fetchall()
        #eventData = cursor.fetchall() # this is a python dictionary, need to convert it to JSON in the server.py file

        connect.close()
        return eventData
    
    def search_events(self, keyword):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        eventData = cursor.execute(f""" SELECT * FROM Events WHERE 
                                        TITLE LIKE '%{keyword}%' OR
                                        LOCATION LIKE '%{keyword}%' OR
                                        DESCRIPTION LIKE '%{keyword}%';""").fetchall()
        connect.close()
        return eventData
    
    def add_event(self, eventInfo):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()
        
        tempString = "( " + "?, "*14 + "?)"
        tempValue = [None, eventInfo['title'], eventInfo['startTime'], eventInfo['endTime'], eventInfo['location'],
                           eventInfo['description'], 0, 0, eventInfo['maxAttendees'], eventInfo['maxVolunteers'], eventInfo['wellnessType'],
                           eventInfo['isOnline'], eventInfo['organizer_id'], eventInfo['cost'], eventInfo['image']]
        
        cursor.execute(f""" INSERT INTO Events
                            VALUES  {tempString} ;""", tempValue)
        
        eventID = cursor.execute(f""" SELECT EVENT_ID FROM Events 
                                        WHERE TITLE = "{eventInfo['title']}" """).fetchone()

        bookingInfo = {'event_id': eventID[0], 'user_id': eventInfo['organizer_id'], 'type': "host"}

        connect.commit()
        connect.close()
        
        db.add_booking(bookingInfo)

        return eventID[0]

    def delete_event(self, eventID):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()
        
        event = cursor.execute(f""" SELECT * FROM Events WHERE EVENT_ID='{eventID}';""").fetchone()

        if event:
            cursor.execute(f""" DELETE FROM Events WHERE EVENT_ID='{eventID}';""")
            connect.commit()
            connect.close()
            return True
        else:
            connect.commit()
            connect.close()
            return False

    def add_booking(self, bookingInfo):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        x = 0

        if (bookingInfo['type'] == 'Attendee'):
            columnName = "CURR_ATTENDEES"
            x = 1
        else:
            columnName = "CURR_VOLUNTEERS"
            x = 1


        self.__setitem__('EventBookings', (bookingInfo['event_id'], bookingInfo['user_id'], bookingInfo['type']))
        
        if x == 1:
            cursor.execute(f""" UPDATE Events SET '{columnName}' = '{columnName}' + 1
                                WHERE  EVENT_ID = {bookingInfo['event_id']};""")
    
        
        connect.commit()
        connect.close()

    def select_booking(self, userID):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        table = cursor.execute(f""" SELECT * FROM EventBookings
                                         WHERE USER_ID = {userID};""").fetchall()
        
        print(table)
        connect.commit()
        connect.close()

        return table
    def delete_booking(self, userID, eventID):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor()

        event = cursor.execute(f""" SELECT * FROM EventBookings WHERE EVENT_ID='{eventID}' AND USER_ID='{userID};""").fetchone()
        print(event)

        if event:
            cursor.execute(f""" DELETE FROM EventBookings WHERE EVENT_ID='{eventID}' AND USER_ID='{userID}';""")
            connect.commit()
            connect.close()
            return True
        else:
            connect.commit()
            connect.close()
            return False

    def select_account(self, credentials):
        connect = sqlite3.connect('database.db')
        cursor = connect.cursor() 

        table = cursor.execute(f""" SELECT * FROM Accounts
                                        WHERE EMAIL =  "{credentials['email']}"
                                        AND PASSWORD = "{credentials['password']}";""").fetchone()
        
        
        # Here we return a fake accoun for sake of the minimum viable product
        if table == None:
            return (1, "Bryan","Wang")
        
        connect.close()
        return (table[0], table[3], table[4])
            


        
#TESTING PURPOSES ONLY

db = Database(reset=True)
#db.add_event({'title': "someTitle", 'startTime': 5, 'endTime': 5, 'location': "location", 'description': "description1", 'maxAttendees': 4, 'maxVolunteers': 5, 'wellnessType': "Well", 'isOnline': True, 'organizer_id': 20, 'cost': 40, 'image': "string"})
#db.add_booking({'event_id': 1, 'user_id': 5, 'type': 'Attendee'})

#print(db.get_events())

#print(db.get_events())
# db.__setitem__("EventBookings", (1, 2, "Attendee"))
# db.__setitem__("EventBookings", (4, 2, "Volunteer"))
# db.__setitem__("EventBookings", (2, 3, "Volunteer"))
# x = 0

#db.select_booking(2)



        
        



