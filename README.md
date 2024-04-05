# Client-Side Form Validation Project

This project aims to demonstrate client-side form validation using HTML, CSS, and JavaScript. The form consists of various fields including email, country, zip code, password, and password confirmation. The validation process ensures that the provided information meets certain criteria before allowing submission.

## Features

- Validates email format.
- Validates country selection.
- Validates zip code format.
- Validates password strength.
- Ensures password confirmation matches the original password.
- Provides visual feedback on the validity of each field.
- Displays a success message upon successful validation.

## Usage

1. Clone or download this repository to your local machine.
2. Open `index.html` in a web browser.

## File Structure

- `index.html`: Contains the HTML structure of the form.
- `styles.css`: Provides styling for the form and validation feedback.
- `script.js`: Implements the client-side form validation logic.

## Validation Logic

- **Email**: Validates whether the email address follows the standard format (e.g., example@email.com).
- **Country**: Ensures that a country is selected from the dropdown list.
- **Zip Code**: Validates the format of the zip code based on the country selected.
- **Password**: Checks for password strength (e.g., minimum length, combination of characters).
- **Password Confirmation**: Verifies that the password confirmation matches the original password.
- **Visual Feedback**: Changes the outline color of each field to red if invalid and green if valid.

## Note

This project does not involve server-side processing. The submission button does not send any information to a server. Instead, it prompts a success message upon successful validation.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
