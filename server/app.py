from flask import Flask, render_template 

app = Flask(__name__, template_folder="../client/public")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    pass

@app.route('/login')
def login():
    pass

@app.route('/signup')
def signup():
    pass

@app.route('/designs')
def designs():
    pass


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="4000")
    