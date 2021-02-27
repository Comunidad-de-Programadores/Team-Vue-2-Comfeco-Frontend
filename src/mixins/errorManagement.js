import catchErrors from "@/services/catchErrors";
export default {
    data() {
        return {
            errorService: new catchErrors(),
            errors: "",
            customErrors: {}
        };
    },

    methods: {
        showErrors: function(error) {
            let errorsManagment = this.errorService.displayErrors(
                error.response.data,
                this.customErrors
            );
            if (errorsManagment[0]) {
                this.errors = errorsManagment[1];
            }

            this.submitStatus = "ERROR";
            this.$toast.open({
                message: "Hubo un error",
                type: "error"
            });
        }
    }
};
