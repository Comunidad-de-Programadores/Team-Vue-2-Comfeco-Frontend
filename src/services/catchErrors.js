import Vue from "vue";
export default class catchErrors {
    displayErrors(errorObject, customErrors) {
        if (errorObject.errors) {
            const errors = errorObject.errors;
            for (const key in errors) {
                let messagesErrors = [];
                messagesErrors.push(errors[key]);
                Vue.set(customErrors, key, messagesErrors.join("<br>"));
            }
            return [false, ""];
        } else if (errorObject.messages) {
            return [true, errorObject.messages.join("<br>")];
        } else if (errorObject.message) {
            return [true, errorObject.message];
        }
    }
}
