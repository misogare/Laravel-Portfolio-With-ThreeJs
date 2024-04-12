# LaraVision Portfolio

## Description

LaraVision Portfolio is an interactive 3D portfolio application built using Laravel and Three.js. This project leverages pre-made 3D model designs stored in GLTF format within the `public` folder. GLTF is a compressed version of traditional 3D model formats like FBX, offering efficient loading and handling of complex models.

The Three.js script, responsible for all 3D model interactions, is located in `resources/js/portfolio.js`. When you run `npm run dev`, Vite provides hot module replacement (HMR), which automatically updates the portfolio page as you make changes to `portfolio.js`—no need to reload or restart your service.

The application's structure follows the MVC pattern. Navigation between pages is handled by Laravel's routing, with `home.blade.php` redirecting to `portfolio.blade.php`. There are two main controllers: `HomeController` and `PortfolioController`, which manage the respective views.

If you are new to Laravel and need to modify or add new pages, it is recommended to check the Laravel documentation to understand how to work with views, routes, and controllers effectively.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- PHP >= 7.3
- Node.js >= 12.x
- Composer

## Note 
click on the icon in the windows 7 screen to be able to see the portfolio website which is fetched to mine [MESVAK.SOFTWARE](https://mesvak.software/)
![image](https://github.com/misogare/Laravel-Portfolio-With-ThreeJs/assets/130363781/5b4edac9-6159-429b-9b7b-7314eaa6d5b4)

## Installation

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/laravision-portfolio.git
   cd laravision-portfolio
    ```

2. **Install PHP dependencies:**
  ```bash
   composer install
  ```

3. **Install JavaScript dependencies:**
  ```bash
   npm install
   ```

4. **Compile assets with Vite:**
   ```bash
   npm run dev  # For development
   npm run build  # For production
   ```

5. **Copy the example environment file and make the required configuration changes in the .env file:**
  ```bash
   cp .env.example .env
  ```

6. **Generate a new application key:**
  ```bash
   php artisan key:generate
   ```

7. **Run the database migrations (Set the database connection in .env before migrating)**
 ```bash
   php artisan migrate
 ```

8. **Start the local development server:**
  ```bash
   php artisan serve
  ```

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

MESVAK – [@mesvak](https://www.instagram.com/mesvak/) - [mesvak](https://t.me/mesvak) - MESVAKC@GMAIL.COM

Project Link: [lARAVISION](https://github.com/misogare/Laravel-Portfolio-With-ThreeJs)
