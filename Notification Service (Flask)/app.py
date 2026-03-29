from flask import Flask, request, jsonify

app = Flask(__name__)

# Root health-check route
@app.route('/', methods=['GET'])
def health_check():
    return "✅ Notification Service is running"

# Notification endpoint
@app.route('/notify', methods=['POST'])
def notify():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Log notification (in real-world, you’d send email/SMS/etc.)
    print("📩 Notification received:", data)

    return jsonify({"message": "Notification sent successfully", "data": data})

if __name__ == '__main__':
    # Run on all interfaces, port 5000
    app.run(host='0.0.0.0', port=5000)
