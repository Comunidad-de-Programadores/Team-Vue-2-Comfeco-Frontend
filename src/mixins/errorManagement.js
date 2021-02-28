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
            let errorsManagment = this.errorService.displayErrors( error, this.customErrors );

            (!errorsManagment[0]) && (this.errors = Object.values(this.customErrors)[Object.values(this.customErrors).length - 1 ]);
            (errorsManagment[0]) && (this.errors = errorsManagment[1]);

            this.submitStatus = "ERROR";
            
            this.$toast.open({
                message: this.errors,
                type: "error"
            });
        }
    }
};
