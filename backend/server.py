from flask import Flask

app = Flask(__name__)

# API Routes
@app.route('/')
def get_hello():
    return {"hello" : 10}
