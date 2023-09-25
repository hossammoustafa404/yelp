CREATE TABLE restaurant (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL,
    CHECK (price_range >= 1 AND price_range <= 5)
);