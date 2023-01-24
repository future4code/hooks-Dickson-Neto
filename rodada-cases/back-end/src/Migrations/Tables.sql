CREATE TABLE create_dogwalking(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    status VARCHAR(100) NOT NULL DEFAULT"On Hold",
    price BIGINT NOT NULL,
    ride_duration ENUM("30M" , "60M"),
    appointment_date VARCHAR(100) NOT NULL,
    qty_pet INT NOT NULL,
    latitude VARCHAR(100) NOT NULL,
    longitude VARCHAR(100) NOT NULL,
    start_time VARCHAR(100) NOT NULL,
    end_time VARCHAR(100) NOT NULL
);