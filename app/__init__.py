from flask import Flask
app = Flask(__name__)
app.config.from_object('config')
import os
import config
from app import views
