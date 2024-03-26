# Parameters and Returns for Backend

## /events 

GET REQUEST: this requires no parameters inputted. It will return a list of json objects. The format of the json objects will be: 
```
{id: eventID, title: 'someTitle', startTime: someInteger, endTime: someInteger, location: 'someString', description: 'someString', maxAttendees: someInteger, maxVolunteers: someInteger, wellnessType: 'someString', isOnline: someBoolean, cost: someInteger, image: 'someString'}
```
POST REQUEST: This requests data in the same format as listed above but does not require an ID. Example below.
```
{'title': "someTitle", 'startTime': 5, 'endTime': 5, 'location': "location", 'description': "description1", 'maxAttendees': 4, 'maxVolunteers': 5, 'wellnessType': "Well", 'isOnline': True, 'organized_id': 20, 'cost': 40, 'image': "string"}
```
This returns the ID of the event 

DELETE REQUEST: this requires one parameter as input - the id of the event to be deleted. It will return True if the event was deleted and return a 404 error if the event does not exist (and thus cannot be deleted). The following is an example of how it would be called:
```
deleteEvent({'id': 1})
```

## /eventBooking

GET REQUEST (Retrieving all event bookings from the database): this requires a simple integer only (the user id). Because this is a get request it does not require a json object. Example provided below of how it would be called: 
```
retrieveBookings(user_id) 
```
This will return a list of json objects in the following structure
```
[{'event_id': someID, 'user_id': userID, 'type': "typeOfBooking"}, {'event_id': someID2, 'user_id': someID3, 'type': "typeOfBooking"}]
```
POST REQUEST (Adding a booking to the database) : This requires a json object. The following is an example of the formatting: 
```
{'event_id': 5, 'user_id': 1, 'type': "Volunteer"} 
```
DELETE REQUEST (Deleting a booking from the database) : This requires two integers, the event id and the user id. Because this is a delete request it does not require a json object. The example provided below is how it would be called:
```
deleteBooking({'eventID': 1, 'userID': 1})
```
## /createAccount 

POST REQUEST (Creating account and returning the user id and names): this requires the following json object: 
```
{'email': "someEmail@gmail.com", 'password': "somePassword", 'fname': "Daniel", 'lname': "Wang"}
```
It will return the following json object: 
```
{'id': someID, 'fname': "Daniel", 'lname': "Wang"}
```

## /login

POST REQUEST (Logging into the website): This requires the following json object:
```
{'email': "someEmail@gmail.com", 'password': "somePassword"} 
```
It will return the following json object:
```
{'id': someID, 'fname': "Daniel", 'lname': "Wang"}
```








