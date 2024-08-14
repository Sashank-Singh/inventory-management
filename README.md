# Inventory Management App

This is a simple inventory management application built with React and Firebase. It allows users to manage inventory items by adding, incrementing, and removing items.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Add Items:** Add new items to the inventory with a quantity of 1.
- **Increment Items:** Increment the quantity of existing items.
- **Remove Items:** Decrement the quantity of items or remove them completely when the quantity reaches 0.
- **Real-time Updates:** All operations are synced with Firebase in real-time.

## Installation

### Prerequisites

- Node.js and npm should be installed on your machine.
- A Firebase project setup with Firestore.

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Sashank-Singh/inventory-management.git
    ```

2. Navigate to the project directory:

    ```bash
    cd inventory-management
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up Firebase:

   - Create a Firebase project and enable Firestore.
   - Get your Firebase configuration from the Firebase console and replace the placeholder values in the `firebase.js` file.

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open the app in your browser at `http://localhost:3000`.

## Usage

- Click "Add New Item" to add an item to your inventory.
- Use the "Increment" button to increase the quantity of an item.
- Use the "Remove" button to decrease the quantity of an item. If the quantity reaches 0, the item is removed from the inventory.

## Technologies Used

- **Frontend:** React, Next.js, Material-UI
- **Backend:** Firebase Firestore
- **Styling:** CSS with Material-UI components

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or additions.

## Contact

If you have any questions or feedback, feel free to contact me:

- **Name:** Sashank Singh
- **Email:** singhsashank08@gmail.com
- **GitHub:** [Sashank-Singh](https://github.com/Sashank-Singh)

