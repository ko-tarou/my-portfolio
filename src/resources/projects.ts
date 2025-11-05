// プロジェクトデータの型定義
export interface Project {
  title: string
  desc: string
  details: string
  technologies: string[]
}

// Project data with additional details
export const projects: Project[] = [
  {
    title: "Hackit運営",
    desc: "校内のハッカソンイベントの運営",
    details:
      "校内で開催するハッカソン運営の主催を行っています。一年生の参加者が増えるように、企画や広報を行っています。スポンサー大募集中です",
    technologies: ["Notion", "Git", "Web", "Slack"],
  },
  {
    title: "LogiLink",
    desc: "配送業者同士の連携SNSアプリ",
    details:
      "配送業者同士の連携をスムーズに行うためのアプリです。サプライチェーンの会社全てを繋ぎ、契約や受注などの流れを全て自動化することを目指したプロダクトです。2024年問題を解決することを目指しています。",
    technologies: ["Android", "IOS", "Web", "AWS"],
  },
  {
    title: "DeadLine Widget",
    desc: "締め切り管理アプリ",
    details:
      "widgetを利用し、締め切りを管理するアプリです。ハッカソンの作品として開発し、リリースしました。締め切りを可視化することで、タスク管理を効率化します。",
    technologies: ["Swift", "SwiftData", "Widget", "SwiftUI"],
  },
  {
    title: "MichikusaMemo",
    desc: "位置情報と紐付けしたメモ帳アプリ",
    details:
      "場所にメモを書くことのできるアプリです。旅行やカンファレンスなどで飛び回る人に向けたアプリです。SwiftUIで実装し、リリースしました。DBのクラウド化を目指しています。",
    technologies: ["IOS", "SwiftUI", "MapKit"],
  },
  {
    title: "スマプロ",
    desc: "校内のプロジェクト活動",
    details:
      "2年生からリーダーを務めている。大学内のプロジェクト団体です。アプリ開発を中心に、WebやUnityなど幅広く勉強しています。",
    technologies: ["Web", "IOS", "Android"],
  },
  {
    title: "DevTree",
    desc: "エンジニア志望向けスキルツリーアプリ",
    details:
      "エンジニアが自分に足りてない知識を把握するためのスキルツリーアプリです。2年生になる直前に、新入生たちに向けて開発しました。",
    technologies: ["Android", "Kotlin", "JetpackCompose", "Room"],
  },
]
