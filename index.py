from flask import Flask, render_template, request, g, flash, request, redirect, url_for
import sqlite3

app = Flask(__name__)
app.secret_key = "REGISTRO2023"
app.config['DATABASE'] = 'facturacion.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
    return db

@app.teardown_appcontext
def close_db(error):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/datos_facturacion')
def datos_facturacion():
    return render_template('datos_facturacion.html')

@app.route('/datos_facturacion1', methods=['POST'])
def datos_facturacion1():
    db = get_db()
    cursor = db.cursor()
    turno = request.form['turno']
    cedula = request.form['cedula']
    nombre = request.form['nombre']
    telefono = request.form['telefono']
    direccion = request.form['direccion']
    email = request.form['email']
    if turno == "" or cedula == "" or nombre == "" or telefono == "" or direccion == "" or email == "":
        flash('Recuerde llenar todos los datos')
        return redirect(url_for('datos_facturacion'))
    cursor.execute('INSERT INTO facturacion (turno, cedula, nombre, telefono, direccion, email) VALUES (?, ?, ?, ?, ?, ?)', (turno, cedula, nombre, telefono, direccion, email))
    db.commit()
    return render_template('datos_completo.html')


@app.route('/consulta_turnos')
def consulta_turnos():
    db = get_db()
    cursor = db.cursor()

    # Obtener todas las filas de la tabla de facturación
    cursor.execute('SELECT * FROM facturacion')
    facturas = cursor.fetchall()

    return render_template('consulta_turnos.html', facturas=facturas)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
