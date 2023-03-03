set @hour := -1;

select (@hour := @hour + 1) as HOUR
    , (select count(ao2.animal_id) 
       from ANIMAL_OUTS ao2 
       where date_format(DATETIME, "%H") = @hour) as COUNT
from ANIMAL_OUTS ao
where @hour < 23
order by HOUR asc
