// importa öðru sem þarf...
import { fetchEarthquakes } from './lib/earthquakes';
import { init } from './lib/map';
import { jardskjalfti } from './lib/gogn';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  const earthquakes = fetchEarthquakes();
  const listi = document.querySelector('.earthquakes');

  jardskjalfti(listi, earthquakes);

  init('themap');
});
