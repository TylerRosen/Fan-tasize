-- user with an id of 1 clicks Add Player next to Travis Kelce
    
--     make sure you can't add multiple of the same player twice

--         before you do an insert you do 

--             select * from user_players where playerable_id = 1 AND playerable_type = 'tightends' AND user_id = 1;
--                 you'll get the data back 
--                     if it's null or undefined then you can insert into user_players   
--                         INSERT INTO user_players (playerable_id, playerable_type, user_id) VALUES (1, 'tightends', 1)
--                     if it's there then you tell the user can't pick the same player twice
--                         redirect back to page they were on before
-- --------

-- if user is deleting a
--     DELETE FROM user_players where playerable_id=1 AND user_id =1;
--         redirect back to main page
-- -------

-- main page
--     retrieving all of users players:

--     SELECT *
--     FROM user_players
--     WHERE user_id = 1
-- ------


CREATE DATABASE fantasy_db;
USE fantasy_db;

CREATE TABLE quarterbacks
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
    passydsgm varchar(255),
	att varchar(255),
	comp varchar(255),
	passcomp varchar(255),
	tds varchar(255),
	interceptions varchar(255),
    rushyds varchar(255),
    rushtds varchar(255),
    games varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE runningbacks
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
	rushydsgm varchar(255),
	attgm varchar(255),
	rushatt varchar(255),
	rushyds varchar(255),
	rushtds varchar(255),
    rec varchar(255),
    recyds varchar(255),
    rectds varchar(255),
    games varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE widereceivers
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
	recydsgm varchar(255),
	rectgtgm varchar(255),
	recgm varchar(255),
	recyds varchar(255),
	rectds varchar(255),
    games varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE tightends
(
	id int NOT NULL AUTO_INCREMENT,
	player varchar(255),
	team varchar(255),
	recydsgm varchar(255),
	rectgtgm varchar(255),
	recgm varchar(255),
    totalyds varchar(255),
	recyds varchar(255),
	rectds varchar(255),
    games varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE defense
(
	id int NOT NULL AUTO_INCREMENT,
	team varchar(255),
	fpsgm varchar(255),
	ptsallowed varchar(255),
	intgm varchar(255),
	fumrecgm varchar(255),
	sacksgm varchar(255),
	totalint varchar(255),
	totalfum varchar(255),
	totalsacks varchar(255),
	safeties varchar(255),
	deftds varchar(255),
	qbpts varchar(255),
	rbpts varchar(255),
	wrpts varchar(255),
	tepts varchar(255),
	kickerpts varchar(255),
    primary key(id)
);

CREATE TABLE offensiveline(
	id int NOT NULL AUTO_INCREMENT,
	team varchar(255),
	PRIMARY KEY(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username varchar(230) NOT NULL,
    email varchar(230) NOT NULL,
    password_hash varchar(230) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE user_players
(
    id int NOT NULL AUTO_INCREMENT,
	playerable_id INT NOT NULL,
	playerable_type varchar(230) NOT NULL,
    user_id INT NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (user_id) references users(id)
);


INSERT INTO offensiveline (team) VALUES ("Tennessee Titans");
INSERT INTO offensiveline (team) VALUES ("Dallas Cowboys");
INSERT INTO offensiveline (team) VALUES ("Pittsburgh Steelers");
INSERT INTO offensiveline (team) VALUES ("Oakland Raiders");
INSERT INTO offensiveline (team) VALUES ("Green Bay Packers");
INSERT INTO offensiveline (team) VALUES ("Atlanta Falcons");
INSERT INTO offensiveline (team) VALUES ("Washington Redskins");
INSERT INTO offensiveline (team) VALUES ("Philadelphia Eagles");
INSERT INTO offensiveline (team) VALUES ("Baltimore Ravens");
INSERT INTO offensiveline (team) VALUES ("New England Patriots");
INSERT INTO offensiveline (team) VALUES ("Buffalo Bills");
INSERT INTO offensiveline (team) VALUES ("New Orleans Saints");
INSERT INTO offensiveline (team) VALUES ("Cincinnati Bengals");
INSERT INTO offensiveline (team) VALUES ("Kansas City Chiefs");
INSERT INTO offensiveline (team) VALUES ("Chicago Bears");
INSERT INTO offensiveline (team) VALUES ("Cleveland Browns");
INSERT INTO offensiveline (team) VALUES ("Carolina Panthers");
INSERT INTO offensiveline (team) VALUES ("Houston Texans");
INSERT INTO offensiveline (team) VALUES ("Detroit Lions");
INSERT INTO offensiveline (team) VALUES ("New York Giants");
INSERT INTO offensiveline (team) VALUES ("New York Jets");
INSERT INTO offensiveline (team) VALUES ("Jacksonville Jaguars");
INSERT INTO offensiveline (team) VALUES ("Tampa Bay Buccaneers");
INSERT INTO offensiveline (team) VALUES ("Denver Broncos");
INSERT INTO offensiveline (team) VALUES ("Indianapolis Colts");
INSERT INTO offensiveline (team) VALUES ("Arizona Cardinals");
INSERT INTO offensiveline (team) VALUES ("Los Angeles Rams");
INSERT INTO offensiveline (team) VALUES ("San Francisco 49ers");
INSERT INTO offensiveline (team) VALUES ("Minnesota Vikings");
INSERT INTO offensiveline (team) VALUES ("Miami Dolphins");
INSERT INTO offensiveline (team) VALUES ("San Diego Chargers");
INSERT INTO offensiveline (team) VALUES ("Seattle Seahawks");

CREATE TABLE tophundred(
	id int NOT NULL AUTO_INCREMENT,
    num varchar(255),
	player varchar(255),
    posrank varbinary(255),
	PRIMARY KEY(id)
);