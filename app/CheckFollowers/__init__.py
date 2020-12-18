import logging
import tweepy
import os
import azure.functions as func
import json

consumer_key = os.environ['TWITTER_CONSUMER_KEY']
consumer_secret = os.environ['TWITTER_CONSUMER_SECRET']
access_token_key = os.environ['TWITTER_ACCESS_TOKEN']
access_token_secret = os.environ['TWITTER_ACCESS_SECRET']

# authorization of consumer key and consumer secret 
auth = tweepy.OAuthHandler(consumer_key, consumer_secret) 
  
# set access to user's access key and access secret  
auth.set_access_token(access_token_key, access_token_secret) 
  
# calling the api  
api = tweepy.API(auth) 

# the screen_name of the targeted user 
screen_name = os.environ["TWITTER_USERNAME"]

def main(req: func.HttpRequest) -> func.HttpResponse:
    followers = []
    for follower in tweepy.Cursor(api.followers, screen_name).items(100):
        followers.append(follower.screen_name)

    return func.HttpResponse(json.dumps(followers), mimetype="application/json")