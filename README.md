# Dependencies

1. MUI
2. REACT
3. AXIOS - https://github.com/axios/axios#features

# TODO:

1. Link the sort by button in the catalogue to the backend api to retrieve catalogue items in a sorted manner
2. // TODO: Implement an API post call with object {filter: "recent", indexPoint: 19, retrieveAmount: 20}
3. Implement the create listing nav item and modal
4. Implement a use-effect to change the form back to blank when it's finished

router.post("/", pagination(ItemModel),(req, res) => {
  try {
    res.send(res.paginatedResults);
  } catch (err) {
    res.status(502).send({ error: err.message });
  }
});

should be a get request
