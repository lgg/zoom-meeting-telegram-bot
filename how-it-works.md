# How it works

Create JWT App in Zoom
Start bot in PM
    - set `APISecret`
    - set `APIKey`
    - send email
    - receive JWT -> save for user session
User adds Bot to chat
User tags bot in chat
Bot checks that current user have JWT token
    - if not: please auth in PM with bot
    - if ok: create meeting
Scheduled messages ~ maybe crontab/timer/task in DB | check tasks in db every minute

    
### backend

* store user sessions in DB (lowdb / mongo)
