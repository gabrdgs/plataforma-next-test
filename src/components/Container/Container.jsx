import styles from './Container.module.scss';



function Container({ 
  children,
  color='default', 
  width='default',
}) {

  return <div className={styles.Container} data-color={color} data-width={width}>{children}</div>;
}

export default Container;
