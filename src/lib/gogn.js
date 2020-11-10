
import { el, element, formatDate } from './utils';
import { createPopup } from './map';


export async function jardskjalfti(ul, earthquakes) {
    earthquakes.then((jardskjalftinnArray) => {
        jardskjalftinnArray.forEach((jardskjalftinn) => {
            const marker = createPopup(jardskjalftinn);
            ul.appendChild(
                el('li',
                    el('div',
                        el('h2', jardskjalftinn.properties.title),
                        el('dl',
                            el('dt', 'Tími'),
                            el('dd', `${formatDate(jardskjalftinn.properties.time)}`),
                            el('dt', 'Styrkur'),
                            el('dd', `${jardskjalftinn.properties.mag} á richter`)),
                        el('div',
                            element('button', { class: 'buttons' },
                            { click: () => { marker.openPopup(); } },
                            'Sjá á korti'),
                        element('a', { href: jardskjalftinn.properties.url, target: '_blank' }, {}, 'Skoða nánar')))),
              );
            });
            document.querySelector('.earthquakes-container').removeChild(document.querySelector('.loading'));
          });
      }