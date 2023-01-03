# -*- encoding:utf-8 -*-
from app import apps, C
from flask import render_template, request

if __name__ == '__main__':
    apps.run(C["WEBSERVER_IP"], C["WEBSERVER_PORT"], debug=True, threaded=True)
