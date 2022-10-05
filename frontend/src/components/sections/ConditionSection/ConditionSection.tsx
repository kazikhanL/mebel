import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import styles from "./ConditionSection.module.scss";
import { ADDRESS } from "@constants";

const ConditionSection = (): JSX.Element => {
    const [sliderRef] = useKeenSlider({
        mode: "free",
        slides: {
            origin: "auto",
            perView: "auto",
        },
    });

    const idArticles = [
        "Основное",
        "Доставка",
        "Оплата",
        "Самовывоз",
        "Монтаж и демонтаж",
        "Возврат",
        "Продление",
    ];

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h1>Условия аренды</h1>
                <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
                    {idArticles.map((text) => (
                        <div key={text} className="keen-slider__slide">
                            <a href={`#${text}`} className={styles.link}>
                                {text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <article id="Основное">
                    <h2>Основное</h2>
                    <p>Наши условия удобны и выгодны для тех, кто хочет провести разовое мероприятие, деловую выставку, праздничное торжество, а также – для тех, кого интересует более длительное использование мебели и оборудования.</p>
                    <p>
                        Аренда мебели и оборудования рассчитывается:<br />
                        – менеджером компании по телефону;<br />
                        – через Корзину на сайте при добавлении позиций в нужном количестве.<br />
                        <br />
                        Доставка рассчитывается менеджером нашей компании после оформления заказа.<br />

                        Мы работаем на основании счёт-договора по предоплате 50%. Оплата заказа должна быть произведена за 24 часа до отгрузки мебели.<br />

                        Началом срока аренды является время доставки заказа арендатору.<br />

                        Аренда мебели рассчитывается посуточно. Но есть отдельное оборудование, услуги или работа персонала. Все это расчитывается отдельно с менеджером.<br />

                        Все оборудование (мебель), предоставляемое в аренду, является бывшим в употреблении, а потому может иметь следы естественного износа, такие как потёртости, царапины или сколы, не влияющего на его использование по назначению.<br />

                        Если вы не нашли необходимый товар на сайте, сообщите об этом менеджеру — он найдет подходящий товар или услугу у наших партнеров!<br />
                    </p>
                </article>
                <article id="Доставка">
                    <h2>Доставка</h2>
                    <p>Стоимость доставки подсчитывается в индивидуальном порядке и зависит<br /> от места, времени и масштаба вашего заказа:</p>
                    <p>
                        Минимальная доставка туда/обратно мебели и оборудования – 500 руб.<br />

                        При сумме заказа от 40 тыс. рублей доставка в пределах МКАД бесплатна.<br />

                        При заказе мебели в Московскую область или другие регионы расчеты ведутся индивидуально.<br />
                    </p>
                </article>
                <article id="Оплата">
                    <h2>Оплата</h2>
                    <p>Оплата заказа осуществляется одним из способов:</p>
                    <p>
                        Безналичный расчет путем перечисления на расчетный счет.<br />

                        Банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:<br />
                        – VISA International;<br />
                        – Mastercard Worldwide;<br />
                        – МИР;<br />
                        – JCB;<br />
                        <br />
                        Наличными.
                    </p>
                </article>
                <article id="Самовывоз">
                    <h2>Самовывоз</h2>
                    <p>Адрес для самовывоза: {ADDRESS}</p>
                    <p>
                        Самовывоз осуществляется только после письменного подтверждения менеджером наличия товара на складе.
                        <br />
                        Есть позиции, которые нельзя забрать самостоятельно. Это хрупкая, антикварная или крупногабаритная мебель. Детали и возможность самовывоза конкретных позиций можно уточнить у наших менеджеров.
                        <br />
                        При самовывозе дополнительно оплачивается комплектация товара: подготовка и упаковка.
                        <br />
                        При самовывозе арендатор осуществляет погрузку самостоятельно. Клиентам рекомендуем позаботиться о том, чтобы на месте был собственный сотрудник, который загрузит и распределит мебель в машине. Наши грузчики только подают мебель.
                        <br />
                        При самовывозе взимается залог (обеспечительный взнос), который возвращается сразу после передачи мебели на складе или в течение трёх рабочих дней, если оплата была произведена безналичным расчётом. Размер залога рассчитывается индивидуально в каждом конкретном случае.
                        <br />
                        При получении мебели арендатор должен предъявить документы, удостоверяющие личность. Если мебель принимает уполномоченное арендатором лицо, необходимо предъявить доверенность и документ, удостоверяющий личность.
                        <br />
                        Арендатор осматривает мебель при получении и подписывает акт сдачи-приёмки мебели. В случае отсутствия заказчика или его представителя, а также при отказе в подписании документов, кладовщик компании оставляет за собой право не отгружать мебель (оборудование). В случае выявления существенных недостатков, их необходимо зафиксировать в акте приёма-передачи.
                    </p>
                </article>
                <article id="Монтаж и демонтаж">
                    <h2>Монтаж и демонтаж</h2>
                    <p>
                        Монтаж оборудования подразумевает его полную подготовку к работе на мероприятии. Это значит, что наши сотрудники разгрузят оборудование, поднимут его на необходимый этаж, освободят его от кофров и чехлов, произведут тестовый запуск и произведут отчёт по готовности.
                        <br />
                        На монтаже оборудования один из сотрудников является старшим на объекте и отвечает за качество выполнения монтажных работ. Он же осуществляет передачу и подписание всей сопроводительной документации (акт приёма-передачи, акт оказания услуг, оригинал договора, оригинал счета, акт рекламации и пр.)
                        <br />
                        Мы осуществляем занос мебели в помещение и сборку. В случае с простым монтажом он осуществляется бесплатно – вы платите только за сам товар и доставку. В случае с монтажом сложных объектов стоимость будет определена отдельно.
                    </p>
                </article>
                <article id="Возврат">
                    <h2>Возврат</h2>
                    <p>Для того чтобы вернуть мебель и оборудование, вам стоит учесть некоторые правила:</p>
                    <p>
                        Мебель необходимо вернуть в срок, указанный в договоре.
                        <br />
                        При сдаче мебели арендодателю должен присутствовать арендатор или уполномоченное им лицо с доверенностью и документом, удостоверяющим личность.
                        <br />
                        При выявлении арендодателем неучтенных повреждений мебели, а также ее недостачи, составляется акт порчи/утери и подписывается обеими сторонами.
                        <br />
                        На основании акта порчи/утери:
                        – в случае доставки, арендатору выставляется счет для оплаты причиненного ущерба;<br />
                        – при самовывозе сумма ущерба вычитается из залога. В случае, если оплата была наличными, расчет происходит на складе. При оплате на реквизиты компании выставляется дополнительный счет на ущерб.
                    </p>
                </article>
                <article id="Продление">
                    <h2>Продление</h2>
                    <p>
                        О продлении аренды мебели необходимо сообщить не менее, чем за 24 часа до окончания основного срока аренды по договору.
                        <br />
                        Продление аренды возможно только после подтверждения менеджером компании доступности выбранных позиций.
                        <br />
                        Продление аренды производится на основании счет-договора по предоплате 100%.
                        <br />
                        Стоимость продления аренды мебели считается как при оформлении нового заказа.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default ConditionSection;
