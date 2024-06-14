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
  database="books_system",
  charset='utf8mb4',
  collation='utf8mb4_unicode_ci'
)

mycursor = mydb.cursor()
#jion
@app.route('/data/namebook')
def get_buy_book():#SELECT * FROM b_books JOIN b_listpay ON b_books.Barcode = b_listpay.Barcode
    mycursor.execute("SELECT * FROM b_books JOIN b_listpay ON b_listpay.Barcode = b_books.Barcode")
    results = mycursor.fetchall()
    b_name_dict = defaultdict(list)
    for row in results:
        b_name_dict[row[7]].append((row[3] + ' --> ' + row[4]))
    return jsonify(b_name_dict)


@app.route('/data/buy/book/<barcode>')
def get_book_barcode(barcode):
    mycursor.execute("SELECT * FROM b_books JOIN b_listpay ON b_books.Barcode = b_listpay.Barcode")
    resulits = mycursor.fetchall()
    b_barcode_dict = defaultdict(list)
    for row in resulits:
        if row[7] == escape(barcode):
            b_barcode_dict[row[7]].append(row[3]) 
    return jsonify(b_barcode_dict)    


@app.route('/data/buy/barcodes')
def list_id_barcodes():
    mycursor.execute("SELECT * FROM b_listpay JOIN b_customer ON b_listpay.Customer_Pay = b_customer.ID Where b_customer.Status = 'c'")
    results = mycursor.fetchall()
    id_barcodes_dict = defaultdict(list)
    for row in results:
        id_barcodes_dict[row[14]].append(row[3])
    return jsonify(id_barcodes_dict)


@app.route('/data/buy/barcodes/<user>')
def list_user(user):
    mycursor.execute("SELECT * FROM b_listpay JOIN b_customer ON b_listpay.Customer_Pay = b_customer.ID")
    results = mycursor.fetchall()
    id_user_dict = defaultdict(list)
    for row in results:
        if row[14] == escape(user):
            id_user_dict[row[14]].append(row[3])
    return jsonify(id_user_dict)


@app.route('/data/buy')
def get_buy_data():
    mycursor.execute("SELECT * FROM b_listpay JOIN b_customer ON b_listpay.Customer_Pay = b_customer.ID")
    results = mycursor.fetchall()
    data2 = [{'a':row[14],'b':row[3]}for row in results]
    return jsonify(data2)



#book
@app.route('/data', methods=['GET'])
def get_all_data():
    mycursor.execute("SELECT * FROM `b_books`")
    results = mycursor.fetchall()
    data0 = [{'name': row[3], 'price book': row[16], 'store book': row[19]} for row in results]
    return jsonify(data0)

@app.route('/data/<book>')
def get_data_name(book):
    mycursor.execute("SELECT * FROM `b_books`")
    results = mycursor.fetchall()
    data1 = []
    if (escape(book) == 'books'):   
        data1 = [{f'Name Book' : row[3] + ' (' + row[4] + ')' , 'BookID' : row[0] , 'Price' : row[16]}for row in results]
    """ elif (escape(book) == 'book'):
        data1 = [{f'Name Book' : row[3] + ' (' + row[4] + ')' , 'BookID' : row[0] , 'Bracode' : row[8] , 'Barcode Ebook' : row[9]}for row in results] """
    return jsonify(data1)



#test 
@app.route('/helo')
def name():
    return "YORNNAME....>>"


@app.route('/<name>')
def hello(name):
    return f"WELLOME > {escape(name)}"


@app.route('/')
def index():
    return render_template('index.html')

""" @app.route('/test/b', methods=['POST'])
def button_clicked():
    # ทำสิ่งที่ต้องการเมื่อปุ่มถูกคลิก
    return 'ปุ่มถูกคลิกแล้ว!' """


""" 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80) """

