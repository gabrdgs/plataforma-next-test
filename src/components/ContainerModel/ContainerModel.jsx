import styles from './ContainerModel.module.scss';

function ContainerModel({ 
  children,
  color='default', 
  width='default',
}) {

  return <div className={styles.Container} data-color={color} data-width={width}>{children}</div>;
}

export default ContainerModel;
