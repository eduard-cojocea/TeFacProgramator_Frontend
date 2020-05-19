from flask import Flask, request
import json

app = Flask(__name__)

applications_file = "application.txt"

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route("/")
def hello():
    return "hello"

def write_application_to_file(filename, data):
    info = ""
    keys = sorted(list(data.keys()))
    for key in keys:
        info += data[key] + ";"
    with open(filename, "a+") as f:
        f.write(info + "\n")

def read_applications_file(filename):
    with open(filename, "r") as f:
        data = f.readlines()
    return data

@app.route("/save-application", methods=["POST"])
def save_application():
    #email = request.form["email"]
    #message = request.form["message"]
    #print(email)
    #print(message)
    #print("bsdfsd")
    #print(dir(request))
    print(request.json)
    write_application_to_file(applications_file, request.json)
    return "success"


@app.route("/get-applications", methods=["GET"])
def get_applications():
    data = read_applications_file(applications_file)
    return json.dumps(data)


if __name__ == "__main__":
    app.run(debug = True, port=5000)