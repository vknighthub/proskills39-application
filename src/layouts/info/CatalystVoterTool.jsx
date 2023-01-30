import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NiceSelect from "./../../components/styles/NiceSelect";
import Paggination from "./../../components/styles/Paggination";
import { categoriesBar } from "./../../components/styles/sliderProps";
import Catalyst from './Catalyst';


const CatalystVoterTool = ({

}) => {


    const [active, setActive] = useState(0)
    let sort = 8

    return (

        <div className="primary-content-area container content-padding">
            <div className="page-title-section">
                <h2>
                    <span className="gradient-text">Catalyst</span> Voter Tool
                </h2>
                <div className="display-mode-links">
                    <a href="#">
                        <svg className="crumina-icon">
                            <use xlinkHref="#big-grid-icon" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg className="crumina-icon">
                            <use xlinkHref="#small-grid-icon" />
                        </svg>
                    </a>
                </div>
            </div>
            {/*  CATEGORIES BAR */}
            <Swiper {...categoriesBar} className="categories-bar">
                <div className="categories-nav">
                    <a href="#" className="arrow arrow-left swiper-button-prev">
                        <svg className="crumina-icon">
                            <use xlinkHref="#arrow-left2-icon" />
                        </svg>
                    </a>
                    <a href="#" className="arrow arrow-right swiper-button-next">
                        <svg className="crumina-icon">
                            <use xlinkHref="#arrow-right2-icon" />
                        </svg>
                    </a>
                </div>
                <div className="categories-wrapper swiper-wrapper">
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 15"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={15}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAMAAADarb8dAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABJlBMVEUAAAAHBwIGBgFeWh5hXB8AAAAAAAAAAABGRRlNTBsAAAAAAAAAAAAAAAA2MxRDPxhWUhxvaCJYVBxDQBc4NRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBwIiIQ8gHw4dHA4qKRJTUBw5NxUAAAAAAAA0MRRaVx0AAAAXFwwTEgoSEgkYFwwAAADb10Hi30P//026tTfBvDqooTL990n67Ub560X++kqspjNxaiODfCf//1H//07460b36EX//k2KgymDfCj89kn15kT36UX36kb89Un//09zbiT//0z770f26UX67kf//0t6dSaXjy2fli+imS/250X99kn89UiqoTLPxDv17Uf17UbYzD21qTOvpDLd0z/c0T////94mbd0AAAAMXRSTlMAiI30/ARmbtviBoCHirrA5P7mwryNkJZcYlJZWkhReIGjwb2tz+VWT+HXFNN5btYbkRoxqQAAAAFiS0dEYbKwTIYAAAAHdElNRQflCBcRBClM2ZBZAAAAsElEQVQI12NggABGJgZUwMzCisJnMzRiRxHgMDbm5ELic5sYG5vyQNi8fPwCgmbmFpZW1jZCwiKiDGK2dvbGxg6Ojg5O9vZ2zuIMDBIu9q5u7u7uHm6eXs6SIE1S3j6+7u5+7v4BgdIQY2SCjN39PNyNgyWhdsiG+ISGhYcaR8hBBeQjfeyjou19YhSgAorG9rFKynHG9ipQAdV4NXUGBg3NBC0IX1tHF8LQ0zdgYAAAyDUbCStlsFYAAAAASUVORK5CYII="
                                />
                            </svg>
                            All Items
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Featured")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 13"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={13}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAMAAACXZR4WAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABj1BMVEUAAAAEBwdUdJNLZ4MZHyUPExUNEhUiJihlfI1rhpoTFhkJCw8VGSAAAAAAAAADBgYMDQ8vP1BAT10AAABCW3JacH4AAAAAAAAAAAAKDA4OERQnND81QEkAAAAcIysrMDIAAAAGBggdJS0kLDMKCQcAAAAAAAAAAAA2Sl1RZHNrlby2//+Mxe9fhK58ruBghqJdg5+Bs+R3mbq35Pfk//+iyt9AWG9wncc/VmwUGBw3S19xnsk8Umc7UGRwnckxR14UGR1QYm+RttJfdolghalfhKciLTZdgaJhh6tcgKM3S101SFphhqpXfKIiLDZ8ma5/n7i0/f9Wd5FfhJ6j5f6g4f5bfp5Ze5ug4v5agaJviJHg//+Lw+s9U2SCtueSzP5Qb41PbYqRzP1+tOlDWGm+6PNrlbNhh55PbY2k5/9PbotObIlLbJB/m6GRs8JfhaVTco2Rzf1ScpFRcI6Nyf1deo+FpK9IYnxxnsdhiKtunMdieIhcgKJeg6VbgKRpjapLZ4BMaoQaISgcIyv///8A+yGxAAAAKHRSTlMAX/jx8fHx8fH0hHaPoKqyt8zSIPT3JEhOeH6mqwPV2wco+v0sUFamQiAJ0AAAAAFiS0dEhGLQWnEAAAAHdElNRQflCBcRByuJ+qK2AAAAsElEQVQI12NgYGDUYGJmYWVj5+DU5GIAAm4tbR1dPX0DQyNjE1MeBgZeM3MLSytrG1s7ewdHJ2c+Bn4XVzd3D08vb08fXz//AAEGBsHAoOCQ0LDwiJDIqGghoBnCIjGxcfEJiUnJKamiYiBTxdPSMzKzskNycvMkGMBAMr+gsKi4pLRMigEKpMsrKl2rqmVgfAZZuZraunp5BbgAg6JSQ6OyCgMSUG1qVmNAAbzqUAYAnSYjCmqLwOgAAAAASUVORK5CYII="
                                />
                            </svg>
                            Featured
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("3D-Artwork")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 14"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={14}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAMAAAAR8Wy4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACAVBMVEUAAAAJCwwODxAQExUAAAAAAAAAAAAeJCcgJioAAAAAAAAAAAAAAAAAAAAAAAAvOUAtNjsAAAAAAAAAAAAMDg8sLS0rKysrKyoYICcYISYgJisAAAAUGR0AAAARFBQeJy0eJi4OERMAAAAAAAAAAAAPDw8RDgsMERUMDg8AAABab4OHqb+v3fzB9P+u2/qGqbxXbH0NDAxDQ0IrOEReeI2Jq8ScxdSo1Ouy4f624/6v2vCkzNiOsMllfY0pMjkkLzs0NDP///+6zdlae5VJXGw8SVY4RFJJWmg1Qk8vQFA1SWFLaolum8ea2f4lMDzW//+r4v6p1veYvtN3lKtSdZdqmcV7ruGLxPuPyf2Lw/qX1P0hKzb//v612vaf0vvI/f90jqFKaIWZ1/6DtuiAs+R9r959rt6Pyv0fKTL4/P6nz/Gy5v5dcX42TGKQyv18rt1+seJ+sOEgKjLx///s9fq57P5ac4U6UGqRy/18rd5/seIgKTK15/7z+/9ZcYU4UWqRy/58rt5/seGQy/2w5f6q0/T9/fuIiYk0TWl9sOGOx/0fKTEgJSzN//+t5P674P7//f6flYwyTGiQyP16qtqBteaKwvij5v4kMT1th5ujz+uq4v7l//+fl5EzT2ua2P6OyP2V0f2PyP17q9ljirFAVmacpammn5g/Xn5afp87UGN23BbMAAAAKnRSTlMAAAAAIGSy9fizYRshZ6fu55pbFvr7+/v7+/yw/mOl7PGoaR0fr/L1tWUwTlSuAAAAAWJLR0RBid5sTgAAAAd0SU1FB+UIFxEIKnllju8AAADzSURBVAjXY2BgYGRgYWVj5+Dk4mYAAR5ePn4tbR1dXT19AwFBIWEGQyNjE1MzcwtLK2sbWzt7EQYHRydnF1c3d3cPTy9vH18/BlFHR/+AwKDgkNCw8IjIqGgGMUfHmNi4+ITEpOSU1LT0DAZxR0fHzKzsnNy8/IKCwrwiBolioEhJaVl5RWVBQVVeNYNkTS1QpLiuvqGxsLCpuYhBqqW1DSjS3pHXWNiZ1tXN0NPb1z/B0XHipMlT8qdOmz6DQXrmrNlzHB3nzpu/YOGixUtkGBhk5eSXLnNcvmLRylUKikrKDAxMDAwqXKpq6hqaPAwMzAwAo+FFcSLBhuAAAAAASUVORK5CYII="
                                />
                            </svg>
                            3D Artwork
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Illustrations")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 16"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={16}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACNFBMVEUYFQ8/NB9FNyFFOCFFOCBGOCFANB8aFxBLPSNNPiRMPSNMPiNMPiRGOSFNPyQZFhBFNyFMPSRGOSEbFxE/Mx/LoVeYcjSCVhyEWh6FWh6EWR6CVRyXcDPNo1hFOCCYcTQtMjNTZ2xNXWlMXGdLXGdUaGwsMjSVbzJ+UxhKXm3M///K//+67/+16f/J///D+v+26v9QZ3x6TxeDWB1ZbHat4f5JX4ZffJ+x4P6y4Pq87f96l8mcw+y97/+57v5OYW+AVRyHXSFRaIVWa3axnCVyXhZiganR//9LXHMmMwwqNC+r1vxMXWuAVhxNZIRHV1ziyC+YgR5oicRgdqQfLAqQx0FAWBUrM1DI+P9YbYN+VBlccHuZyOdabXJheJQ/TH0rOg6BsTt5pUGGuEUyRRBNaGBUameFXCiDWR5JWGDW//+Xwfw1QmU2ShF1oypzni9pkSltlyp8qjx9q15AUkOHXS+EWh1fdIpyjroYHwxPbxuCtDGFsG6WwLOVwa5/qWVpkySw5uNZbJd/VBqJXylNXmVQb0Fhhx97qyuErn6x3P6y3v2x3f2t2f2Wwbew5OBRZH2KXi5EU06Pxlpzny6IsYas1/6m0vKm0vOo1PnA9f9MX2p9URdRZn3F//+06f7D9/++8/+78P688f+78P9SaX56ThaWcDErMTNacYRUZ4ZOYXFOYG5PYW9WbXQqMjeSbDBBNB/NoliUbjJ9URqAVh1/VRx9URuSbDHOpFhGOSH///+YbYjKAAAAFHRSTlPZ7+7u7u7v2+/v7+/v7u/a7+/v3CSKyfQAAAABYktHRLvUtndMAAAAB3RJTUUH5QgXEQoKcD3MpQAAARVJREFUGNNjYGBkYmZmYWFmYWZlYWFlY2cQERUTl5CUlJSSkpKQlpGVY2CWV1BUUlZWUQYCVTV1DgYWDU0tLW0dXR09fQNtQyNOBhZjE1MzcwtLK2sbWzt7By4GFkcnZxdXN3cPTy9vLR9fbgZmRz//gMCg4JDQsPCIyChuBhap6JjYuPiExKTklNS0dKCWjMys7JzcvPyCwqLiklIeBuay8orKquqa2rr6hsamZi4G5pbWtvaOzq7unt6+/gkgQydOmjxlate06TNm9syaDbSWd87cefMXLNRZtHjJYq2ly/gYWJavWLlq9Rp7e/u19uvWb+Bh2Lhp8xZfh60ODr7bHLbv2LmLgV+Ag4eHC4i4gISgkDAAew9MUqEwb6UAAAAASUVORK5CYII="
                                />
                            </svg>
                            Illustrations
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Gaming")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 12 16"
                            >
                                <defs />
                                <image
                                    width={12}
                                    height={16}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAMAAAAVv241AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABZVBMVEUAAAAGBgYHBwdBQT88PDo6Ojk/Pz0aHR0dISA5OTg+PjxMTEpLS0lNTUpGRkRMTEtKSkgiIiFISEZEREJISEcZGRlXV1RVVVMZGRg+Pj1TU1FYWFYgIB8AAABYLCVbLSYICwkMCAgLAABDIx1AFxU/IBw8FxUAAAAAAAAAAAAEBgYkJCMmJiQhISAkJCIjIyEiIiAAAAAAAAAlJSUmJiYAAAAaAAAaAAAAAAAAAAAAAAAAAAAmJiZYWFdMTEtLS0tZWVgpKSmhSDvidl/hbViRLCbhb1nXZFHHTD/cNS/hb1rZY1DAPTTdNi+PQzffWkjWLyd8Ih1RLChQJiROX2FWaGltbW1ycnJoaGhsbGxpaWpubm5tbWxxcXBAQD8/Pz8TFBQlJSYmJiYVFRUxMTGHfnt1bWtmZmVmZ2ZgYGBmZmZ5eXg1NTVdXV3v8vHNz87Q0M7Ozs3OzszNzcv39/VkZGT///8isgL6AAAAQnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILl54Vwd+Hm3eJgZ3J2FhcXGBQVDwifolfz37CZOTPc7+/v790mssPdAAAAAWJLR0R2MWPJQQAAAAd0SU1FB+UIFxEMCiZnayMAAACuSURBVAjXY2AAAlk5eQUGKFB0cnZxVYJylN3cPTxVoBxVL28fXzUoR93PPyBQA8RiZGJi0AwK1gIzmFlY2dhDQjnYWDm5GNi4eXi0w8J1ePn4BRgYBHmFdCMi9YSFRESBugTF9KOiDcR5JMCmSUrFxPJIy4CYhkYMxnHxJmBhUzNzi4TEpGRLKytrhpTUtPSMzMysrKzsHIbcvPyCwqLiwoKCklIGG1s7ewhwcAQAJl8fprqrhLUAAAAASUVORK5CYII="
                                />
                            </svg>
                            Gaming
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Photography")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 12"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={12}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAMAAABcOc2zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABm1BMVEUAAAAQDgcWEwouJxBsYB5gTBkeGgwPAABwURMAAAAAAAAAAAAAAAAXFxdqaWeZlIeRkpaTk5OVlZV3d3dra2tsbGxtbW1paWkcHBxWVlZVVVVkZGQhISElJSUrKyswMC81NTU+Pj00NDQ7Ozo2NjY/Pz4ODg46Ojk/Pz87Ozs5OTlGRkVUVFNTU1NQUFA+Pj4/Pz47OzsSEhKMaxnFmyS8jSGDf3BvbGx1dG7////9//+np6ehoaHBwcFlZWXCwsIWFhYAAABGRkX6+vpbW1pZWVmMjIw0NDMQEBA2NjZNTUwuLS1iYmKEhINXV1ZXV1daWlqMjIuQkI9YWFgXFxciIiKoqKdoaGcGBgYoKCiFhYR9fXx7e3qPj460tLO5ubdvb28aGhqbmppeXl4JCQovLy+kpKOlpaSjo6K5ubisrKuioqAmJiUXFxgzMzNEREMtLi4MDA1NTU20tLKampmbm5qvr66wsK+Dg4IfHx8YGBg7OzuioqGdnZyysrE0NDTBwcDHx8aqqqlqampmZmW/v76+vr3FxcQ9PTyDroRrAAAAM3RSTlMAAADR7u2MKdMbHB0amvv+/f39/f39/fym/ubu5Ozk7OTs5Ozm7onp7Ozs7Ozs7Ozs6pStRxWLAAAAAWJLR0Q51wCVQAAAAAd0SU1FB+UIFxENBNjEd2UAAAC/SURBVAjXY2BgZGZhZWNiQAB2YxNTDk4uMODmYWDg5TMzt+AXEBQSFhEVFROXYJC0BAIraxtbSzCwY5ACkvYOjo6OTs4gAWkGGRdXN3cPTy9vRx9fP/8AWQa5wKDgkNAwy/CIyKjomFh5BoW4+ITE0CTL5JTUtPSMTEUGpazs7JzcvPyCwqLiktIyZQaVspLyikqHlKrq9JqS2jpVhvqGuKzGpuaWmNa2rLLi9g4GNXUNTS1tHV09fS1NTQNDIwAsYC+N5x7TKAAAAABJRU5ErkJggg=="
                                />
                            </svg>
                            Photography
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Motion-Graphics")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 11"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={11}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAAOCwk4HhpLJiBSKSJXKiNcLCVeLSZeLSVbLCVYKiNTKSJKJSA5HhoPCgoAAAAAAAA5Hxs/IRxOJiFUKiNYLCVeLSZcLSViLydYKyVOKCFUKiM6HxtAIx4AAAAAAAARDAs+IBtQKCFXKyRdLSZgLiZjLyhjLydhLiddLSVXKiNQKCI+HxsSDAuiSTvha1bgZlPgaFTgaVXga1fhalbhaVXhZ1PhbFenSj3YXkzPXEvPXkzMU0HdW0faY1DLWUjOXErPW0rXXkzhblnPW0nNWknUXUvLVkVRNC9UJB21NiXgaFPVYE7KWUjOW0rgaFXOWknVXky3Oil5bGqz1dxiVFOMPzPJVUTSXEvVXk2yOSh0YF3////3//8yUFZXGxLgZVHNW0q2Oyp7bWq52+JnW1qJPzXFU0LTXEvhalXMWknUXkzKVURQNTFSJiCwMyHgZ1LXYU/LWknXXUzOW0nPXUzIUD7bWUbcY1HNW0nWXUvhbVjgZ1ThaFThbljha1fgaVbgalbgbFetTT9ap4SXAAAALnRSTlMAc8rV3+fs7u7s59/Wy3h5gcDG2tzo6ezt6NrdwcZ9hHvQ2eHn7O/v7Ojh2dGAJY8+/wAAAAFiS0dEXOrYAJcAAAAHdElNRQflCBcRDToZpWrOAAAAw0lEQVQI12NgYGRiZmFlY+fg5OLm4eVjYODX0zcwNDI2MTU1NTQztxBgEDS3tLKytrG1s3ewcnRyFmIQNnRxdXP38PTy9vF19fMXYRA1CnANDAoOCQ0Lj3ANMBJjEDf1c42Mio6JjYtPcHA1kWCQNPRLDExKTklNS89IdM0UY5AydMzKzsnNyy8oLHL1M5RmkDEv9ispLSuvsPerdKwyl2WQs6iuqTWqq29oNDStbWqWZ2BQUFRSVlFVU9fQ1NLW0WUAAP/hK9scj8emAAAAAElFTkSuQmCC"
                                />
                            </svg>
                            Motion Graphics
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Pop-Culture")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 16"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={16}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6OjosLCwAAAAAAAAAAAA3Nzc8PDsAAAAAAAAXFxcREREAAAATExMfHx8AAAAAAAAMDAwfHx8pKSk/Pz9HR0YAAAA4ODgAAAASEhIkJCQAAAAAAAAAAAAAAAAUFBQAAAASEhIAAAAAAAANDQ0dHR0kJCQhISEUFBRnZ2d3d3Z2dnWEhIR/f3+BgYC7u7m4uLaysrC7u7q0tLNKSkoTExMxMTFMTEyampq8vLuampmYmJeZmZitrawyMjMYGBg0NDRzc3LAwL+Xl5apqah+fn09PT1CQkKnp6ahoaCpqaeCgoE3Nze1tbStrat4eHczMzNJSUk1NTW2trSrq6peXl5ISEg4ODiysrGvr66Kioo3NzicnJuoqKewsK+dnZtEREROTk5VVVXIyMesrKyHh4Y/Pz+MjIxYWFc1NTZFRUVHR0cxMTI+Pj5LS0v///8k/CmNAAAANnRSTlMAPKEYFDDGOgM7XE8ECPXKgU138ezjvcbKB7HyF1TxrPff62HTR5bxEjGUftl90RMtpuP378fy8+0lAAAAAWJLR0R80bYgXwAAAAd0SU1FB+UIFxEONjs+dSYAAADaSURBVBjTY2BAAYxMSBxmFgZWNnYwk4OTi5uHl4+fQUAQzBcSNjO3EBG1tBLjAEuLW9vY2tk7ODo5u0hIAgWkXN3cPdw9vcy9fXylZRgYZP38AzyBIDAoOESOGahAPjTMHQTCIyJdFEACilGe7p7u7h7RMbFx8bJAAaUETyDf0z0xKTY5RRkooJLqDjQhIC09I9glVhUooJaZ5emZmZ2TGx+Sp64BFNDML/AqDC3KjQ1xKdYCu1M7qcS8NL6sPK9CRxLiKV2fyqrqvLh4PX2YNw0MjYxNTJUhHAC38i4xtGarZgAAAABJRU5ErkJggg=="
                                />
                            </svg>
                            Pop Culture
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("Memes")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 16"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={16}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACHFBMVEUAAAAAAAAAAAAxMRRQThtQTxwzMxQAAAAAAAAAAAAAAAAAAAAKCQIAAAAAAAAAAAAAAAAAAAAGBgEvLRI3NRRUUBtdWB5VURwwLhM6OBYAAAAJCQIAAAAAAAAAAAAAAAANCgIUEQgAAAAAAAAHAABKSBp0cSV1cSVMSxoNCwMAAABoZiLQyz3++0v//0z+/EvTzz5taiOwqjX//07//0378Uf67Eb660b//0+3sTe0qzT36Ub36UX26UX560X//1C9szZgWx/x5kS5rTX250X15kS8sDbv4UNpYyDbzT3x6kZpZSJjXh/Pyz358Ef68EfTzz9mYiBmYiHw6EXk1kD//kv880j9+UoSEQgjIQ///kwsKhEAAAD//Ez78Ef//0v88kjy60ZlYSFxayPY00D570fb1kF1byVjXyD780f990n05kTy5ET9+Erm2kORiCeoniW2rCnHuyzTxzDWyjHOwi/AtiuupCaTiifh1ULJvTAZG0F+h5d6g4KCh3iJjHOKjHGHi3V/hn6FjJYfIUe9sC3++0pxaiL//0k2NSZwW3KVhYt2eYlvd4xrdYpyeIyQho92ZXw0Miz//0d/diXW0ULY2jsQAABlABeTIyGWKSCUKSCMIR5gABUJAADLzDbg3EXY00Hi6EN6bSd0Qit5NjB6NTB3Qix7aijc4ELf20KPii3q7UXe5kDM1DvK0zrc5EDq7kWWkS////9s6zZGAAAAK3RSTlMAMI7O7u/QkTSSl7W9k54mLpWg2N319fba35mkKjGapb7GoDiX0+/v1Zs8fH8l7gAAAAFiS0dEs9pt/34AAAAHdElNRQflCBcREALOy75MAAABAElEQVQY02NgAAJGJmYWVjZ2DgYo4NTW0dXT0zcw5ILwuY2MTUzNzE31LCx5QHxeKws9M2sbWxs7PXsHPgYGfkd7J2c9PRdXPT03d3sPAQZBTxMvbx9fP/+AwKBgkxAhBuHQsHC9iMgoveiYWP24eBEGUb2ExKTkFL/UtPQMr0wTMQZxvaz4bAuTMKAlOfG5emIMEnp5+QWFRcUlpWXlFZXGkgxSplXVNbV19Q2NTc0trW3SDDLtHZ1d3T29ff0TJk6aPEWWgUFu6rTpM2bOmj1n7rz5C+RBTlVYuGjxkqXLlq9YuUoR4hm51WvWrlu/YeMmJZh3lVVU1dQ1NLVAbABEFkY3mvg0RQAAAABJRU5ErkJggg=="
                                />
                            </svg>
                            Memes
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => filterCatagory_("NSFW")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 16"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={16}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABtlBMVEUAAAAAAAArGBVYIxtcHBRYIhotGRUAAAAZFBMiFxUzGxg4HhogFxYkFxUAAAAAAAAoFxQtGBVZIRpcIhpbGxJbGRBaGhFcGRBaIhpdIhopFxQvGRUAAAAAAAAkGBYjGRc3Hho8HxojFxUkGRYAAAAwGRZaIhlcGxNeHRNcIxozGhYAAACCMyd5KByJRDqVXFOIRTp5KRx9Kx66RTSDU0yorKzF19vq+/7H2d2Wm5x9Rz+dLR6gPjCYIRFUOjfq///////N5epsUEyaLB16Kx+VX1Zeamx+CwNdLynK4OTd9fp9Qzt5Jxt5IBOqq6v+//91cnFuAABcLynL4eWhqKl4IRWFQjfK3+P3//91cXBdMCrM4+bU6u+HRz2VYFfv//92c3JtAABcMCr1//+YZVzw///4///K4eX0//+XZV2FRDnQ5el0cG7L4uXQ5uufpaZ0cG9vAABeMSre9vm2vr96IhV4Jxt9Qjnc8/dzb259AABgS0eDV0+CLyNsUUvO5+tfamyNGgi6RDOeLh58Rz+WnZ7K3eDL3eGgpaaKYVqoQDB/LCB5Kx6KRz2XYViKSD17Kx6ELyLZ55S8AAAALHRSTlMALYrJ58qMMIuQsbeKkiQpkJjS1+7u7u/T15ObJiyQmLe9kZYzkc3o6M6UN1b+8EsAAAABYktHRED+2VzYAAAAB3RJTUUH5QgXEREINwVmEwAAAONJREFUGNNjYAACRiZmFhZWNnYGKODQ0dXT1zcwNOKE8LmMTUzNzM0tLK2suUF8HhtbO3sHEHB0cuZlYOBzcXVz9/AEi3h5+/AzCPj6+QcEBgWDRUJCBRmEwsIdIiIDo6JBAjGxwgwicfEODhEJiUkgNckpogxicalAVlpCYFK6g0NGpjiDRFY2SHFETmBUrkNerCSDVGg+2LyIgsKi4pJSaQaZsvIKiEhlVXVNrSwDg5xzXT1YxKGhsUke5FSF5pbWttT49o7OLkWIZ5S6e3r7+vonTFSGeVdFVU1dQ1NLG8QGACY4PKuiYT5lAAAAAElFTkSuQmCC"
                                />
                            </svg>
                            NSFW
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="category-item swiper-slide">
                        <a href="#" onClick={() => setCatagoryFilter("Looping-Artworks")}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 16 13"
                            >
                                <defs />
                                <image
                                    width={16}
                                    height={13}
                                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAMAAACXZR4WAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACB1BMVEUAAACAZi8EBwKjfzk+MRoGBgFxYi5QPh8RDwr34WRhSiUQDQk8MBt1Xi+FaTJBNR1GOB8ZEgw4KRgAAABBNhx/ZTBzWisvJRWzhj0bFg8hGxJ1XCx/Zi9FOB0AAAAHAAAOCAYAAABbRiITDwslHRKScTR0XSwAAAALCQZWQiEAAAA7LhhYQSAAAAARDgluUicAAABOOR1ENRuDYy8AAAAqIhRzVykAAACPbDKCYy8GBgEzKRZsUygAAACPazFTQCEpIhQRDwqkezkgGxFdRyMUEgyMZzAAAABUPSEKAAAAAACDYC4YFQ4AAAB7Xi0aFQ8AAAAAAAAAAABxVSkAAACAYy+BYi5rUSc5KheCYy+HZjAmHxNjTCVXQiFhRyMnHxMAAAAwJxZTSCNqUidcTyczKRcAAADMmEVDNRxRPyB4XSx5Xy1TQSA6Lxnao0qwjkD13F/vwlXww1XxyVdrUihkTSXzz1rxyFj23GC4lEKvhj334WF8Xi301V323WC4j0D33mHor02mgjv332HvwFXuulJvVCjuu1LstFCBYi7ttlDy0Fvssk6IZC7yzlrxyVijejeFYi3GokiHZjDcr03Cnkbyy1mSbDKOczWWdjbgs0/atE/XsE3pulGYdjaLczWCXy3xy1nerEyigTtiSSSggDrdq0vwx1eKZTB+YS2AYi5uVyr////hgLXOAAAAb3RSTlMAAAAAAAAAAAAAAAAAAAAAAAAAWL3r5qouJKfk68BdjZZN44GN4uqRgd5Xyt4NdowH2NP1eKSzbfjyc62xafXTrmRYpNmR+hSIjgz2nSK/HoaPHbIqhf6bmP2TMod//j8Oob/5wqURIZHP7OzRlSs4Vlp3AAAAAWJLR0SsV2XyiwAAAAd0SU1FB+UIFxEUBTTD7usAAADkSURBVAjXY2BgEBYRFROXkJSSlpGVYwAC+fyCwqLiktKy8sKKSgUGBsWqaiVlFdWaWjV1Dc26ei0G7QYdXQYGvcYmfUYGA8NmIwbjFhMGJgbT1jYzZhYG83YLBst2KwZWBuuOThs2dgbbLjsG+24HBgYOx55eJ04uBuc+FwbXfjd3bh6PCUWeDAxe3n0+DL4T+/z8AyZNnjI1MCh42vQQBt7QGTPDZs0Oj5gzN3Le/Cg+Bv7oBQsXLV4SExu3dNnyFfECDAwJiUnJK8sLi6atWp2SmgZyO4NgekZmVnZObp4QkAMAUhs96Wfc4cYAAAAASUVORK5CYII="
                                />
                            </svg>
                            Looping Artworks
                        </a>
                    </SwiperSlide>
                </div>
            </Swiper>
            {/*  CATEGORIES BAR */}
            {/* FILTERABLE PANEL */}
            <div className="filterable-bar">
                <form id="artworks-filter-form" onSubmit={(e) => onSubmit(e)}>
                    <div className="filter-item">
                        <NiceSelect
                            arr={[
                                { name: "Newest to Oldest", value: "newest" },
                                { name: "Oldest to Newest", value: "oldest" },
                                { name: "Most Trending", value: "trending" },
                            ]}
                            ChangeFilterData={(name, value) => onChnage(name, value)}
                            name={"order"}
                        />
                    </div>
                    <div className="filter-item">
                        <NiceSelect
                            arr={[
                                { name: "Auctions Only", value: "auctions-only" },
                                { name: "Buy Now", value: "buy-now" },
                                { name: "All Artworks", value: "" },
                            ]}
                            ChangeFilterData={(name, value) => onChnage(name, value)}
                            name={"type"}
                        />
                    </div>
                    <div className="filter-item">
                        <NiceSelect
                            arr={[
                                { name: "Verified Creators", value: true },
                                { name: "All Creators", value: "" },
                            ]}
                            ChangeFilterData={(name, value) => onChnage(name, value)}
                            name={"creatorVerified"}
                        />
                    </div>
                    <div className="filter-item">
                        <NiceSelect
                            arr={[
                                { name: "Ending Soon", value: true },
                                { name: "Anytime", value: "" },
                            ]}
                            ChangeFilterData={(name, value) => onChnage(name, value)}
                            name={"ending"}
                        />
                    </div>
                    <div className="filter-item">
                        <NiceSelect
                            arr={[
                                { name: "Lowest to Highest $", value: "newst" },
                                { name: "Highest to Lowest $", value: "oldest" },
                            ]}
                            ChangeFilterData={(name, value) => onChnage(name, value)}
                            name={"order"}
                        />
                    </div>
                    <div className="filter-button">
                        <button className="btn btn-normal btn-dark">Filter</button>
                    </div>
                </form>
            </div>
            {/* FILTERABLE PANEL */}
            {/* FEATURED ITEMS */}
            {/* <div className="featured-box grid-4-columns">
                {filterData &&
                    filterData.map((data, i) => (
                        <div key={data.id}>
                            <Catalyst data={data} />
                        </div>
                    ))}
            </div> */}
            {/* FEATURED ITEMS */}
            {/* PAGINATION */}
            {/* <Paggination
                active={active}
                setActive={setActive}
                sort={sort}
                length={filterData && filterData.length}
                className="flex-center"
            /> */}
            {/* PAGINATION */}
        </div>
    )
}

export default CatalystVoterTool
