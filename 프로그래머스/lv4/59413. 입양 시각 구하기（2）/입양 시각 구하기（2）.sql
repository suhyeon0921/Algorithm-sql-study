set @hour := -1;

select (@hour := @hour + 1) as HOUR
    , (select count(ao2.animal_id) 
       from ANIMAL_OUTS ao2 
       where date_format(DATETIME, "%H") = @hour) as COUNT
from ANIMAL_OUTS ao
where @hour < 23
order by HOUR asc


# set @hour := -1;
 
# select ( @hour := @hour + 1 ) as hour
#     , (select count(ao2.animal_id) from animal_outs ao2 where date_format(ao2.datetime, '%H') = @hour ) as cnt 
# from animal_outs ao
# where @hour < 23 
# order by ( @hour := @hour + 1 )  asc