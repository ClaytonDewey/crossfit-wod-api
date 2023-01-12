const express = require('express');
const bodyParser = require('body-parser');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});

/* 
https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

If we try to add a new workout but forget to provide the "mode" property in our request body, we should see the error message along with the 400 HTTP error code.
 */
