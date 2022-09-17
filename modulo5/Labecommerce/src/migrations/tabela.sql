CREATE TABLE labecommerce_users(
	id BIGINT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE labecommerce_products(
	id BIGINT NOT NULL ,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,3) NOT NULL ,
    image_url VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE labecommerce_purchases(
	id BIGINT NOT NULL PRIMARY KEY,
    user_id  BIGINT,
    product_id BIGINT ,
    quantity INT NOT NULL,
    total_price  DECIMAL(10,2) NOT NULL ,

    FOREIGN KEY(user_id) REFERENCES  labecommerce_users(id),
    FOREIGN KEY(product_id) REFERENCES labecommerce_products(id)
);