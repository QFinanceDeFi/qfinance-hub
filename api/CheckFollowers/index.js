const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: 'YYWi0Kgvu7jx4PRUNhDNipr3w',
  consumer_secret: 'AFmyVRXWuXDfs0AzkdJTQk5pUnsMVss3GDeYrpLcXI7FnKpSJg',
  access_token_key: '3120501443-ZqqoLPxUcPIDsdMcPja7m7z935Z5EWRxVOLabMn',
  access_token_secret: 'GGXrhmqqHLo0poBJ5czxHzHMmHmv6jU7ihD1FHEGyGTL8'
});

module.exports = async function (context, req) {
  let params = { screen_name: "QFinanceDeFi" }
  let data = await client.get('followers/list', params).then(res => {
    return res.users
  })
  let followers = data.map(item => item.screen_name)

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { followers },
  };
};
