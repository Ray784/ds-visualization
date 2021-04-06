from flask import Flask, request, Response, send_from_directory
import requests
from flask_cors import CORS, cross_origin
import pymongo, json, os

app = Flask(__name__, template_folder='./')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
  if path[-1] == '/':
  	return send_from_directory('./'+path,'index.html')
  else:
    return send_from_directory('./', path)

@app.route('/')
def root():
  return send_from_directory('./', 'index.html')
    
@app.route('/getBlog')
@cross_origin()
def getBlog():
	client = pymongo.MongoClient("<mongo-url>")
	db = client.db_76532
	collection = db.Blogs
	blogs = []
	for document in collection.find({},{'_id':0}):
		blogs.append(document)
	return {"blogs": blogs}

@app.route('/setBlog', methods=["POST"])
@cross_origin()
def setBlog():
	prev_time_stamp = request.get_json()['time_stamp']
	blog = json.loads(request.get_json()['blog']) 
	print(prev_time_stamp)
	client = pymongo.MongoClient("<mongo-url>")
	db = client.db_76532
	actionPerformed = "inserted successfully"
	collection = db.Blogs
	if(prev_time_stamp != '-1'):
		actionPerformed = "edited successfully"
		collection.delete_one({'time_stamp': prev_time_stamp})
	if(blog != -1):
		rec_id1 = collection.insert_one(blog)
	return {'action': actionPerformed};

@app.route('/ds-visuals')
def dsVisuals():
	return redirect(url_for('ds-visuals/'))

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=33507)
