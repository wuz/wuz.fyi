const faunadb = require('faunadb'); /* Import faunaDB sdk */
require('dotenv').config();

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log('Function `pageViews` invoked', data);
  const pageView = {
    data: data,
  };
  return client.query(q.Get(q.Collection('page-views'))).then(res => {
    console.log('success', res);
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(res),
    });
  });
  //   /* construct the fauna query */
  //   return client
  //     .query(q.Create(q.Ref('classes/todos'), todoItem))
  //     .then(response => {
  //       console.log('success', response);
  //       /* Success! return the response with statusCode 200 */
  //       return callback(null, {
  //         statusCode: 200,
  //         body: JSON.stringify(response),
  //       });
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //       /* Error! return the error with statusCode 400 */
  //       return callback(null, {
  //         statusCode: 400,
  //         body: JSON.stringify(error),
  //       });
  //     });
};
