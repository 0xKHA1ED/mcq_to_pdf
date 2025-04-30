# 📚 Flask MCQ Viewer

A simple Flask web application designed to display multiple-choice questions (MCQs) organized by chapters. Currently, it serves as a static viewer for predefined question data.

## ✨ Features (Current)

*   **TODO:** TODO

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Python 3.7+
*   pip (Python package installer)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/0xKHA1ED/mcq_to_pdf.git
    cd mcq_to_pdf
    ```

2.  **Create and activate a virtual environment (recommended):**
    ```bash
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Install dependencies:**
    
    ```bash
    pip install -r requirements.txt
    ```

4.  **Prepare your data:**
    Ensure you have your question data structured correctly (likely in a Python dictionary or loaded from a file like `data.json`) and that it's passed to the template rendering function in your Flask route. The structure should match what the template expects (`data.chapters`, `chapter.chapterNumber`, `chapter.questions`, etc.).

5.  **Run the Flask application:**
    ```bash
    python app.py
    ```

6.  **Access the application:**
    Open your web browser and navigate to `http://127.0.0.1:5000/`

## 💻 Technology Stack

*   **Backend:** Python, Flask
*   **Frontend:** HTML, CSS
*   **Templating:** Jinja2

## 📝 TODO / Future Enhancements

Here's a list of planned improvements and features:

*   [ ] **Use SCSS:** Refactor CSS using SCSS for better organization, variables, nesting, and maintainability.
*   [ ] **Authentication System:** Implement user registration and login functionality.
*   [ ] **Answer Submission:** Allow logged-in users to select and submit their answers to the questions.
*   [ ] **Answer Checking & Scoring:** Implement logic to check submitted answers against correct answers and provide feedback or scores.
*   [ ] **Admin Panel:** Create an interface for administrators to manage chapters, questions, answers, and potentially users.
*   [ ] **Database Integration:** Store questions, user data, and submissions in a database (e.g., SQLite, PostgreSQL) instead of a static file.
*   [ ] **More Routes:** Add routes for user profiles, results pages, admin actions, etc.
*   [ ] **Improve UI/UX:** Enhance the user interface and overall user experience.
*   [ ] **Testing:** Add unit and integration tests.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a feature suggestion.