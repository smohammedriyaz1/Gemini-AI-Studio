# ✨ Gemini AI Studio

A full-stack **Generative AI web application** built with **Python, Flask, Google Gemini, HTML, CSS, and JavaScript**.

Gemini AI Studio allows users to interact with an AI model for **text generation** and create AI-generated images from natural-language prompts through a clean, responsive web interface.

---

## 🚀 Features

### 💬 AI Text Generation

* Ask questions using a simple chat interface.
* Generate AI-powered responses using Gemini.
* Displays responses dynamically without refreshing the page.
* Copy generated responses with one click.
* Handles empty inputs and API errors gracefully.

### 🎨 AI Image Generation

* Generate images from natural-language prompts.
* Uses Gemini's image-generation model.
* Displays generated images directly in the browser.
* Download generated images as PNG files.
* Includes example prompts for quick testing.

### ⚡ Interactive Frontend

* Responsive design for desktop and mobile devices.
* Loading indicators while Gemini processes requests.
* Error and usage-limit messages.
* Smooth navigation between text and image-generation sections.
* Clean dark-themed user interface.

### 🔐 Secure API Key Handling

* Gemini API key is stored in an environment variable.
* `.env` is excluded from Git using `.gitignore`.
* API credentials are never exposed in frontend JavaScript.

---

## 🛠️ Tech Stack

| Category               | Technology                 |
| ---------------------- | -------------------------- |
| Programming Language   | Python                     |
| Backend                | Flask                      |
| Generative AI          | Google Gemini API          |
| Frontend               | HTML5, CSS3, JavaScript    |
| API Communication      | REST-style Flask endpoints |
| Environment Management | python-dotenv              |
| Image Processing       | Base64                     |
| Version Control        | Git & GitHub               |

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      User           │
                    │  Web Browser        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ HTML + CSS + JS     │
                    │ Responsive UI       │
                    └──────────┬──────────┘
                               │
                         Fetch API
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
        ┌───────────────┐             ┌───────────────┐
        │ /api/chat     │             │ /api/image    │
        └───────┬───────┘             └───────┬───────┘
                │                             │
                └──────────────┬──────────────┘
                               ▼
                    ┌─────────────────────┐
                    │    Flask Backend    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Google Gemini    │
                    │       API           │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
         Text Response                 Generated Image
                │                             │
                └──────────────┬──────────────┘
                               ▼
                         Web Browser
```

---

## 📂 Project Structure

```text
Gemini-AI-Studio/
│
├── app.py
├── .env
├── .gitignore
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js
```

> `.env` is intentionally excluded from GitHub because it contains the Gemini API key.

---

## 🔑 Environment Setup

Create a `.env` file in the project root:

```env
Gimini_key=YOUR_GEMINI_API_KEY
```

Replace:

```text
YOUR_GEMINI_API_KEY
```

with your actual Gemini API key.

### ⚠️ Security

Never commit your `.env` file to GitHub.

The project includes:

```gitignore
.env
```

inside `.gitignore` to prevent accidentally uploading your API key.

---

## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Gemini-AI-Studio.git
```

Move into the project:

```bash
cd Gemini-AI-Studio
```

---

### 2. Create a virtual environment

Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

For Git Bash:

```bash
source venv/Scripts/activate
```

---

### 3. Install dependencies

```bash
pip install flask python-dotenv google-genai
```

---

### 4. Configure the API key

Create:

```text
.env
```

Add:

```env
Gimini_key=YOUR_GEMINI_API_KEY
```

---

### 5. Run the application

```bash
python app.py
```

The application will start locally.

Open:

```text
http://127.0.0.1:5000
```

---

## 🔌 API Endpoints

### Text Generation

```text
POST /api/chat
```

Request:

```json
{
    "question": "Explain Retrieval Augmented Generation"
}
```

Example response:

```json
{
    "success": true,
    "answer": "Retrieval Augmented Generation..."
}
```

---

### Image Generation

```text
POST /api/image
```

Request:

```json
{
    "prompt": "A futuristic city with flying cars at sunset"
}
```

The backend generates the image and returns the image data to the frontend.

---

## 🧠 How It Works

### Text Generation

1. User enters a question.
2. JavaScript captures the input.
3. `fetch()` sends the question to Flask.
4. Flask receives the request at `/api/chat`.
5. Flask sends the prompt to Gemini.
6. Gemini generates the response.
7. Flask returns the result as JSON.
8. JavaScript displays the answer without refreshing the page.

```text
User
 ↓
JavaScript
 ↓
POST /api/chat
 ↓
Flask
 ↓
Gemini API
 ↓
AI Response
 ↓
JavaScript
 ↓
Browser
```

---

### Image Generation

1. User enters an image prompt.
2. JavaScript sends the prompt to `/api/image`.
3. Flask sends the prompt to Gemini.
4. Gemini generates an image.
5. The image data is returned to Flask.
6. Flask returns the image data to the browser.
7. JavaScript converts it into a browser-displayable image.
8. The generated image is displayed on the page.

```text
Prompt
 ↓
JavaScript
 ↓
Flask
 ↓
Gemini Image Model
 ↓
Generated Image
 ↓
Base64
 ↓
Browser
```

---

## 🖼️ Example Prompts

### Text

```text
What is Retrieval Augmented Generation?
```

```text
Explain machine learning to a beginner.
```

```text
Explain the difference between supervised and unsupervised learning.
```

### Image

```text
A futuristic city with flying cars at sunset
```

```text
A cute robot drinking coffee in a modern cafe
```

```text
A nano banana dish in a fancy restaurant with a Gemini theme
```

---

## 🎯 Key Learning Outcomes

This project demonstrates practical experience with:

* Generative AI application development
* Large Language Model API integration
* AI-powered text generation
* AI image generation
* Flask backend development
* REST API concepts
* Asynchronous JavaScript
* Frontend-backend communication
* JSON request/response handling
* Environment variables
* API security fundamentals
* Base64 image handling
* Responsive web development
* Error handling
* Git and GitHub

---

## 💡 Technical Highlights

### Backend

The Flask application provides dedicated API endpoints:

```python
@app.route("/api/chat", methods=["POST"])
```

and:

```python
@app.route("/api/image", methods=["POST"])
```

This separates the frontend interface from the AI processing logic.

### Frontend

JavaScript uses the Fetch API to communicate with Flask asynchronously:

```javascript
const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        question: question
    })
});
```

This allows AI responses to be displayed without reloading the page.

---

## 🛡️ Error Handling

The application handles common failures including:

* Empty user input
* Gemini API errors
* API usage limits
* Temporary service failures
* Invalid requests
* Image-generation failures

Users receive a friendly error message instead of seeing a raw server error.

---

## 📱 Responsive Design

The interface is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

CSS media queries are used to adapt the layout for smaller screens.

---

## 🔒 Security Considerations

The project follows basic API-key security practices.

### API key is stored in:

```text
.env
```

### `.env` is excluded using:

```gitignore
.env
```

### The API key is never placed in:

```text
index.html
style.css
script.js
```

This prevents accidentally exposing the API credential in the frontend.

---

## 🚀 Future Improvements

Planned improvements include:

* [ ] Conversation history
* [ ] Streaming AI responses
* [ ] Markdown rendering
* [ ] Code syntax highlighting
* [ ] User authentication
* [ ] Chat history database
* [ ] Multiple AI model selection
* [ ] Prompt history
* [ ] Image gallery
* [ ] Image prompt enhancement
* [ ] Rate-limit tracking
* [ ] Production deployment
* [ ] Docker support
* [ ] Cloud deployment

---

## 📸 Screenshots

Add screenshots of your application here after running it locally.

Example:

```text
screenshots/
├── home.png
├── text-generation.png
└── image-generation.png
```

Then add them to this section:

```markdown
![Home Page](screenshots/home.png)

![Text Generation](screenshots/text-generation.png)

![Image Generation](screenshots/image-generation.png)
```

---

## 👨‍💻 Developer

**Shaik Mohammed Riyaz**

AI/ML Engineer | Generative AI Developer | Java Developer

Interested in:

* Artificial Intelligence
* Machine Learning
* Generative AI
* Retrieval Augmented Generation
* Full-Stack Development
* Software Engineering

---

## 📌 Project Purpose

This project was developed to gain practical experience in building and integrating **Generative AI capabilities into a full-stack web application**.

It demonstrates how a Python Flask backend can communicate with a modern AI model and expose AI functionality through an interactive JavaScript frontend.

---

## ⭐ If You Find This Project Useful

Consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is available for educational and portfolio purposes.
