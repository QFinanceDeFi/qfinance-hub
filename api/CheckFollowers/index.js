const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

module.exports = async function (context, req) {
  let params = { screen_name: process.env.TWITTER_USERNAME, count: 150 }
  let data = await client.get('followers/list', params).then(res => {
    return res.users
  })
  let followers = data.map(item => item.screen_name)

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { followers },
  };
};
