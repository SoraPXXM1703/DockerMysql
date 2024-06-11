from re import escape
from flask import Flask, jsonify, request
import mysql.connector
import os
from flask import Flask

from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)
""" 
# เชื่อมต่อฐานข้อมูล MySQL โดยใช้ค่าคงที่
mydb = mysql.connector.connect(
  host="0.0.0.0",
  user="root",
  password="root",
  database="books_system"
) """

# สร้าง Cursor object เพื่อทำงานกับ MySQL
""" mycursor = mydb.cursor()
 """
# Endpoint สำหรับดึงข้อมูลทั้งหมดจากฐานข้อมูล
""" @app.route('/data', methods=['GET'])
def get_all_data():
    mycursor.execute("SELECT * FROM your_table")
    result = mycursor.fetchall()
    data = [{'id': row[0], 'name': row[1]} for row in result]
    return jsonify(data)
 """

@app.route('/')
def name():
    return "YORNNAME....>>"

@app.route('/<name>')
def hello(name):
    return f"♟︎WELLOME > {escape(name)}"



""" # กำหนดการเชื่อมต่อ MySQL
mydb = mysql.connector.connect(
    host="db",
    user="root",
    password="12345",  # รหัสผ่าน MySQL root user
    database="books_system"   # ชื่อฐานข้อมูลที่คุณต้องการเชื่อมต่อ
)

@app.route('/users', methods=['GET'])
def get_users():
    cursor = mydb.cursor()
    cursor.execute("SELECT * FROM users")
    result = cursor.fetchall()
    return jsonify(result) """
    



""" app = Flask(__name__)


books = {"title": "หนังสือทดสอบ", "price": 100, "buyer": "John Doe"}


@app.route('/books', methods=['GET'])
def get_books():
    return jsonify({'books': books})

@app.route('/books', methods=['POST'])
def add_book():
    book_data = request.get_json()
    books.append(book_data)
    return jsonify({'message': 'Book added successfully'})
 """

""" @app.route('/')
def name():
    return "YORNNAME....>>"

@app.get('/login')
def login_get():
    return show_the_login_form()

@app.post('/login')
def login_post():
    return do_the_login()



@app.route('/<name>')
def hello(name):
    return f"♟︎WELLOME > {escape(name)}"

@app.route('/<int:id>')
def id(id):
    return f"♟︎Id >>> {escape(id)}"


@app.route('/data')
def get_data():
    return "data Mysql2003" """




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)






#ตัวนี้ยังไม่ทดลองใช้งาน

""" from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

# เชื่อมต่อฐานข้อมูล MySQL โดยใช้ค่าคงที่
mydb = mysql.connector.connect(
  host="db",
  user="your_user",
  password="your_password",
  database="your_database"
)

# สร้าง Cursor object เพื่อทำงานกับ MySQL
mycursor = mydb.cursor()

# Endpoint สำหรับดึงข้อมูลทั้งหมดจากฐานข้อมูล
@app.route('/data', methods=['GET'])
def get_all_data():
    mycursor.execute("SELECT * FROM your_table")
    result = mycursor.fetchall()
    data = [{'id': row[0], 'name': row[1]} for row in result]
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
 """