
type CitiesListProps = {
  citiesList: string[];
  selectedCity: string;
}

function CitiesList({ citiesList, selectedCity }: CitiesListProps): JSX.Element {
  console.log(citiesList, selectedCity); //eslint-disable-line no-console
  return (
    <ul className="locations__list tabs__list">
      {citiesList.map((city, id) => {
        const keyValue = `${id}-${city}`;
        return (
          <li key={keyValue} className="locations__item">
            <a className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}>
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>);
}

export default CitiesList;
