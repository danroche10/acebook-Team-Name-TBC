```
POSTS

* sequelize again [like 3]
* more things [like 0]
* sequelize [like 2]
```

http://localhost:3000/posts

for each post in the post list, add a button and a number (representing likes)

OPTIONAL: possibly include number of likes in the button?

OPTIONAL: could have symbol (later)

if user clicks on like button:

route:
post request [including post id, user id] on http://localhost:3000/posts/id/like

sent to controller/model
which checks if like already exists in like table and performs logic;
if user like on post (if it exists in database) = true (unlike functionality) = ADD LIKE TO DB
OPTIONAL: if user like on post (if it doesn't exist in database) = false (like functionality) = REMOVE LIKE FROM DB

ultimately ends up back at http://localhost:3000/posts
