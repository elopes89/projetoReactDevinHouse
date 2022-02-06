import styles from './Card.module.css';


export const Card = ({ pokemon }) => {
  return (
    <div className={styles['card']} key={pokemon.id}>
      <div className={styles.thumbnail}>
        <img className={styles.image} src={pokemon.Thumbnail} alt={pokemon.title} />
      </div>
      <h2 className={styles['card__title']}>{pokemon.title}</h2>
      <div className={styles.description}>
        <PokemonPropertiesItem title="Tipo:" list={pokemon.title} />
      </div>
    </div>
  );
};

const PokemonPropertiesItem = ({ title, list }) => {
  return (
    <div className={styles.cardDescItem}>
      <span className={styles['card__spec-title']}>{title}</span>
      <div className={styles['card__spec-value']}>
        {list.map((property) => (
          <span key={property} className={styles.pokePropertyItem} >
            {property}
          </span>
        ))}
      </div>
    </div>
  );
};
