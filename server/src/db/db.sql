CREATE TABLE restaurant (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL,
    CHECK (price_range >= 1 AND price_range <= 5)
);

CREATE TABLE review (
    id UUID NOT NULL PRIMARY KEY,
    restaurant_id UUID NOT NULL REFERENCES restaurant (id),
    name VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5)
);