![houmanhadian.github.io](./public/img/hhadianproject.png?raw=true "Houman Hadian's Doctoral Project")
# social-research-tool:
Tool developed during Houman Hadian's doctoral project as code base for social APIs ETL and analytics.
@UAlg.pt

social-research-tool, is intended to provide batch ~~and realtime (LAMBDA)~~ ETL functionality on Instagram APIs (private web API)
in order to analyse brand engagement on Instagram social network via analytical models presented on 
[Houman Hadian's doctoral project research papers](https://houmanhadian.github.io/). This is an open source contribution in hope of producing side common benefits along with academic & scientific values.

**`Notice:` Work in progress!**

**`Notice:` Version 1 is almost ready (tests are not!!!)!**

**`TODO:`**

1- ~~Add Instagram login form as start page for frontend and store the session-id and csrf_token on server side (with security in mind!)~~

2- ~~Add UI components for parameters~~

3- ~~Implement database loading (NeDB for time being with support for MongoDB, Postgress, ElasticSearch and Redis).~~

4- Add progress , start and stop for every API ETL operation.

5- Add export to CSV/JSON option ~~to every ETL process~~.

6- ~~Add Analytics dashboards and components~~.

7- Add analytical models and algorithms.


//---------------------------------------------------


**`Quick start:`** 

1- Clone this project

2- Optionally-- Run: _npm install -g pm2_

3- Config your session_id  from your browser on Instagram website (within Instagram cookies!).

4- In CMD go to project root folder

5- Run: _npm install_ then Run:_npm start_  (or optionally Run: _pm2 start src/_)

6- Go to localhost:8080 (Check the config for port) and start analysing Instagram!


**`Contributors:`**
 
 M.Ghiasi (emg110@gmail.com), H.Hadian (a58976@ualg.pt), Sheghzo(shm1358@gmail.com)

Special thanks to these great open source projects which paved the client's starting point but since changes required to make the tool complete , comprehensive and calibrated for analytics hence they have undergone great changes which left no place for branching and backward contribution via pull requests thus here we announce our gratitudes and in turn give back the whole effort to community, free and open source:

[yatsenkolesh/instagram-nodejs](https://www.github.com/yatsenkolesh/instagram-nodejs)


[dilame/instagram-private-api](https://www.github.com/dilame/instagram-private-api)


[FDMcreative/instagram-clone-ejs](https://github.com/FDMcreative/instagram-clone-ejs)


[parsakafi/instagram-engagement-rate](https://github.com/parsakafi/instagram-engagement-rate)


[arve0/feathers-nedb-fuzzy-search](https://github.com/arve0/feathers-nedb-fuzzy-search)



**`Screens:`**


![houmanhadian.github.io](./public/img/home_screen.png?raw=true "Houman Hadian's Doctoral Project")


![houmanhadian.github.io](./public/img/stats_screen.png?raw=true "Houman Hadian's Doctoral Project")


![houmanhadian.github.io](./public/img/stats_search.jpg?raw=true "Houman Hadian's Doctoral Project")

**`demo:--soon`**
