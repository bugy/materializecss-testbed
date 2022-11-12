<template>
  <div class="test-app">

    <nav>
      <div class="nav-wrapper">
        <div class="header"></div>
        <a class="brand-logo" href="#">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li class="active"><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>

    <div class="block">
      <h4 class="header">Table of content + scrollspy <a href="https://materializecss.com/scrollspy.html">(docs)</a>
      </h4>
      <ul class="section table-of-contents" style="padding-top: 0">
        <li><a href="#buttons">Buttons</a></li>
        <li><a href="#dropdown-block">Dropdown</a></li>
        <li><a href="#select-block">Select</a></li>
        <li><a href="#sidenav">Sidenav</a></li>
        <li><a href="#tabs">Tabs</a></li>
        <li><a href="#time-picker">Time picker</a></li>
        <li><a href="#slider">Slider</a></li>
        <li><a href="#switches">Switches</a></li>
        <li><a href="#checkboxes">Checkboxes</a></li>
        <li><a href="#input-fields">Input Fields</a></li>
        <li><a href="#radio-buttons">Redio Buttons</a></li>
        <li><a href="#badges">Badges</a></li>
        <li><a href="#pagination">Pagination</a></li>
        <li><a href="#breadcrumbs">Breadcrumbs</a></li>
        <li><a href="#carousel">Carousel</a></li>
        <li><a href="#chips">Chips</a></li>
        <li><a href="#collapsible">Collapsible</a></li>
      </ul>
    </div>

    <buttons-section id="buttons" class="section block scrollspy"/>

    <dropdown-section id="dropdown-block" class="section block scrollspy"/>

    <select-section id="select-block" class="block section scrollspy"/>

    <sidenav-section id="sidenav" class="block section scrollspy"/>

    <tabs-section id="tabs" class="block section scrollspy"/>

    <time-picker-section id="time-picker" class="block section scrollspy"/>

    <slider-section id="slider" class="block section scrollspy"/>

    <switches-section id="switches" class="block section scrollspy"/>

    <checkboxes-section id="checkboxes" class="block section scrollspy"/>

    <input-fields-section id="input-fields" class="block section scrollspy"/>

    <radio-buttons-section id="radio-buttons" class="block section scrollspy"/>

    <badges-section id="badges" class="block section scrollspy"/>

    <pagination-section id="pagination" class="block section scrollspy"/>

    <breadcrumbs-section id="breadcrumbs" class="block section scrollspy"/>

    <cards-section id="cards" class="block section scrollspy"/>

    <carousel-section id="carousel" class="block section scrollspy"/>

    <chips-section id="chips" class="block section scrollspy"/>

    <collapsible-section id="collapsible" class="block section scrollspy"/>

    <ThemeSwitch/>

  </div>

</template>

<script>
import BadgesSection from '@/sections/BadgesSection';
import BreadcrumbsSection from '@/sections/BreadcrumbsSection';
import ButtonsSection from '@/sections/ButtonsSection';
import CardsSection from '@/sections/CardsSection';
import CarouselSection from '@/sections/CarouselSection';
import CheckboxesSection from '@/sections/CheckboxesSection';
import ChipsSection from '@/sections/ChipsSection';
import CollapsibleSection from '@/sections/CollapsibleSection';
import DropdownSection from '@/sections/DropdownSection';
import InputFieldsSection from '@/sections/InputFieldsSection';
import PaginationSection from '@/sections/PaginationSection';
import RadioButtonsSection from '@/sections/RadioButtonsSection';
import SelectSection from '@/sections/SelectSection';
import SidenavSection from '@/sections/SidenavSection';
import SliderSection from '@/sections/SliderSection';
import SwitchesSection from '@/sections/SwitchesSection';
import TabsSection from '@/sections/TabsSection';
import TimePickerSection from '@/sections/TimePickerSection';
import ThemeSwitch from '@/ThemeSwitch'
import cssVars from 'css-vars-ponyfill'

cssVars({
  onlyLegacy: true
})

export default {
  name: 'TestApp',
  components: {
    CollapsibleSection,
    ChipsSection,
    CarouselSection,
    RadioButtonsSection,
    InputFieldsSection,
    CardsSection,
    BreadcrumbsSection,
    PaginationSection,
    BadgesSection,
    CheckboxesSection,
    SwitchesSection,
    SliderSection,
    TimePickerSection,
    TabsSection, SidenavSection, SelectSection, DropdownSection, ButtonsSection, ThemeSwitch
  },
  mounted: function () {
    M.updateTextFields();

    const scrollspies = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspies, {});
  }
}
</script>

<style scoped>
.block {
  border-top: 2px solid var(--separator-color);
  padding: 16px;
  padding-bottom: 40px;
}

.block h4 {
  margin-top: 32px;
  margin-bottom: 32px;
}

</style>