import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

declare var TL: any;
declare var window: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: [
    './history.component.scss',
    '../../../../assets/timeline/css/timeline.css',
    '../../../../assets/timeline/css/fonts/font.default.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const dataObject = {
      'title': {
        'media': {
          'url': '//www.flickr.com/photos/tm_10001/2310475988/',
          'caption': 'Whitney Houston performing on her My Love is Your Love Tour in Hamburg.',
          'credit': "flickr/<a href='http://www.flickr.com/photos/tm_10001/'>tm_10001</a>"
        },
        'text': {
          'headline': "Whitney Houston<br/> 1963 - 2012",
          'text': "<p>Houston's voice caught the imagination of the world propelling her to superstardom at an early age becoming one of the most awarded performers of our time. This is a look into the amazing heights she achieved and her personal struggles with substance abuse and a tumultuous marriage.</p>"
        }
      },
      'events': [
        {
          'media': {
            'url': "{{ static_url }}/img/examples/houston/family.jpg",
            'caption': "Houston's mother and Gospel singer, Cissy Houston (left) and cousin Dionne Warwick.",
            'credit': "Cissy Houston photo:<a href='http://www.flickr.com/photos/11447043@N00/418180903/'>Tom Marcello</a><br/><a href='http://commons.wikimedia.org/wiki/File%3ADionne_Warwick_television_special_1969.JPG'>Dionne Warwick: CBS Television via Wikimedia Commons</a>"
          },
          'start_date': {
            'month': '8',
            'day': '9',
            'year': '1963'
          },
          'text': {
            'headline': 'A Musical Heritage',
            'text': "<p>Born in New Jersey on August 9th, 1963, Houston grew up surrounded by the music business. Her mother is gospel singer Cissy Houston and her cousins are Dee Dee and Dionne Warwick.</p>"
          }
        },
        {
          'media': {
            'url': "https://youtu.be/5Fa09teeaqs",
            'caption': "CNN looks back at Houston's iconic performance of the national anthem at Superbowl XXV.",
            "credit": "CNN"
          },
          "start_date": {
            "year": "1991"
          },
          "text": {
            "headline": "Super Bowl",
            "text": "Houston's national anthem performance captures the hearts and minds of Americans ralllying behind soldiers in the Persian Guf War."
          }
        },
        {
          'media': {
            'url': "https://youtu.be/h9rCobRl-ng",
            'caption': "\"Run To You\" from the 1992 \"Bodyguard\" soundtrack..",
            'credit': "Arista Records"
          },
          'start_date': {
            'year': "1992"
          },
          'text': {
            'headline': "\"The Bodyguard\"",
            'text': "Houston starred opposite Kevin Costner in the box office hit, The Bodyguard. The soundtrack to the movie sold over 44 million copies worldwide  garnering 3 Grammy's for the artist."
          }
        }
      ]
    };
    const additionalOptions = {
      start_at_end: false,
      /* default_bg_color: {
        r: 0,
        g: 0,
        b: 0
      }, */
      timenav_height: 250
    };

    window.timeline = new TL.Timeline('timeline', dataObject, additionalOptions);
  }

}
