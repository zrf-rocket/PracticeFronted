# -*- encoding:utf-8 -*-
from flask import Flask
from config import config as C

apps = Flask(__name__, template_folder='templates')

import views.index
