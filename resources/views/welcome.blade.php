<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aria Shobeiri Portfolio Showcase 2024</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body, html {
            height: 100%;
            margin: 0;
            background-color: #000;
            color: #fff;
            font-family: 'Roboto', sans-serif;
        }
        .center-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            padding: 20px;
            border: 2px solid #fff;
            border-radius: 10px;
        }
        .start-btn {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
            text-decoration: none;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .start-btn:hover {
            background-color: #0056b3;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fade-in {
            animation: fadeIn 2s;
        }
    </style>
</head>
<body>
    <div class="center-box fade-in">
        <h1>Aria Shobeiri Portfolio Showcase 2024</h1>
        <p>Let's start</p>
        <a href="/portfolio" class="start-btn">Start</a>
    </div>
</body>
</html>
