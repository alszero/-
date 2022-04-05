mysql> create table user(
    -> id int(20) primary key,
    -> name varchar(30) not null
    -> );

+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(20)     | NO   | PRI | NULL    |       |
| name  | varchar(30) | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+