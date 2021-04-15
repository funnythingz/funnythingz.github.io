import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="About" />
    <h1>Hello! Making Machinez</h1>
    <p>
      このサイトは、2004年～2006年まで "makingmachine.com" で公開されていた原付改造日記を再構築したものです。
      <br />
      (※ "makingmachine.com" は2006年に閉鎖。)
      <br />
      再構築の際にはMovableType4.2(以下MT)を使って旧サイトでは手書きで更新していた日記をブログにしました。
      <br />
      デザインやコンテンツは旧サイト当時のものをそのまま流用し、Web標準に基づいたXHTML+CSSによってゼロからソースコードをかきなおしました。
    </p>
    <p>
      そして、2009年1月、"makingmachinez.com" と語尾に "z" をつけて完全復活しました。
      <br />
      2010年9月、MovableTypeのバージョンを5にアップグレードし、テンプレートも一新しました。(デザイン変更なし)
      <br />
      ここで紹介されてる原付たちは4台中4台すべてが廃車になっています。
      <br />
      とまぁだらだら書き綴りましたが、このサイトが原付小僧たちにとって原付を改造する際に役に立てれば良いかなと思ってます。
    </p>
    <p>
      ↑のリニューアルからさらに5年が経ったのでデザインリニューアルしました。どちらかというとPCよりもスマートフォン寄りのデザインに変更しました。と言ってもそんなに変わってないですが…。
    </p>
    <p>
      さらに2015年8月、middlemanに載せ替えました！GitHub Pagesとして公開しています。
    </p>
    <p>
      そして2017年4月末、Bootstrap4でDOMをすべてリファクタリングしました。
    </p>
    <p>
      そして2021年、ReactベースのGatsbyでUIからすべてを完全に作り変えています。
    </p>
    <p>
      何はともあれ、今後ともMaking Machinezをよろしくお願いいたします。
    </p>
  </Layout>
)

export default About
