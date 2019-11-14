CREATE MATERIALIZED VIEW supertable AS (
	SELECT p.person_id, f.friend_id, u.gender, u.intereset 
	FROM friends.tbl_friend_ships as p 
	join friends.tbl_friend_ships as f on p.friend_id = f.person_id
	join friends.tbl_user as u on f.person_id = u.person_id
);