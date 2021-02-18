export default class catchErrors {
    showErrors(errors){
        let arrErrors

        (errors["name"] !== undefined) &&  (arrErrors = [ ...errors["name"] ]);
        (errors["email"] !== undefined) &&  (arrErrors = [ ...errors["email"] ]);
        (errors["password"] !== undefined) &&  (arrErrors = [ ...errors["password"] ]);
        (errors["password_confirmation"] !== undefined) &&  (arrErrors = [ ...errors["password_confirmation"] ]);
        (errors["provider"] !== undefined) &&  (arrErrors = [ ...errors["provider"] ]);
        (errors["id"] !== undefined) &&  (arrErrors = [ ...errors["id"] ]);
        (errors.length > 0) && (arrErrors = errors);

        return arrErrors
    }
}
