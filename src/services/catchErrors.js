import Vue from "vue";
export default class catchErrors {
    showErrors(errors) {
        let arrErrors;

        errors["name"] !== undefined && (arrErrors = [...errors["name"]]);
        errors["email"] !== undefined && (arrErrors = [...errors["email"]]);
        errors["password"] !== undefined &&
            (arrErrors = [...errors["password"]]);
        errors["password_confirmation"] !== undefined &&
            (arrErrors = [...errors["password_confirmation"]]);
        errors["provider"] !== undefined &&
            (arrErrors = [...errors["provider"]]);
        errors["id"] !== undefined && (arrErrors = [...errors["id"]]);
        errors.length > 0 && (arrErrors = errors);

        return arrErrors;
    }

    displayErrors(errorObject, customErrors) {
        if (errorObject.errors) {
            const errors = errorObject.errors;
            for (const key in errors) {
                Vue.set(customErrors, key, errors[key].join("<br>"));
            }
            return [false, ""];
        } else if (errorObject.messages) {
            const messages = errorObject.messages;
            return [true, messages.join("<br>")];
        }
    }
}
