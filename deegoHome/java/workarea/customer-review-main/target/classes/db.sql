CREATE TABLE `customer` (
  `cust_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`cust_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `language` (
  `lang_Id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(45) NOT NULL,
  PRIMARY KEY (`lang_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `product` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`prod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `review` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `cust_id` int(11) NOT NULL,
  `prod_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `comments` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

---- Initial Data ---
insert into customerreview.customer values(1,"John");
insert into customerreview.customer values(2,"Mac");
insert into customerreview.customer values(3,"Mike");
insert into customerreview.customer values(4,"Merley");
insert into customerreview.customer values(5,"Sam");
insert into customerreview.customer values(6,"Donna");
insert into customerreview.customer values(7,"Rachel");
insert into customerreview.customer values(8,"Conna");
insert into customerreview.customer values(9,"Michael");
insert into customerreview.customer values(10,"Jerry");
commit;

select * from customerreview.customer;

insert into customerreview.product values(1,"Git a handbook");
insert into customerreview.product values(2,"Unix for dummies");
insert into customerreview.product values(3,"Learn Spring");
insert into customerreview.product values(4,"SpringBoot -Complete Handbook");
insert into customerreview.product values(5,"Java Core");
insert into customerreview.product values(6,"Java in a nutshell");
insert into customerreview.product values(7,"Java VM");
insert into customerreview.product values(8,"Building blocks of Software");
insert into customerreview.product values(9,"Patterns");
insert into customerreview.product values(10,"XML");
commit;

SELECT * FROM customerreview.product;

insert into customerreview.language value(1,'Fuck');
insert into customerreview.language value(2,'Shit');
insert into customerreview.language value(3,'Poop');
insert into customerreview.language value(4,'Bad');
insert into customerreview.language value(5,'Douche');
commit;

select * from customerreview.language

