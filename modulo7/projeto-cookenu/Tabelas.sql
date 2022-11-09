CREATE TABLE cookenu_user (
	id VARCHAR(100) PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL
);

CREATE TABLE cookenu_recipes (
	id VARCHAR(100) PRIMARY KEY, 
    title VARCHAR(100) NOT NULL,
	description VARCHAR(255) NOT NULL ,
	preparation_mode VARCHAR(255) NOT NULL,
    creation_At VARCHAR(255),
	user_id VARCHAR(100),
	FOREIGN KEY (user_id) REFERENCES cookenu_user(id)
);

CREATE TABLE cookenu_friends(
	user VARCHAR(100),
    be_friends VARCHAR(100),
	PRIMARY KEY(user,be_friends),
	FOREIGN KEY(user) REFERENCES cookenu_user(id),
	FOREIGN KEY(be_friends) REFERENCES cookenu_user(id)
);