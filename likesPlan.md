```
POST

sequelize again
[like 3]

```

http://localhost:3000/posts/id

for each post, add a button and a number (representing likes)

OPTIONAL: possibly include number of likes in the button?

OPTIONAL: could have symbol (later)

if user clicks on like button:

route:
post request [including post id, user id] on http://localhost:3000/posts/id/like

sent to controller/model
which checks if like already exists in like table - if it exists, at this stage do not allow another like

if if user like on post doesn't exist in database) = add LIKE to DB

OPTIONAL: if user like on post already exists in database) = remove LIKE from DB

ultimately ends up back at http://localhost:3000/posts/id
