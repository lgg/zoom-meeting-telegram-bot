# Zoom Call Create Bot

- `/create` - create call imediatly
- `/shedule 14:20` - create call in time
- `/shedule 12.10 14:20` - create call in date and time
- `/shedule [date] [time] --tag [tags separated by spaces without @ or with @]` - create call and tag users
- `/shedule --calendar` - create call in google calendar 
- `/shedule --duration 10` - create call in google calendar with duration in minutes
- `/add` - add admin with @tag
- `/delete` - delete admin with @tag
- `wip` `/setgoogle` - add accounts for google calendar

Bot accept commands only from admin ids in db. Set first admin id in .env file

## dev roadmap

- create zoom call
- accept commands only from users in db
- add/remove users in db
- add create call from bot
- add shedule command
- add user tag functionality
- `wip` add calls to google-calendar
- add zoom login (to use one instance of bot for many zoom users) (remove admins in db - user asks for `/create` - check if he set zoom account, if not - ask for auth)

## License

* MIT
* [lgg](https://github.com/lgg), 2020

