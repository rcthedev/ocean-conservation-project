import React from 'react'
import Flashcard from './flashCard';
import '../App.scss';

export default function flashCardList({ flashcards }) {

    const flashCards = [
        {
            id: 1,
            question: 'Does plastic break down in sea water?',
            answer: 'False. It is very difficult for plastic to break down in sea water. Latest estimates that plastic can take anywhere from 20-600 years for it plastic to decompose. ',
            options: [
                'true',
                'false'
                
          
            ],
            src:'https://blogs.ei.columbia.edu/2011/01/26/our-oceans-a-plastic-soup/'
        },
        {
            id: 2,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges',
                'The Yellow River'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        },
        {
            id: 3,
            question: 'Do government subsidies of Large-scale fishing contribute to over-fishing?',
            answer: 'True. Subsidies can lead to overcapacity of fishing vessels and skewing of production costs so that fishing operations continue when they would otherwise not make economic sense',
            options: [
                'True',
                'False'
                
                
            ],
            src:'https://www.worldwildlife.org/threats/overfishing'
        },
        {
            id: 4,
            question: 'Over eight million metric tons of plastic end up in the ocean every year.',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'True',
                'False',
                'Im not sure.'
                
            ],
            src:'https://www.nationalgeographic.org/encyclopedia/great-pacific-garbage-patch/'
        },
        {
            id: 5,
            question: 'Can overfishing cause adverse changes to an oceans echo system?',
            answer: 'True ,When Food sources are depleted in an area it can change and oceans echo system including the migratory patterns of predator Sea life and bring them closer inland and closer to human contact.',
            options: [
                'True',
                'False',
                
                
            ],
            src:'https://sharkresearch.rsmas.miami.edu/research/projects/ecosystems-impacts-of-overfishing/'
        },
        {
            id: 6,
            question: 'Is the Red Tide harmful to humans?',
            answer: 'Harmful algal blooms (Red Tide), or HABs, occur when colonies of algae—simple plants that live in the sea and freshwater—grow out of control while producing toxic or harmful effects on people, fish, shellfish, marine mammals, and birds. The human illnesses caused by HABs, though rare, can be debilitating or even fatal.',
            options: [
                'True',
                'False'
                
                
            ],
            src:'https://oceanservice.noaa.gov/facts/redtide.html'
        },
        {
            id: 7,
            question: 'Can humans have worsening effects of the red tide?',
            answer: 'Chemicals from farming, factories, sewage treatment plants and other sources can become dissolved in water on the land. This water, called runoff, eventually flows into the ocean and can cause algae to grow faster, leading to red tides.',
            options: [
                'True',
                'False',
                'I do not know'
                
            ],
            src:'https://scijinks.gov/red-tide/'
        },
        {
            id: 8,
            question: 'What river is the most polluted?',
            answer: 'The Ganges! The Ganges River has the unfortunate title of being the most polluted river in the world it also provides drinking water to over 400 million people.',
            options: [
                'The Hudson River',
                'The Colorado River',
                'The Ganges.'
                
            ],
            src:'https://www.businessinsider.com/photos-indias-ganges-river-pollution-2018-1'
        }
        
      ]
    return (
        <div className="card-grid">
            {flashCards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )

}