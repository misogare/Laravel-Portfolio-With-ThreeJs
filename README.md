# LaraVision Portfolio

## Description

LaraVision Portfolio is a portfolio application built using Laravel and Three.js. This project was inspired by a similar web app, and it aims to showcase creative works in an interactive 3D environment.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- PHP >= 7.3
- Node.js >= 12.x
- Composer

## Note 
click on the icon in the windows 7 screen to be able to see the portfolio website which is fetched to mine [MESVAK.SOFTWARE](MESVAK.SOFTWARE)
![image](https://github.com/misogare/Laravel-Portfolio-With-ThreeJs/assets/130363781/5b4edac9-6159-429b-9b7b-7314eaa6d5b4)

## Installation

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/laravision-portfolio.git
   cd laravision-portfolio
   ~~~

2. **Install PHP dependencies:**
  ```bash
   composer install
   ~~~

3. **Install JavaScript dependencies:**
  ```bash
   npm install
   ~~~

4. **Compile assets with Vite:**
   ```bash
   npm run dev  # For development
   npm run build  # For production
   ~~~

5. **Copy the example environment file and make the required configuration changes in the .env file:**
  ```bash
   cp .env.example .env
   ~~~

6. **Generate a new application key:**
  ```bash
   php artisan key:generate
   ~~~

7. **Run the database migrations (Set the database connection in .env before migrating)**
 ```bash
   php artisan migrate
   ~~~

8. **Start the local development server:**
  ```bash
   php artisan serve
   ~~~

## Usage

After installation, you can open your web browser and visit `http://localhost:8000` to view the application.

## Credits

This project makes use of several open-source packages and resources:
- Laravel (https://laravel.com)
- Three.js (https://threejs.org)
- Vite (https://vitejs.dev)
- Inspiration from [Henry Hefferman] (https://henryheffernan.com/)
- The modules [shedmon] (https://sketchfab.com/shedmon)
- The modules [Anthony Yanez ] (https://sketchfab.com/paulyanez)
- The modules [1056878 )] (https://sketchfab.com/1056878
- The modules [edArieL]  (https://sketchfab.com/edArieL)
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name – [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/yourusername/laravision-portfolio]([https://github.com/yourusername/laravision-portfolio](https://github.com/misogare/Laravel-Portfolio-With-ThreeJs))
