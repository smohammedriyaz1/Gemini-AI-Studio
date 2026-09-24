import os
import base64


from dotenv import load_dotenv
from google import genai
from flask import Flask, render_template, request, jsonify

load_dotenv()

# from urllib import response
# from PIL import Image

key=os.getenv("Gimini_key")

if not key:
    raise ValueError("API key not found. Please set the 'Gimini_key' environment variable.")

client=genai.Client(api_key=key)

app=Flask(__name__)

@app.route("/")
def index():
   return render_template("index.html")


@app.route("/api/chat",methods=["POST"])
def text_generation():
    try:
        data=request.get_json()
        question=data.get("question","").strip()

        if not question:
            return jsonify({
                "sucess":False,
                "error":"please enter question."
            }),400
        
        response = client.interactions.create(
            model="gemini-3.8-flash",
            input=question
        )

        answer = response.output_text
        return jsonify({
            "success": True,
            "answer": answer
        })
    
    except Exception as e:
        print("Text generation error:", e)
        return jsonify({
            "success": False,
            "error": "⚠️ The AI service is temporarily busy or has reached its usage limit. Please try again later."
        }), 500

           
@app.route("/api/image", methods=["POST"])
def image_generation():

    try:
        data = request.get_json()
        prompt = data.get("prompt", "").strip()

        if not prompt:
            return jsonify({
                "success": False,
                "error": "Please enter an image prompt."
            }), 400

        response = client.interactions.create(
            model="gemini-3.1-flash-image",
            input=prompt
        )

        image_data = response.output_image.data

        if isinstance(image_data, bytes):
            image_base64 = base64.b64encode(image_data).decode("utf-8")
        else:
            image_base64 = image_data

        return jsonify({
            "success": True,
            "image": image_base64
        })

    except Exception as e:
        print("Image generation error:", e)
        return jsonify({
            "success": False,
            "error": "⚠️ Image generation failed. Please try again later."
        }), 500  
  



if __name__=="__main__":
    app.run(debug=True)




    

    

