CREATE TABLE
    labook_users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    labook_posts(
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        type ENUM("normal", "event") DEFAULT "normal",
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES labook_users (id)
    );

CREATE TABLE
    labook_friends(
        id VARCHAR(255) PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        friends_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labook_users (id)
    );