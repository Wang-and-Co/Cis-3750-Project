CREATE TABLE IF NOT EXISTS Events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    title TEXT NOT NULL,
    start_time INTEGER NOT NULL,
    end_time DATETIME NOT NULL,
    event_location TEXT NOT NULL,
    event_description TEXT NOT NULL,
    max_attendees INTEGER NOT NULL,
    max_volunteers INTEGER,
    cost INTEGER,
    event_image BLOB,  
);