<template>
    <div class="swiper-container manual-swiper">
        <div class="swiper-wrapper">
            <template v-for="item in items">
                <div class="swiper-slide" :key="item.id">
                    <div class="flex justify-center items-center">
                        <a href="#">
                            <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
                        </a>
                    </div>
                </div>
            </template>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
import Swiper, { Navigation }  from 'swiper'
Swiper.use([Navigation]);
import commonSwiperConfig from "@/utils/CommonSwiperConfig"
import "swiper/swiper-bundle.css"
export default {
    name: "ManualSlider",
    props: {
        defaultItems: {
            type: Object,
            required: false,
            default: () => {}
        }
    },
    data() {
        return {
            items: [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ],
        }
    },
    mounted() {
        new Swiper('.manual-swiper', {
            ...commonSwiperConfig,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                110: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                480: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                720: {
                    slidesPerView: 8,
                    slidesPerGroup: 8,
                }
            }
        });
    }
};
</script>
