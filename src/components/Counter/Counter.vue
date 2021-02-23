<template lang="pug">
    .counter-container.py-10
        .title
            h3.text-white.text-center.text-3xl.font-bold.uppercase
                | Prepárate, lo bueno está por venir
        .counter.grid.grid-cols-4.gap-2.mt-10(class='md:gap-4')
            .data.text-center
                .number.text-white.text-2xl(class='md:text-5xl 2xl:text-7xl')
                    span {{ dateFormatted.days }}
                .label.text-white.text-sm(class='md:text-2xl')
                    span Días
            .data.text-center
                .number.text-white.text-2xl(class='md:text-5xl 2xl:text-7xl')
                    span {{ dateFormatted.hours }}
                .label.text-white.text-sm(class='md:text-2xl')
                    span Horas
            .data.text-center
                .number.text-white.text-2xl(class='md:text-5xl 2xl:text-7xl')
                    span {{ dateFormatted.minutes }}
                .label.text-white.text-sm(class='md:text-2xl')
                    span Minutos
            .data.text-center
                .number.text-white.text-2xl(class='md:text-5xl 2xl:text-7xl')
                    span {{ dateFormatted.seconds }}
                .label.text-white.text-sm(class='md:text-2xl')
                    span Segundos
</template>

<script>
export default {
    props: {
        start: {
            type: String,
            default: function() {
                return new Date().toString();
            }
        },
        end: {
            type: String,
            default: function() {
                return new Date().toString();
            }
        }
    },
    data() {
        return {
            from: new Date(this.start).getTime(),
            to: new Date(this.end).getTime(),
            interval: null,
            dateFormatted: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        };
    },
    created() {
        this.interval = setInterval(() => {
            this.displayTimer();
        }, 1000);
    },
    methods: {
        displayTimer: function(typeTime = 1) {
            let now = new Date().getTime();
            let distance = this.from - now;
            let descendientFlag = typeTime ? this.to - now : now - this.to;

            if (distance < 0 && descendientFlag < 0) {
                this.from = new Date(this.dlimit).getTime();
                this.to = new Date().getTime();
                this.passed_time = typeTime == 0 ? false : true;
                clearInterval(this.interval);
                return;
            } else if (distance < 0 && descendientFlag > 0) {
                this.calulateTimeFromDistanceValue(descendientFlag);
            } else if (distance > 0 && descendientFlag > 0) {
                this.calulateTimeFromDistanceValue(distance);
            }
        },
        calulateTimeFromDistanceValue: function(distanceTime) {
            let days = Math.floor(distanceTime / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distanceTime % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distanceTime % (1000 * 60)) / 1000);
            this.dateFormatted = {
                days: this.formatString(
                    days,
                    this.getNumberOfStringCharacters(days)
                ),
                hours: this.formatString(
                    hours,
                    this.getNumberOfStringCharacters(hours)
                ),
                minutes: this.formatString(
                    minutes,
                    this.getNumberOfStringCharacters(minutes)
                ),
                seconds: this.formatString(
                    seconds,
                    this.getNumberOfStringCharacters(seconds)
                )
            };
        },
        getNumberOfStringCharacters: function(distanceTime) {
            return distanceTime.toString().length;
        },
        formatString: function(_string, quantity) {
            return ("0" + _string).slice(quantity * -1);
        }
    }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
