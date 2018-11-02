UPDATE products
SET name = ${name}, price = ${price}, img = ${imgurl}
WHERE id = ${id}
returning *;