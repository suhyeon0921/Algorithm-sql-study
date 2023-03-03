select CATEGORY, SUM(SALES) as TOTAL_SALES
from BOOK B
join BOOK_SALES BS
on B.BOOK_ID = BS.BOOK_ID
where date_format(SALES_DATE, "%Y-%m") = "2022-01"
group by CATEGORY
order by CATEGORY asc