// 8. Розробіть міксін, який додає валідацію для форми в компоненті.

export const validationMixin = {
    data() {
      return {
        errors: {}
      };
    },
    methods: {
      validateForm(formData) {
        const errors = {};
  
        if (!formData.name) {
          errors.name = 'Login is empty';
        }

        if (!formData.password) {
          errors.password = 'Password is empty';
        } else if (formData.password.length > 8) {
          errors.password = 'Password must be 8 characters long';
        }
  
        this.errors = errors;
  
        return Object.keys(errors).length === 0;
      }
    }
  };