create table product(
 product_id number not null,
 product_name varchar2,
 product_desc varchar2
);

create table review(
 review_id number primary key,
 product_id number,
 customer_id number,
 rating varchar2,
 comments varchar2
);

create table language(
 language_id number primary key,
 word varchar2
);

insert into product values(1,"Grit","Grit");
insert into product values(2,"Obstacle is the way","obstacle is the way");
insert into product values(3,"Aloha","aloha ");
insert into product values(4,"The Growth","mindset");
insert into product values(5,"Letters from a stoic","paperback");

commit;