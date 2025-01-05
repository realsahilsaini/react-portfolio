import {PICTURES} from '../constant'
import styles from './Masonry.module.css'


const MasonryGrid = () => {

  return (
    <div className='motion-preset-blur-up motion-delay-500'>
      <div className={styles.gridContainer} >
        <div className={styles.mansoryContainer} >

          {PICTURES.map((pictureLink)=>{
            return (
              <div className={styles.box}>
            <img className='border-[1.5px] border-neutral-400 dark:border-neutral-600'
            loading='lazy' 
            src={`${pictureLink}`}/>
          </div>
            )
          })}

          
          
    
        </div>
      </div>
    </div>
  )
}

export default MasonryGrid