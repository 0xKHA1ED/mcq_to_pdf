from flask import Flask, send_file, render_template
import json
import subprocess

app = Flask(__name__)


@app.route('/generate-pdf')
def generate_pdf():
    pdf_output_path = 'output.pdf'
    url = 'http://localhost:5000/'

    try:
        subprocess.run([
            'node', 'generate.js', url, pdf_output_path
        ], check=True)

        return send_file(pdf_output_path, as_attachment=True)

    except subprocess.CalledProcessError as e:
        return f"Error generating PDF: {e}", 500


@app.route('/')
def home():
    with open('mcq.json', encoding='utf-8') as f:
        data = json.load(f)

    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run(debug=True)
