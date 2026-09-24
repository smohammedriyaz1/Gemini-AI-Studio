// ==========================================
// GENERAL FUNCTIONS
// ==========================================

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// TEXT GENERATION
// ==========================================

async function generateText() {

    const question =
        document.getElementById("question").value.trim();

    const answerContainer =
        document.getElementById("answerContainer");

    const answer =
        document.getElementById("answer");

    const loading =
        document.getElementById("chatLoading");

    const error =
        document.getElementById("chatError");

    const button =
        document.getElementById("chatButton");


    // Reset

    error.classList.add("hidden");

    answerContainer.classList.add("hidden");


    // Validate

    if (!question) {

        error.textContent =
            "Please enter a question first.";

        error.classList.remove("hidden");

        return;
    }


    // Loading

    loading.classList.remove("hidden");

    button.disabled = true;

    button.textContent = "Generating...";


    try {

        const response = await fetch(
            "/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    question: question
                })
            }
        );


        const data = await response.json();


        if (!response.ok || !data.success) {

            throw new Error(
                data.error ||
                "Something went wrong."
            );

        }


        // Display answer

        answer.textContent = data.answer;

        answerContainer.classList.remove("hidden");


    } catch (err) {

        error.textContent =
            err.message;

        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

        button.disabled = false;

        button.textContent =
            "✨ Generate Answer";

    }

}


// ==========================================
// COPY ANSWER
// ==========================================

async function copyAnswer() {

    const answer =
        document.getElementById("answer").textContent;

    try {

        await navigator.clipboard.writeText(answer);

        alert("Answer copied!");

    } catch (error) {

        console.log(error);

    }

}


// ==========================================
// CLEAR CHAT
// ==========================================

function clearChat() {

    document.getElementById("question").value = "";

    document.getElementById("answer").textContent = "";

    document
        .getElementById("answerContainer")
        .classList.add("hidden");

    document
        .getElementById("chatError")
        .classList.add("hidden");

}


// ==========================================
// IMAGE PROMPT
// ==========================================

function setPrompt(prompt) {

    document.getElementById("imagePrompt").value =
        prompt;

}


// ==========================================
// IMAGE GENERATION
// ==========================================

async function generateImage() {

    const prompt =
        document.getElementById("imagePrompt").value.trim();

    const loading =
        document.getElementById("imageLoading");

    const error =
        document.getElementById("imageError");

    const container =
        document.getElementById("imageContainer");

    const image =
        document.getElementById("generatedImage");

    const button =
        document.getElementById("imageButton");


    // Reset

    error.classList.add("hidden");

    container.classList.add("hidden");


    // Validate

    if (!prompt) {

        error.textContent =
            "Please enter an image prompt first.";

        error.classList.remove("hidden");

        return;
    }


    // Loading

    loading.classList.remove("hidden");

    button.disabled = true;

    button.textContent =
        "Creating...";


    try {

        const response = await fetch(
            "/api/image",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    prompt: prompt
                })
            }
        );


        const data = await response.json();


        if (!response.ok || !data.success) {

            throw new Error(
                data.error ||
                "Image generation failed."
            );

        }


        // Display generated image

        image.src =
            "data:image/png;base64," +
            data.image;


        container.classList.remove("hidden");


    } catch (err) {

        error.textContent =
            err.message;

        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

        button.disabled = false;

        button.textContent =
            "🎨 Generate Image";

    }

}


// ==========================================
// CLEAR IMAGE
// ==========================================

function clearImage() {

    document.getElementById("imagePrompt").value = "";

    document.getElementById("generatedImage").src = "";

    document
        .getElementById("imageContainer")
        .classList.add("hidden");

    document
        .getElementById("imageError")
        .classList.add("hidden");

}


// ==========================================
// DOWNLOAD IMAGE
// ==========================================

function downloadImage() {

    const image =
        document.getElementById("generatedImage");

    if (!image.src) {
        return;
    }


    const link =
        document.createElement("a");

    link.href = image.src;

    link.download =
        "gemini-generated-image.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}