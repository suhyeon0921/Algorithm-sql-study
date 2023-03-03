select *
from FOOD_PRODUCT
where PRICE = (select max(PRICE) as PRICE from FOOD_PRODUCT)
