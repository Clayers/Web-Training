<template>
  <div id="main" style="background: #f2f2f5">
    <div style="padding-top: 8rem; width: 80%; margin-left: auto; margin-right: auto">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: none"
        :showThumbnails="false"
        :showIndicators="true"
        :changeItemOnIndicatorHover="true"
        :showIndicatorsOnItem="true"
        >>
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img style="display: block" :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
        </template>
      </Galleria>
    </div>
    <div id="about-us" class="px-4 py-8 md:px-6 lg:px-8 text-center">
      <div class="mb-3 font-bold text-6xl pt-6">
        <span class="text-900">О компании, </span>
        <span style="color: #2196f3">Балтийские Судовые Системы</span>
      </div>
      <p class="text-900 mb-3 font-medium text-2xl" align="justify">
        <span>Предприятие ООО «Балтийские Судовые Системы» создано и работает с 2006года.</span>
        <span>Основная специализация- строительство и ремонт судов, в части изготовления, монтажа и сварки трубопроводов судовых систем,</span>
        <span> проведения корпусно-сборочных, монтажных и других работ.</span>
        <span> проведения корпусно-сборочных, монтажных и других работ.</span>
      </p>
      <p class="text-900 mb-3 font-medium text-2xl" align="justify">
        <span>Предприятие имеет опыт работы по изготовлению, сварке и монтажу трубопроводов </span>
        <span>на строящихся объектах, нефте-химической, металлургической, пищевой промышленностей.</span>
      </p>
      <p class="text-900 mb-3 font-medium text-2xl" align="justify">
        <span>Наша организация располагает специалистами высокой квалификации: </span>
        <span>сборщики КМС, трубопроводчики и монтажники судовые, электросварщики, моляры, изолировщики.</span>
      </p>
      <p class="text-900 mb-3 font-medium text-2xl" align="justify">
        <span>Численность работников предприятия, занятых на производстве, превышает 250 человек.</span>
      </p>
      <p class="text-900 mb-3 font-medium text-2xl" align="justify">
        <span>Предприятие имеет лицензии речного и морского регистров, сертификат СМК в соответствие с требованиями</span>
        <span>ГОСТ Р ИСО 9000-2008 и ГОСТ РВ 15.002-2003,</span>
        <span> а также лицензию на проведение работ, связанных с использованием сведений, составляющих государственную тайну.</span>
      </p>
    </div>
    <div id="customers" class="padingblock">
      <div class="card pl-8 pt-4 borderblockstyle flex">
        <span class="block text-6xl font-bold stylehederblock">Наши заказчики</span>
        <div class="px-4 py-8 md:px-6 lg:px-6">
          <Fieldset>
            <p class="text-900 mb-3 font-bold text-2xl" align="justify">
              <span>ООО «Балтийские Судовые Системы» имеет значительный опыт по изготовлению, монтажу и сварке трубопроводов, корпусно-</span>
              <span>сборочных работ, монтажных, достроечных и малярных на заказах гражданского и военного судостроения таких предприятий, как:</span>
            </p>
            <p class="mb-3 font-bold text-2xl" align="justify">• ОАО «Волгоградский СЗ»</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• ОАО «СЗ Северная верфь»</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• ОАО «Амурский СЗ»</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• ОАО «ЦС «Звездочка».</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• ООО «Спецмонтаж»</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• ОАО «Средне-Невский судостроительный завод»</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• АО «Адмиралтейские верфи»</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• АО «ПО «Севмаш»</p>
          </Fieldset>
        </div>
      </div>
    </div>
    <div id="work-in-company" class="padingblock">
      <div class="card pl-8 pt-4 borderblockstyle flex">
        <span class="block text-6xl font-bold stylehederblock">Работа в Компании</span>
        <div class="px-4 py-8 md:px-6 lg:px-6">
          <Fieldset class="p-fieldset p-component">
            <p class="text-900 mb-3 font-bold text-2xl" align="justify">
              <span>ООО «Балтийские Судовые Системы» приглашает к сотрудничеству специалистов по следующим специальностям:</span>
            </p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Трубопроводчики</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Монтажники</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Сборщики КМС</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Рубщики</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Электроварщики ручной сварки</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Маляры</p>
            <p class="mb-3 font-bold text-2xl" align="justify">• Изолировщики</p>
          </Fieldset>
        </div>
      </div>
    </div>
    <div id="offers-and-services" class="padingblock">
      <div class="card pl-8 pt-4 borderblockstyle">
        <span class="block text-6xl font-bold stylehederblock">Предложения и услуги</span>
        <div class="row">
          <div class="card-columns px-4 py-8 md:px-6 lg:px-6 col-sm-6" style="column-count: 2">
            <div class="card cards" style="display: inline-block">
              <img class="card-img cards" src="@/assets/img/galleria/1.jpg" alt="Card image" />
            </div>
            <div class="card cards" style="display: inline-block">
              <img class="card-img cards" src="@/assets/img/galleria/1.jpg" alt="Card image" />
            </div>
            <div class="card cards" style="display: inline-block">
              <img class="card-img cards" src="@/assets/img/galleria/1.jpg" alt="Card image" />
            </div>
          </div>
          <div class="px-4 py-8 md:px-6 lg:px-6 col-sm-6">
            <Fieldset class="p-fieldset p-component">
              <p class="text-900 mb-3 font-bold text-2xl" align="justify">
                <span>ООО «Балтийские Судовые Системы» предлагает свои услуги при выполнении следующих видов работ:</span>
              </p>
              <p class="mb-3 font-bold text-2xl" align="justify">• Трубопроводные работы</p>
              <p class="mb-3 font-bold text-2xl" align="justify">• Корпусные работы</p>
              <p class="mb-3 font-bold text-2xl" align="justify">• Монтажные работы</p>
              <p class="mb-3 font-bold text-2xl" align="justify">• Электросварочные работы</p>
              <p class="mb-3 font-bold text-2xl" align="justify">• Достроечные работы</p>
            </Fieldset>
          </div>
        </div>
      </div>
    </div>
    <div id="contacts" class="padingblock pb-4">
      <div class="card pl-8 pt-4 borderblockstyle">
        <span class="block text-6xl font-bold stylehederblock">Контакты</span>
        <div class="card-columns px-4 py-8 md:px-6 lg:px-6" style="column-count: 3">
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Контактный телефон в г. Санкт-Петербург</h5>
              <p class="card-text">8 (812) 490-90-68</p>
              <p class="card-text">8 (812) 490-91-10</p>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Контактный телефон в г. Северодвинск</h5>
              <p class="card-text">8 (8184) 581-851</p>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Юридический адрес:</h5>
              <p class="card-text">г.Санкт-Петербург, улица Двинская д.10 к.2, пом 6 Н а/я 27</p>
              <p class="card-text">Почтовый индекс: 198035</p>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Электронная почта</h5>
              <p>
                <a href="mailto:BSS-SPB-2006@yandex.ru" class="card-text">BSS-SPB-2006@yandex.ru</a>
              </p>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Заместитель директора по производству</h5>
              <h5 class="card-title">г.Северодвинск</h5>
              <h5 class="card-title">Бренчуков Алексей Анатольевич</h5>
              <a href="mailto:aleksei.brenchukov@mail.ru" class="card-text">aleksei.brenchukov@mail.ru</a>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Заместитель Генерального Директора г.Северодвинск</h5>
              <h5 class="card-title">Скребцов Андрей Иванович</h5>
              <a href="mailto:aleksei.brenchukov@mail.ru" class="card-text">bss-sever@mail.ru</a>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Директор по производству</h5>
              <h5 class="card-title">г.Санкт-Петербург</h5>
              <h5 class="card-title">Абросимов Константин Александрович</h5>
              <a href="mailto:koab@yandex.ru" class="card-text">koab@yandex.ru</a>
            </div>
          </div>
          <div class="card cards" style="display: inline-block">
            <div class="card-body">
              <h5 class="card-title">Инспектор по кадрам</h5>
              <h5 class="card-title">Калина Елена Андреевна</h5>
              <a href="mailto:kovaleva_ea76@mail.ru" class="card-text">kovaleva_ea76@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Index from './index';
export default Index;
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1.25rem;
}
.card-columns .card {
  width: 100%;
}
.cards {
  border-radius: 32px;
  border: none;
  box-shadow: 0 10px 10px 4px rgba(167, 165, 165, 0.3);
}
.divpaddingcards {
  padding-left: 10px;
}
.padingblock {
  padding-top: 4%;
  padding-left: 10%;
}
.stylehederblock {
  color: #2196f3;
  padding-top: 2rem;
  padding-left: 4rem;
}
.borderblockstyle {
  border-radius: 32px 0 0 32px !important;
  border: none !important;
}
::v-deep() {
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #2196f3;
  }

  .p-link {
    border: none;
    cursor: pointer !important;
  }
  .p-fieldset .p-fieldset-legend {
    font-weight: 500;
    border: none;
    background: #ffffff;
  }
  .p-fieldset {
    border: 2px solid #ffffff;
    background: #ffffff;
    border-radius: 32px;
    box-shadow: 0 20px 30px 3px rgba(146, 144, 144, 0.3);
  }
  fieldset {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.95em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
  }
}
body {
  background: #f2f2f5;
}
.header-text {
  padding: 200px;
}
.surface-section {
}
</style>
