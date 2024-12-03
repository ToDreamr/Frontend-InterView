## Vuex

Vuex是一个专门为Vue.js应用程序开发的状态管理模式。

```
KQ8KMJ77TY-eyJsaWNlbnNlSWQiOiJLUThLTUo3N1RZIiwibGljZW5zZWVOYW1lIjoiVW5pdmVyc2l0YXMgTmVnZXJpIE1hbGFuZyIsImxpY2Vuc2VlVHlwZSI6IkNMQVNTUk9PTSIsImFzc2lnbmVlTmFtZSI6IkpldOWFqOWutuahtiDorqTlh4blupflkI0iLCJhc3NpZ25lZUVtYWlsIjoibmtucWFyY214a0AxNjMuY29tIiwibGljZW5zZVJlc3RyaWN0aW9uIjoiRm9yIGVkdWNhdGlvbmFsIHVzZSBvbmx5IiwiY2hlY2tDb25jdXJyZW50VXNlIjpmYWxzZSwicHJvZHVjdHMiOlt7ImNvZGUiOiJHTyIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlMwIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJETSIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiQ0wiLCJwYWlkVXBUbyI6IjIwMjQtMTItMDciLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTVSIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUlNDIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBDIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJEUyIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUkQiLCJwYWlkVXBUbyI6IjIwMjQtMTItMDciLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJDIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJSU0YiLCJwYWlkVXBUbyI6IjIwMjQtMTItMDciLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUk0iLCJwYWlkVXBUbyI6IjIwMjQtMTItMDciLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IklJIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJEUE4iLCJwYWlkVXBUbyI6IjIwMjQtMTItMDciLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IkRCIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOmZhbHNlfSx7ImNvZGUiOiJEQyIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUFMiLCJwYWlkVXBUbyI6IjIwMjQtMTItMDciLCJleHRlbmRlZCI6ZmFsc2V9LHsiY29kZSI6IlJTViIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJXUyIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUFNJIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBDV01QIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlJTIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IkRQIiwicGFpZFVwVG8iOiIyMDI0LTEyLTA3IiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBEQiIsInBhaWRVcFRvIjoiMjAyNC0xMi0wNyIsImV4dGVuZGVkIjp0cnVlfV0sIm1ldGFkYXRhIjoiMDEyMDIzMTIwOUxQQUEwMDEwMDkiLCJoYXNoIjoiNTI1MDgyODgvMjUxMjMyNjE6LTE1MDQzMDI5NDAiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZSwidHJpYWwiOmZhbHNlLCJhaUFsbG93ZWQiOnRydWV9-QKJUeHFkc+NaPWlEFZFGpoBJBYjehR5cGPezKK9BKHVnVaydzLV4YSAnILt8mz9twXw9lIh0k/HivsPKrffP8F9gZkWA/rfjieSI0jziDr9WBARPzYKRlQHSw/iZn5VUn6zIR9U7uJC6Kd/jiaeLumn+dzL/ia9B/1dBUIg5WQlIOtld4xx2xR0gb4JCNBd4kQMV4SAC3Og13/APGkDiP7KzDz7T3DxmpSKvjAfG1Hg1jn2pt5B/3gmhOK5lmJKbGBDRW40f4sqyDpzXsA5DaPAAaFT07GSL5FlfdKfngGjcQdwQ18k1iFET6wSwWkk+p+OySDqegpFw3wx2Kzj+Ow==-MIIETDCCAjSgAwIBAgIBDzANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIyMTAxMDE2MDU0NFoXDTI0MTAxMTE2MDU0NFowHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMjEwMTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/W3uCpU5M2y48rUR/3fFR6y4xj1nOm3rIuGp2brELVGzdgK2BezjnDXpAxVDw5657hBkAUMoyByiDs2MgmVi9IcqdAwpk988/Daaajq9xuU1of59jH9eQ9c3BmsEtdA4boN3VpenYKATwmpKYkJKVc07ZKoXL6kSyZuF7Jq7HoQZcclChbF75QJPGbri3cw9vDk/e46kuzfwpGftvl6+vKibpInO6Dv0ocwImDbOutyZC7E+BwpEm1TJZW4XovMBegHhWC04cJvpH1u98xoR94ichw0jKhdppywARe43rGU96163RckIuFmFDQKZV9SMUrwpQFu4Z2D5yTNqnlLRfAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQU5FZqQ4gnVc+inIeZF+o3ID+VhcEwSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBANLG1anEKid4W87vQkqWaQTkRtFKJ2GFtBeMhvLhIyM6Cg3FdQnMZr0qr9mlV0w289pf/+M14J7S7SgsfwxMJvFbw9gZlwHvhBl24N349GuthshGO9P9eKmNPgyTJzTtw6FedXrrHV99nC7spaY84e+DqfHGYOzMJDrg8xHDYLLHk5Q2z5TlrztXMbtLhjPKrc2+ZajFFshgE5eowfkutSYxeX8uA5czFNT1ZxmDwX1KIelbqhh6XkMQFJui8v8Eo396/sN3RAQSfvBd7Syhch2vlaMP4FAB11AlMKO2x/1hoKiHBU3oU3OKRTfoUTfy1uH3T+t03k1Qkr0dqgHLxiv6QU5WrarR9tx/dapqbsSmrYapmJ7S5+ghc4FTWxXJB1cjJRh3X+gwJIHjOVW+5ZVqXTG2s2Jwi2daDt6XYeigxgL2SlQpeL5kvXNCcuSJurJVcRZFYUkzVv85XfDauqGxYqaehPcK2TzmcXOUWPfxQxLJd2TrqSiO+mseqqkNTb3ZDiYS/ZqdQoGYIUwJqXo+EDgqlmuWUhkWwCkyo4rtTZeAj+nP00v3n8JmXtO30Fip+lxpfsVR3tO1hk4Vi2kmVjXyRkW2G7D7WAVt+91ahFoSeRWlKyb4KcvGvwUaa43fWLem2hyI4di2pZdr3fcYJ3xvL5ejL3m14bKsfoOv

```

```sql
-- 创建视图

-- 视图就是一条SELECT语句执行后返回的结果集。所以我们在创建视图的时候，主要的工作就落在创建这条SQL查询语句上。

create or replace  view city_country_view
as
    select t.*,c.country_name from country c,city t where c.country_id=t.country_id;

select * from city_country_view;

show engines;

show table status ;

show create view city_country_view;

-- 删除视图

drop view city_country_view;

-- 存储过程和函数
-- 创建函数

delimiter $
create procedure pro_test1()
begin
    select 'hello world';
end $
delimiter ;

show procedure status;

drop procedure if exists pro_test1;

-- 声明过程
delimiter $

 create procedure pro_test2()
 begin
 	declare num int default 5;
 	select num+ 10;
 end$

 delimiter ;

 -- if条件判断

delimiter $
create procedure if_procedure()
begin
    declare height int default 181;
    declare description varchar(50);
    if height>=180 then
        set description = '高个子';
    elseif height >=170 and height<181 then
        set description = '一般个子';
    end if ;
    select description;
end$
delimiter ;

-- 调用过程

call if_procedure();

delimiter $
create procedure pro_test8(n int)
begin
  declare total int default 0;
  declare num int default 1;
  while num<=n do
    set total = total + num;
	set num = num + 1;
  end while;
  select total;
end$
delimiter ;

call pro_test8(800);

show variables like '%storage_engine%' ;

alter table city add index index_name(country_id);

alter table city
    add constraint city_foreign
        foreign key (country_id) references country (country_id)
            on update cascade;

show create table city;

CREATE TABLE `t_role` (
  `id` varchar(32) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `role_code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_role_name` (`role_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `t_user` (
  `id` varchar(32) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(96) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_user_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `user_role` (
  `id` int(11) NOT NULL auto_increment ,
  `user_id` varchar(32) DEFAULT NULL,
  `role_id` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ur_user_id` (`user_id`),
  KEY `fk_ur_role_id` (`role_id`),
  CONSTRAINT `fk_ur_role_id` FOREIGN KEY (`role_id`) REFERENCES `t_role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_ur_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




insert into `t_user` (`id`, `username`, `password`, `name`) values('1','super','$2a$10$TJ4TmCdK.X4wv/tCqHW14.w70U3CC33CeVncD3SLmyMXMknstqKRe','超级管理员');
insert into `t_user` (`id`, `username`, `password`, `name`) values('2','admin','$2a$10$TJ4TmCdK.X4wv/tCqHW14.w70U3CC33CeVncD3SLmyMXMknstqKRe','系统管理员');
insert into `t_user` (`id`, `username`, `password`, `name`) values('3','itcast','$2a$10$8qmaHgUFUAmPR5pOuWhYWOr291WJYjHelUlYn07k5ELF8ZCrW0Cui','test02');
insert into `t_user` (`id`, `username`, `password`, `name`) values('4','stu1','$2a$10$pLtt2KDAFpwTWLjNsmTEi.oU1yOZyIn9XkziK/y/spH5rftCpUMZa','学生1');
insert into `t_user` (`id`, `username`, `password`, `name`) values('5','stu2','$2a$10$nxPKkYSez7uz2YQYUnwhR.z57km3yqKn3Hr/p1FR6ZKgc18u.Tvqm','学生2');
insert into `t_user` (`id`, `username`, `password`, `name`) values('6','t1','$2a$10$TJ4TmCdK.X4wv/tCqHW14.w70U3CC33CeVncD3SLmyMXMknstqKRe','老师1');



INSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES('5','学生','student','学生');
INSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES('7','老师','teacher','老师');
INSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES('8','教学管理员','teachmanager','教学管理员');
INSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES('9','管理员','admin','管理员');
INSERT INTO `t_role` (`id`, `role_name`, `role_code`, `description`) VALUES('10','超级管理员','super','超级管理员');


INSERT INTO user_role(id,user_id,role_id) VALUES(NULL, '1', '5'),(NULL, '1', '7'),(NULL, '2', '8'),(NULL, '3', '9'),(NULL, '4', '8'),(NULL, '5', '10') ;


explain select * from t_role r, t_user u, user_role ur where r.id = ur.role_id and u.id = ur.user_id ;

SELECT * FROM t_role WHERE id = (SELECT role_id FROM user_role WHERE user_id = (SELECT id FROM t_user WHERE username = 'stu1'));

EXPLAIN SELECT * FROM t_role WHERE id = (SELECT role_id FROM user_role WHERE user_id = (SELECT id FROM t_user WHERE username = 'stu1'));

select @@have_profiling;

select @@have_profiling;

set profiling=1;

show databases ;
show profiles ;

select * from t_user where id < 5;

create table `tb_seller` (
	`sellerid` varchar (100),
	`name` varchar (100),
	`nickname` varchar (50),
	`password` varchar (60),
	`status` varchar (1),
	`address` varchar (100),
	`createtime` datetime,
    primary key(`sellerid`)
)engine=innodb default charset=utf8mb4;

insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('alibaba','阿里巴巴','阿里小店','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('baidu','百度科技有限公司','百度小店','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('huawei','华为科技有限公司','华为小店','e10adc3949ba59abbe56e057f20f883e','0','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('itcast','传智播客教育科技有限公司','传智播客','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('itheima','黑马程序员','黑马程序员','e10adc3949ba59abbe56e057f20f883e','0','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('luoji','罗技科技有限公司','罗技小店','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('oppo','OPPO科技有限公司','OPPO官方旗舰店','e10adc3949ba59abbe56e057f20f883e','0','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('ourpalm','掌趣科技股份有限公司','掌趣小店','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('qiandu','千度科技','千度小店','e10adc3949ba59abbe56e057f20f883e','2','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('sina','新浪科技有限公司','新浪官方旗舰店','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('xiaomi','小米科技','小米官方旗舰店','e10adc3949ba59abbe56e057f20f883e','1','西安市','2088-01-01 12:00:00');
insert into `tb_seller` (`sellerid`, `name`, `nickname`, `password`, `status`, `address`, `createtime`) values('yijia','宜家家居','宜家家居旗舰店','e10adc3949ba59abbe56e057f20f883e','1','北京市','2088-01-01 12:00:00');


create index idx_seller_name_sta_addr on tb_seller(name,status,address);

show table  status ;

explain select * from tb_seller where name='小米科技' and status='1' and address='北京市';

create index idx_name on tb_seller(status);

explain select * from tb_seller where name='小米科技';

explain select * from tb_seller where address='北京市';

-- 多个索引但是 不匹配最左法则

-- 不要在索引列上使用运算操作 ，否则索引也会失效

-- 字符串需要加入单引号！没有对字符串加单引号，MySQL的查询优化器，会自动的进行类型转换，造成索引失效。

-- 避免select *

-- 查询列超出索引列，稍微会丢失性能

-- 使用or来链接是会发生索引失效的

-- % 开头的like模糊查询

-- in走索引，not in不走

-- 尽量使用单列索引而不是复合索引

show table status;

show engines ;

show variables like 'have_query_cache';
show variables like 'have_query_%';

create table test_innodb_lock(
	id int(11),
	name varchar(16),
	sex varchar(1)
)engine = innodb default charset=utf8;

insert into test_innodb_lock values(1,'100','1');
insert into test_innodb_lock values(3,'3','1');
insert into test_innodb_lock values(4,'400','0');
insert into test_innodb_lock values(5,'500','1');
insert into test_innodb_lock values(6,'600','0');
insert into test_innodb_lock values(7,'700','0');
insert into test_innodb_lock values(8,'800','1');
insert into test_innodb_lock values(9,'900','1');
insert into test_innodb_lock values(1,'200','0');

create index idx_test_innodb_lock_id on test_innodb_lock(id);
create index idx_test_innodb_lock_name on test_innodb_lock(name);
```

