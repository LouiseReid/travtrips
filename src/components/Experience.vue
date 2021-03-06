<template lang="html">
  <div class="container__outter" v-if="experience">
    <h3>{{experience.name}}</h3>
    Categories:<ul>
      <li v-for="category in experience.categories"> {{ category }}</li>
    </ul>
    <div class="container__inner">
      <p>{{experience.description}}</p>
      <date-picker
      :inline="true"
      :disabledDates="disabledDates"
      v-model="date"
      />
    </div>
    Includes: <ul class="includes">
      <li v-for="includes in experience.includes">
        <span>&#10003;</span> {{ includes }}</li>
      </ul>

      <p>Cost: £{{ experience.cost }}</p>
      <div class="btn-container">
        <form v-on:submit="submit" method="post">
          <button type="submit">Add to Basket</button>
        </form>
        <router-link :to="{ name: 'experience-grid'}">&larr; Return to results</router-link>
      </div>
    </div>
  </template>

  <script>
  import EventService from '../services/EventService.js'
  import Datepicker from 'vuejs-datepicker';
  import { mapActions } from 'vuex';
  import _ from 'lodash';

  export default {
    props: ['id'],
    data(){
      return {
        experience: null,
        disabledDates: {
          days: []
        },
        date: null
      }
    },
    components: {
      'date-picker': Datepicker
    },
    mounted(){
      EventService.getExperience(this.id)
      .then(data => this.experience = data)
      .then(experience => this.disabledDates.days = experience['disable-days'])
    },
    methods: {
      ...mapActions(['postData']),
      submit(e){
        e.preventDefault()
        let data = this.createBasketObject(this.experience)
        if(this.date){
          this.postData(data)
        }
      },
      createBasketObject(experience){
        if(this.date === null) confirm('Please select a data')
        return {
          'location': experience.location,
          'name': experience.name,
          'cost': experience.cost,
          'date': this.date
        }
      }
    }
  }
  </script>

  <style lang="css" scoped>

    .container__outter {
      background-color: rgba(255, 255, 255, 0.65);
      display: flex;
      flex-direction: column;
      width: 65vw;
      margin: 0 20px;
      padding: 0 15px;
      height: 95vh;
      align-self: center
    }

    .container__inner {
      display: flex;
    }

    .container__inner p {
      padding-right: 10px;
    }

    h3 {
      letter-spacing: 2px
    }

    p {
      white-space: pre-line;
    }

    ul {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      margin: 0;
      margin-top: 10px;
      list-style: circle
    }

    li:not(:first-child) {
      margin-left: 10%
    }

    .includes {
      flex-direction: column;
      list-style: none;
      padding-left: 0;
    }

    .includes li {
      margin: 0
    }

    span {
      color: #077412
    }

    .btn-container {
      display: flex;
      justify-content: space-between;
    }

    input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
      border: none;
      padding: 0;
      font-family: 'PT Sans Narrow', sans-serif;
      font-size: 15px;
    }

    button, a {
      color: #23b090;
      background-color: rgba(255, 255, 255, 0.95);
      display: block;
      align-self: flex-end;
      width: 80px;
      text-align: center;
      border:  1px solid #23b090;
      padding: 5px;
      text-decoration: none;
      transition: all .5s
    }

    button:hover, a:hover {
      color: #ffffff;
      background-color: #23b090;
      transform: translateY(-2px);
    }

  </style>
