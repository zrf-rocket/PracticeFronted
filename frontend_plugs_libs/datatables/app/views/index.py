# -*- encoding:utf-8 -*-
import json
from app import apps
from flask import render_template, request

data = {"data": [
    {"engine": "Tiger Nixon", "browser": "System Architect", "time": "2011/04/25", "name": "Edinburgh", "score": "5421"},
    {"engine": "Tiger Nixon2", "browser": "System Architect", "time": "2011/04/2", "name": "Edinburgh", "score": "23"},
    {"engine": "Tiger Nixon3", "browser": "System Architect", "time": "2011/05/25", "name": "Edinburgh", "score": "3242"},
    {"engine": "Tiger Nixon4", "browser": "System Architect", "time": "2011/07/25", "name": "Edinburgh", "score": "54521"},
    {"engine": "Tiger Nixon5", "browser": "System Architect", "time": "2011/08/25", "name": "Edinburgh", "score": "521"},
    {"engine": "Tiger Nixon6", "browser": "System Architect", "time": "2011/09/25", "name": "Edinburgh", "score": "21"},
    {"engine": "Tiger Nixon7", "time": "2011/01/25", "name": "Edinburgh", "score": "51"},
    {"engine": "Tiger Nixon8", "browser": "System Architect", "time": "2011/02/25", "name": "Edinburgh", "score": "21"},
    {"engine": "Tiger Nixon9", "browser": "System Architect", "time": "2011/03/25", "name": "Edinburgh", "score": "89"},
    {"engine": "Tiger Nixon10", "browser": "System Architect", "time": "2011/11/25", "name": "Edinburgh", "score": "1"},
    {"engine": "Tiger Nixon11", "browser": "System Architect", "time": "2011/12/25", "name": "Edinburgh", "score": "9"},
    {"engine": "Tiger Nixon18", "browser": "System Architect", "time": "2011/02/25", "name": "Edinburgh", "score": "21"},
    {"engine": "Tiger Nixon19", "browser": "System Architect", "time": "2011/03/25", "name": "Edinburgh", "score": "89"},
    {"engine": "Tiger Nixon110", "browser": "System Architect", "time": "2011/11/25", "name": "Edinburgh", "score": "1"},
    {"engine": "Tiger Nixon211", "browser": "System Architect", "time": "2011/12/25", "name": "Edinburgh", "score": "9"},
    {"engine": "Tiger Nixon83", "browser": "System Architect", "time": "2011/02/25", "name": "Edinburgh", "score": "21"},
    {"engine": "Tiger Nixon49", "browser": "System Architect", "time": "2011/03/25", "name": "Edinburgh", "score": "89"},
    {"engine": "Tiger Nixon150", "browser": "System Architect", "time": "2011/11/25", "name": "Edinburgh", "score": "1"},
    {"engine": "Tiger Nixon161", "browser": "System Architect", "time": "2011/12/25", "name": "Edinburgh", "score": "9"},
    {"engine": "Tiger Nixon78", "browser": "System Architect", "time": "2011/02/25", "name": "Edinburgh", "score": "21"},
    {"engine": "Tiger Nixon98", "browser": "System Architect", "time": "2011/03/25", "name": "Edinburgh", "score": "89"},
    {"engine": "Tiger Nixon190", "browser": "System Architect", "time": "2011/11/25", "name": "Edinburgh", "score": "1"},
    {"engine": "Tiger Nixon101", "browser": "System Architect", "time": "2011/12/25", "name": "Edinburgh", "score": "9"}
]}


@apps.route("/server_data")
def server_data():
    return json.dumps(data)


@apps.route("/")
@apps.route("/showdata9")
def showdata9():
    return render_template("/attributes9.html")


@apps.route("/showdata10")
def showdata10():
    return render_template("/attributes10.html")


@apps.route("/style1")
def style1():
    return render_template("/style1.html")


@apps.route("/style2")
def style2():
    return render_template("/style2.html")
