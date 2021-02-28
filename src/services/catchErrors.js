import Vue from "vue";
export default class catchErrors {
    displayErrors(errorObject, customErrors) {
        if (errorObject.errors) {
            const errors = errorObject.errors;
            let messagesErrors = []
            for (const key in errors) {
                messagesErrors.push(errors[key])
                Vue.set(customErrors, key, messagesErrors.join("<br>"));
            }
            return [false, ""];
        } else if (errorObject.messages) {
            return [true, errorObject.messages];
        }
    }
}
