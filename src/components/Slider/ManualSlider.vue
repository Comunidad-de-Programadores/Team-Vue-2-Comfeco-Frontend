<template lang="pug">
.swiper-container.manual-swiper
  .swiper-wrapper
    template(v-for='item in sponsors')
      .swiper-slide(:key='item.id')
        .flex.justify-center.items-center.overflow-hidden
          a(href='#')
            img.block-inline.object-cover.w-100.h-100.mr-2.rounded-full(:src='`${item.image_url}`' :alt='`${item.name}`')
  // Add Arrows
  .swiper-button-next
  .swiper-button-prev
</template>

<script>
import Swiper, { Navigation }  from 'swiper'
Swiper.use([Navigation]);
import commonSwiperConfig from "@/utils/CommonSwiperConfig"
import sponsorService from '../../services/sponsorService'

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
    created() {
        this.getSponsors();
    },
    methods: {
          getSponsors: async function() {
            const data = await this.sponsorService.get();
            this.sponsors = data.records;
        }
    },
    data() {
        return {
            sponsorService: new sponsorService(),
            sponsors: [],
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
    updated() {
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
                    slidesPerView: 6,
                    slidesPerGroup: 6,
                },
                 1020: {
                    slidesPerView: 8,
                    slidesPerGroup: 8,
                }
            }
        });
    }
};
</script>
