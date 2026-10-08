// RESERVATION FORM VALIDATION
document.addEventListener('DOMContentLoaded', function() {
    initReservationValidation();
    initNewsletterForm();
});

function initReservationValidation() {
    const form = document.getElementById('reservation-form');
    if (!form) return;

    const inputs = {
        name: document.getElementById('res-name'),
        phone: document.getElementById('res-phone'),
        email: document.getElementById('res-email'),
        guests: document.getElementById('res-guests'),
        date: document.getElementById('res-date'),
        time: document.getElementById('res-time')
    };

    const today = new Date().toISOString().split('T')[0];
    if (inputs.date) inputs.date.setAttribute('min', today);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            showNotification('Reservation submitted successfully! We will contact you shortly.', 'success');
            form.reset();
        }
    });

    Object.keys(inputs).forEach(key => {
        if (inputs[key]) {
            inputs[key].addEventListener('blur', () => validateField(key));
            inputs[key].addEventListener('input', () => clearError(key));
        }
    });

    function validateForm() {
        let isValid = true;
        Object.keys(inputs).forEach(key => {
            if (!validateField(key)) {
                isValid = false;
            }
        });
        return isValid;
    }

    function validateField(fieldName) {
        const input = inputs[fieldName];
        if (!input) return true;

        const value = input.value.trim();
        const errorElement = document.getElementById(`error-${fieldName}`);
        let errorMessage = '';

        switch(fieldName) {
            case 'name':
                if (!value) errorMessage = 'Please enter your full name';
                else if (value.length < 3) errorMessage = 'Name must be at least 3 characters';
                break;
            case 'phone':
                const phoneRegex = /^[\\d\\s\\-\\+\\(\\)]+$/;
                if (!value) errorMessage = 'Please enter your phone number';
                else if (!phoneRegex.test(value) || value.replace(/\\D/g, '').length < 10) {
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
            case 'email':
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!value) errorMessage = 'Please enter your email';
                else if (!emailRegex.test(value)) errorMessage = 'Please enter a valid email address';
                break;
            case 'guests':
                if (!value) errorMessage = 'Please select number of guests';
                break;
            case 'date':
                if (!value) errorMessage = 'Please select a date';
                else {
                    const selectedDate = new Date(value);
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);
                    if (selectedDate < now) errorMessage = 'Please select a future date';
                }
                break;
            case 'time':
                if (!value) errorMessage = 'Please select a time';
                break;
        }

        if (errorMessage) {
            showError(fieldName, errorMessage);
            return false;
        } else {
            clearError(fieldName);
            return true;
        }
    }

    function showError(fieldName, message) {
        const errorElement = document.getElementById(`error-${fieldName}`);
        const input = inputs[fieldName];
        if (errorElement) errorElement.textContent = message;
        if (input) input.style.borderColor = '#A94442';
    }

    function clearError(fieldName) {
        const errorElement = document.getElementById(`error-${fieldName}`);
        const input = inputs[fieldName];
        if (errorElement) errorElement.textContent = '';
        if (input) input.style.borderColor = '';
    }
}

   // NEWSLETTER FORM

function initNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
        }
    });
}

