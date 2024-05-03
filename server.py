from flask import Flask, redirect, url_for
from flask import render_template
from flask import Response, request, jsonify, json
app = Flask(__name__)


# ROUTES

@app.route('/')
def home():
   return render_template('home.html')   

@app.route('/learn/<int:lesson_number>')
def learn(lesson_number):
    return render_template('learn.html', lesson_number=lesson_number)

@app.route('/quiz/<int:question_number>')
def quiz(question_number):
    return render_template('quiz_questions.html', question_number=question_number)

@app.route('/quiz')
def quiz_home():
    return render_template('quiz_home.html')

@app.route('/quiz_results')
def quiz_results():
    score = request.args.get('score')
    score = int(score)  # Convert to integer
    return render_template('quiz_results.html', score=score)

@app.route('/info/<item>')
def get_info(item):
    # Here you would retrieve the information for the given item from your data source
    # For demonstration purposes, let's just return some hardcoded info
    info = {
        'Stern': "The rear of the boat; the direction the rowers are facing.",
        'Rigger': "The triangular metal device that is bolted onto the side of the boat and holds the oars.",
        'Seat': "Where the rower sits! In larger boats, the seats are numbered bow to stern.",
        'Deck': "The part of the shell at the bow and stern that is covered with fiberglass cloth or a thin plastic.",
        'Bow': "The forward section of the boat; the first part to cross the finish line. The rubber piece on the bow is called the bow ball.",
        'Footstretcher': "Where the rowers' feet go. The stretcher consists of two inclined footrests that hold the rower's shoes. The rower's shoes are bolted into the footrests.",
        'Oarlock': "A  brace that attaches an oar to a boat"
    }
    return jsonify(info.get(item, ''))



if __name__ == "__main__":
    app.run(port=8000, debug=True)





