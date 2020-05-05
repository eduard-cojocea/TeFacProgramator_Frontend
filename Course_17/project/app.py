from flask import Flask, url_for, render_template, request, session, redirect
import json
app = Flask(__name__)

app.secret_key = 'superdupersecret'

admins = ["Gigel", "Gogu", "Serghei"]
regular_users = ["Ion", "Ionel", "Cosmin"]

@app.route('/hello_world')
def hello_world():
    return 'Hello World!'
    

@app.route('/user/<username>')
def show_user(username):
    return 'Userul este %s' % username
    
    
@app.route('/show_urls')
def show_urls():
    results = "hello_world url: " + url_for('hello_world')
    results += "\nshow_user url: " + url_for('show_user', username="Gogu")
    results += "\nshow_urls url: " + url_for('show_urls')
    return results
    

@app.route('/')    
def index():
    return render_template('index.html')
    
    
@app.route('/hello')
def hello():
    return render_template('hello.html', name='iedi')
    
    
@app.route('/test')
def test():
    if request.args.get('masina') == "Dacia":
        return str(dir(request))
    my_dict = {
        "name": "gogu",
        "age": 20
    }
    return json.dumps(my_dict)
    
    
@app.route('/form')
def form():
    username = ''
    if 'username' in session:
        username = session['username']

    return render_template('form.html', username=username)
    
    
@app.route('/login', methods=["POST"])
def login():
    if request.form['username'] == "admin":
        session['username'] = "admin"
        return redirect(url_for('form'))
    return "Invalid"
    

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('form'))
    
    
if __name__ == "__main__":
    app.run(debug=True, port=5001)
    