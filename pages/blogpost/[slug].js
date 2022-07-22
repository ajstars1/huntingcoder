import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

const Slug = () => {
    const router = useRouter()
    const {slug} = router.query
    
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <h1>{slug}</h1>
      <hr/>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quod exercitationem perferendis veniam id quidem odio et accusantium atque consequuntur ad, placeat quaerat nulla sequi laboriosam, earum aspernatur voluptas neque molestias. Ipsum non neque veritatis ratione quidem quasi. Voluptate animi in ducimus, tempora reiciendis voluptas soluta corrupti nobis facilis molestiae expedita est repellendus quae nemo tenetur cupiditate a! Velit consequatur laborum placeat. Illum voluptatibus dolorum tenetur veritatis impedit quod officia, aliquam veniam reiciendis asperiores dolor modi eius nostrum fuga minus atque repudiandae quam odit debitis earum! Repellendus labore animi atque voluptate magnam nam pariatur exercitationem quas molestias accusantium maiores cupiditate, quasi dolore sunt! Eaque adipisci, laborum, architecto culpa pariatur eius consequatur ea odit incidunt repellat tempora? Rem beatae aut pariatur sapiente cumque ipsa consequuntur, harum repudiandae, cum quis id tenetur omnis reiciendis perferendis ea fugiat error placeat alias. Maiores quaerat neque enim ullam dignissimos itaque culpa excepturi cumque hic officia, sunt non laborum voluptas cupiditate exercitationem saepe eius, dicta nulla recusandae, nesciunt sequi temporibus. Quidem reiciendis ipsa aliquam neque sed, a eos odio ullam tempore consectetur exercitationem expedita est quia mollitia ducimus distinctio quas quae. Quibusdam mollitia atque officiis at soluta, amet odit iste excepturi. Atque, natus deserunt! Impedit quisquam rerum culpa temporibus? Consectetur corrupti atque harum aliquid eius esse voluptates magnam aspernatur eaque? Hic, quidem nulla doloribus fugiat, libero blanditiis nisi fuga sint est incidunt accusantium qui vitae repellat. Excepturi, praesentium!
      </div>
      </div>
      </div>
  )
}
export default Slug