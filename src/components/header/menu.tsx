import { Link } from "gatsby"
import React from "react"
import { Location } from '@reach/router'

const Menu = () => (
  <>
    <Location>
      {({ location }) => {
        return(
          <ul className="globalMenu">
            <li>
              <Link to="/"
                className={location.pathname === '/' ?
                  `--active` : ''
                }
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to="/archives"
                className={location.pathname.match(/\/archives/) ?
                  `--active` : ''
                }
              >
                原付改造
              </Link>
            </li>
            <li>
              <Link to="/spec"
                className={location.pathname.match(/\/spec/) ?
                  `--active` : ''
                }
              >
                改造インプレ
              </Link>
            </li>
            <li>
              <Link to="/touring"
                className={location.pathname.match(/\/touring/) ?
                  `--active` : ''
                }
              >
                ツーリングレポート
              </Link>
            </li>
            <li>
              <Link to="/mini4wd"
                className={location.pathname.match(/\/mini4wd/) ?
                  `--active` : ''
                }
              >
                ミニ四駆
              </Link>
            </li>
            <li>
              <Link to="/superthomas"
                className={location.pathname.match(/\/superthomas/) ?
                  `--active` : ''
                }
              >
                プラレール・スーパートーマス
              </Link>
            </li>
            <li>
              <Link to="/diary"
                className={location.pathname.match(/\/diary/) ?
                  `--active` : ''
                }
              >
                Diary
              </Link>
            </li>
          </ul>
        )
      }}
    </Location>
  </>
)

export default Menu
