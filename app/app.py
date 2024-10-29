from re import escape
from flask import Flask, jsonify, render_template, request
import mysql.connector
import os
from flask import Flask
from flask import Flask, jsonify
import mysql.connector
from collections import OrderedDict, defaultdict

app = Flask(__name__)

# เชื่อมต่อฐานข้อมูล MySQL โดยใช้ค่าคงที่
mydb = mysql.connector.connect(
  host="db",
  user="root",
  password="12345",
  database="sora_data",
)

mycursor = mydb.cursor()

@app.route('/data')
def get_data():#SELECT * FROM b_books JOIN b_listpay ON b_books.Barcode = b_listpay.Barcode
    mycursor.execute("SELECT company_id, company_name FROM companies")
    results = mycursor.fetchall()
    data = []
    for row in results:
        data.append({'id': row[0], 'name': row[1]})
    return jsonify(data)

#test 
@app.route('/helo')
def name():
    return "YORNNAME....>>"


@app.route('/')
def hello():
    return f"WELLOME > "


@app.route('/index')
def index():
    return render_template('index.html')


""" @app.route('/test/b', methods=['POST'])
def button_clicked():
    # ทำสิ่งที่ต้องการเมื่อปุ่มถูกคลิก
    return 'ปุ่มถูกคลิกแล้ว!' """


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000 ,debug=True)

