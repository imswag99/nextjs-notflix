import styles from '@/app/styles/loading.module.css';

const loading = () => {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className={styles.hourglass}></div>
    </div>
  )
}

export default loading