<template>
  <div class="flex column nowrap account pad-common">
    <section class="flex nowrap">
      <div class="flex column nowrap aside">
      </div>
      <div class="flex column nowrap form-large-container">
        <form action="">
          <inputText
            v-bind:label="'First name'"
            v-bind:placeholder="'i.e John'"
            v-bind:icon="'fa fa-user'"/>

          <inputText
            v-bind:label="'Othernames'"
            v-bind:placeholder="'i.e Doe'"
            v-bind:icon="'fal fa-users'"/>

          <inputText
            v-bind:label="'Email'"
            v-bind:placeholder="'i.e johndoe@company.com'"
            v-bind:icon="'fal fa-envelope'"/>

          <inputText
            v-bind:label="'Phone'"
            v-bind:placeholder="'i.e +2348089084015'"
            v-bind:icon="'fal fa-phone'"/>

          <div class="form-group-radio">
            <label for="phone">Sex</label>
            <div class="flex align-items-center nowrap smart-input">
              <inputRadio
                v-bind:label="'Male'"
                v-bind:radioName="'sex'"
                v-bind:icon="'fal fa-male'"/>
              <inputRadio
                v-bind:label="'Female'"
                v-bind:radioName="'sex'"
                v-bind:icon="'fal fa-female'"/>
            </div>
          </div>
          <inputSelect/>
          <inputText
            v-bind:label="'Address'"
            v-bind:placeholder="'i.e Futa south gate'"
            v-bind:icon="'fal fa-map'"/>

          <inputText
            v-bind:label="'Date of Birth'"
            v-bind:placeholder="'DD/MM/YYYY'"
            v-bind:icon="'fal fa-calendar'"/>
          <div class="form-group-checkbox flex nowrap">
            <input type="checkbox" id="tac" name="fruit-1" value="Apple">
            <label for="tac">
              I have read and accepted the
              <a href="#">terms</a> and
              <a> conditions</a> of use of the software.
            </label>
          </div>
          <buttonText
            v-bind:text="'Submit'"/>
        </form>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.form-large-container {
  min-height: 100vh;
  .form-group {
    margin: 10px 0;
    display: flex;
    flex-flow: column nowrap;
  }
}
.form-group-checkbox {
  display: flex;
  flex-flow: row nowrap;
  margin: 20px 0;
  label {
    margin-left: 12px;
    font-size: 14px;
    a {
      color: #1e9ff5;
    }
  }
}
</style>
<script>
import inputText from '@/components/forms/inputText.vue';
import inputRadio from '@/components/forms/inputRadio.vue';
import buttonText from '@/components/forms/buttonText.vue';
import inputSelect from '@/components/forms/inputSelect.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    inputText,
    buttonText,
    inputRadio,
    inputSelect,
  },
  name: 'home',
};
</script>
