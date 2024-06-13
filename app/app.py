from re import escape
from flask import Flask, jsonify, request
import mysql.connector
import os
from flask import Flask

from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)



# เชื่อมต่อฐานข้อมูล MySQL โดยใช้ค่าคงที่
mydb = mysql.connector.connect(
  host="db",
  user="root",
  password="12345",
  database="books_system"
)

mycursor = mydb.cursor()

@app.route('/B')
def get_buy_data():
    mycursor.execute("SELECT * FROM b_listpay JOIN b_customer ON b_listpay.Customer_Pay = b_customer.ID")
    results = mycursor.fetchall()
    data2 = [{'a':row[14],'b':row[3]}for row in results]
    return jsonify(data2)


@app.route('/data', methods=['GET'])
def get_all_data():
    mycursor.execute("SELECT * FROM `b_books`")
    result2 = mycursor.fetchall()
    data0 = [{'name': row[3], 'price book': row[16], 'store book': row[19]} for row in result2]
    return jsonify(data0)


@app.route('/')
def name():
    return "YORNNAME....>>"


@app.route('/data/<book>')
def get_data_name(book):
    mycursor.execute("SELECT * FROM `b_books`")
    result = mycursor.fetchall()
    if (escape(book) == 'books'):   
        data1 = [{f'Name Book' : row[3] + ' (' + row[4] + ')' , 'BookID' : row[0] , 'Price' : row[16]} for row in result]
    elif (escape(name) == 'barcode'):
        data1 = [{f'Name Book' : row[3] + ' (' + row[4] + ')' , 'BookID' : row[0] , 'Bracode' : row[8] , 'Brscode Ebook' : row[9]} for row in result]
    else:
        return "<<<End>>>"
    
    return jsonify(data1)

@app.route('/<name>')
def hello(name):
    return f"WELLOME > {escape(name)}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

