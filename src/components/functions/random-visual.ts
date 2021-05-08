import Zx1 from "../../pages/imgs/svgbike/zx_1.svg"
import Zx2 from "../../pages/imgs/svgbike/zx_2.svg"
import Zx3 from "../../pages/imgs/svgbike/zx_3.svg"
import Zx4 from "../../pages/imgs/svgbike/zx_4.svg"
import Zx5 from "../../pages/imgs/svgbike/zx_5.svg"
import Zx6 from "../../pages/imgs/svgbike/zx_6.svg"
import Dio1 from "../../pages/imgs/svgbike/dio_1.svg"
import Julio1 from "../../pages/imgs/svgbike/julio_1.svg"
import Julio2 from "../../pages/imgs/svgbike/julio_2.svg"

const RandomVisual: Array = () => {
  const list: Array = [Zx1, Zx2, Zx3, Zx4, Zx5, Zx5, Zx6, Dio1, Julio1, Julio2]
  return list[Math.floor(Math.random() * list.length)]
}

export default RandomVisual
