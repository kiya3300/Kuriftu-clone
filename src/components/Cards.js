import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-6_kuriftu.jpg'
              text='KURIFTU RESORT & SPA AWASH FALLS
              Kuriftu Resort & Spa Awash Falls'
              label=''
              path='/services'
            />
            <CardItem
              src='images/img-2_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-3_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Mystery'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-5_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-14_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-1_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-9_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-10_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/img-11_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-12_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-13_kuriftu.jpg'
              text='Lake Tana Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & 
              Spa Lake Tana represents the Kuriftu brands second resort venture.'
              label='Adrenaline'
              path='/sign-up'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
