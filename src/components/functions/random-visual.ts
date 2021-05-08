import Zx1 from "../../images/zx_1.svg"
import Zx2 from "../../images/zx_2.svg"
import Zx3 from "../../images/zx_3.svg"
import Zx4 from "../../images/zx_4.svg"
import Zx5 from "../../images/zx_5.svg"
import Zx6 from "../../images/zx_6.svg"

const RandomVisual: Array = () => {
  const list: Array = [Zx1, Zx2, Zx3, Zx4, Zx5, Zx5, Zx6]
  return list[Math.floor(Math.random() * list.length)]
}

export default RandomVisual
