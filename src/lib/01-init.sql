-- Up
CREATE TABLE Person {
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    surname TEXT
}



-- Down
DROP table Person