from flask import Flask,render_template


# '__name__' tells Flask where to look for resources like templates and static files.
app = Flask(__name__) 

@app.route("/")
def home() :
 return render_template("index.html")

@app.route("/stories")  
def stories() : 
   return render_template("stories.html")

@app.route("/history")  
def history() :
    return render_template("history.html")

@app.route("/children-stories")
def children() :
    return render_template("children.html")





# Run the Flask development server only when this file is executed directly.
if __name__ == "__main__" : 
    app.run(debug=True)