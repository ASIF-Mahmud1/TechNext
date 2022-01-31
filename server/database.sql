CREATE DATABASE technext;

CREATE TABLE users(
  userId SERIAL,
  firstName TEXT ,
  lastName TEXT ,
  email TEXT NOT NULL UNIQUE
);





--    su - postgres
--    psql -U postgres
--    \c technext
--    \dt

